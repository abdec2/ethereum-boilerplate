import { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AvaxLogo, PolygonLogo, BSCLogo, ETHLogo } from "./Logos";
import { useChain, useMoralis } from "react-moralis";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "0 10px",
  },
  button: {
    border: "2px solid rgb(231, 234, 243)",
    borderRadius: "12px",
  },
};

export const menuItems = [
  {
    key: "0x1",
    value: "Ethereum",
    icon: <ETHLogo />,
  },
  // {
  //   key: "0x539",
  //   value: "Local Chain",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x3",
  //   value: "Ropsten Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x4",
  //   value: "Rinkeby Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x2a",
  //   value: "Kovan Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x5",
  //   value: "Goerli Testnet",
  //   icon: <ETHLogo />,
  // },
  // {
  //   key: "0x38",
  //   value: "Binance",
  //   icon: <BSCLogo />,
  // },
  // {
  //   key: "0x61",
  //   value: "Smart Chain Testnet",
  //   icon: <BSCLogo />,
  // },
  // {
  //   key: "0x89",
  //   value: "Polygon",
  //   icon: <PolygonLogo />,
  // },
  {
    key: "0x13881",
    value: "Mumbai",
    icon: <PolygonLogo />,
  },
  // {
  //   key: "0xa86a",
  //   value: "Avalanche",
  //   icon: <AvaxLogo />,
  // },
  // {
  //   key: "0xa869",
  //   value: "Avalanche Testnet",
  //   icon: <AvaxLogo />,
  // },
];

function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const { isAuthenticated } = useMoralis();
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
  }, [chainId]);

  const handleMenuClick = (e) => {
    if (e.key !== chainId) {
      switchNetwork(e.key).then(() => {
        window.location.reload();
      });
    }
  };

  // item: {
  //   display: "flex",
  //   alignItems: "center",
  //   height: "42px",
  //   fontWeight: "500",
  //   fontFamily: "Roboto, sans-serif",
  //   fontSize: "14px",
  //   padding: "0 10px",
  // },
  // button: {
  //   border: "2px solid rgb(231, 234, 243)",
  //   borderRadius: "12px",
  // },
  const menu = (
    <Menu onClick={handleMenuClick} className="rounded-xl bg-[#001529]">
      {menuItems.map((item) => (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          className="flex item-center h-[42px] font-medium font-custom text-sm py-[10px] hover:bg-transparent group"
        >
          <span className="ml-[5px] text-white group-hover:text-[#00a3ff]">
            {item.value}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  if (!chainId || !isAuthenticated) return null;

  return (
    <div>
      <Dropdown
        className="bg-transparent hover:bg-slate-50 hover:bg-opacity-20 text-white"
        overlay={menu}
        trigger={["click"]}
      >
        <Button
          key={selected?.key}
          icon={selected?.icon}
          className="flex items-center h-[42px] font-medium font-custom text-sm py-[10px] rounded-3xl outline-none border-2 border-solid border-[#00a3ff] active:bg-transparent focus:bg-transparent"
          // style={{ ...styles.button, ...styles.item }}
        >
          <span style={{ marginLeft: "5px" }}>{selected?.value}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;
