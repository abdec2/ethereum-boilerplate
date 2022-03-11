import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <div className="text-[17px] w-full space-x-4 items-center font-medium hidden md:flex">
      <div className="px-2 mx-2 truncate">
        <NavLink className="text-white " to="/nftMarket">
          Explore
        </NavLink>
      </div>
      <div className="px-2 mx-2 truncate">
        <NavLink className="text-white " to="/nftBalance">
          My Collections
        </NavLink>
      </div>
      <div className="px-2 mx-2 truncate">
        <NavLink className="text-white " to="/nftBalance">
          Create
        </NavLink>
      </div>
    </div>
    // <Menu
    //   theme="dark"
    //   mode="horizontal"
    //   className="flex text-[17px] w-full justify-start font-medium"
    //   defaultSelectedKeys={[pathname]}
    // >
    //   <Menu.Item className=" active:bg-transparent" key="/nftMarket">
    //     <NavLink className="text-white " to="/nftMarket">
    //       Explore
    //     </NavLink>
    //   </Menu.Item>

    //   <Menu.Item key="/nftBalance">
    //     <NavLink to="/nftBalance">Your Collection</NavLink>
    //   </Menu.Item>

    //   <Menu.Item key="/transactions">
    //     <NavLink to="/transactions">Transactions</NavLink>
    //   </Menu.Item>
    // </Menu>
  );
}

export default MenuItems;
