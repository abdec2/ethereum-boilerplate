import { useEffect, useState } from "react";
import { useMoralis, useNativeBalance } from "react-moralis";
import { menuItems } from "./Chains/Chains";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated, chainId } = useMoralis();
  const [selected, setSelected] = useState({});
  console.log(selected);
  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
  }, [chainId]);

  if (!account || !isAuthenticated) return null;

  return (
    <div className="whitespace-nowrap text-white flex space-x-3 items-end">
      <div className="">{selected.icon}</div>
      <span>
        <p className="text-xs font-normal text-gray-500">Balance</p>
        <p className="text-xl">{balance.formatted}</p>
      </span>
    </div>
  );
}

export default NativeBalance;
