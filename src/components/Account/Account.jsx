import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "../Blockie";
import { Button, Card, Dropdown, Modal } from "antd";
import { useState } from "react";
import Address from "../Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import Text from "antd/lib/typography/Text";
import { connectors } from "./config";
import NativeBalance from "components/NativeBalance";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
};

function Account() {
  const { authenticate, isAuthenticated, account, chainId, logout } =
    useMoralis();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  if (!isAuthenticated || !account) {
    return (
      <>
        <div
          className="w-32 bg-[#00a3ff] py-[8px] px-4 rounded-2xl hover:bg-blue-400 cursor-pointer hidden sm:block"
          onClick={() => setIsAuthModalVisible(true)}
        >
          <a className="text-white hover:text-white">
            <p className="text-center font-normal">Connect Wallet</p>
          </a>
        </div>

        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500" }}
          width="340px"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Connect Wallet
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <div
                style={styles.connector}
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId });
                    window.localStorage.setItem("connectorId", connectorId);
                    setIsAuthModalVisible(false);
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                <img src={icon} alt={title} style={styles.icon} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  const menu = (
    <div className="w-96 text-[17px] font-medium bg-gray-800 text-white p-4 rounded-2xl">
      <div className="p-2 ">
        <Address avatar="left" size={6} copyable style={{ fontSize: "20px" }} />
      </div>
      <Card className="mt-[10px] rounded-2xl p-[15px] bg-transparent border border-solid border-gray-700">
        <div>
          <NativeBalance />
        </div>
        {/* <div style={{ marginTop: "10px", padding: "0 10px" }}>
          <a
            href={`${getExplorer(chainId)}/address/${account}`}
            target="_blank"
            rel="noreferrer"
          >
            <SelectOutlined style={{ marginRight: "5px" }} />
            View on Explorer
          </a>
        </div> */}
      </Card>
      <Button
        size="large"
        type="default"
        className="w-full mt-[10px] rounded-full border border-gray-700 bg-transparent hover:bg-transparent hover:border-white text-white hover:text-white"
        onClick={async () => {
          await logout();
          window.localStorage.removeItem("connectorId");
          setIsModalVisible(false);
        }}
      >
        Disconnect Wallet
      </Button>
    </div>
  );

  return (
    <>
      {/* <button
        onClick={async () => {
          try {
            console.log("change")
            await web3._provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
            console.log("changed")
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Hi
      </button> */}

      <Dropdown
        className="bg-transparent hover:bg-slate-50 hover:bg-opacity-20 text-white"
        overlay={menu}
        trigger={["click"]}
        placement="bottomRight"
      >
        <div className="rounded-full border-2 border-solid border-[#00a3ff] hover:border-white cursor-pointer">
          <Blockie currentWallet scale={5} />
        </div>
      </Dropdown>

      {/* <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 6)}
        </p>
        
      </div> */}
      {/* <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          className="w-full mt-[10px] rounded-lg text-[16px] font-medium"
          onClick={async () => {
            await logout();
            window.localStorage.removeItem("connectorId");
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal> */}
    </>
  );
}

export default Account;
