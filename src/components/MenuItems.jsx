import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    // <div className="text-[17px] w-full space-x-4 items-center font-medium hidden md:flex truncate">
    //   <div className="px-2 mx-2 ">
    //     <NavLink className="text-white " to="/nftMarket">
    //       Explore
    //     </NavLink>
    //   </div>
    //   <div className="px-2 mx-2 ">
    //     <NavLink className="text-white " to="/nftBalance">
    //       My Collections
    //     </NavLink>
    //   </div>
    //   <div className="px-2 mx-2 ">
    //     <NavLink className="text-white " to="/nftBalance">
    //       Create
    //     </NavLink>
    //   </div>
    // </div>
    <div className="text-[17px] w-full space-x-4 items-center font-medium hidden md:flex truncate">
      <Menu
        theme="dark"
        mode="horizontal"
        className="flex text-[17px] w-full justify-start font-medium"
        defaultSelectedKeys={[pathname]}
      >
        <Menu.Item key="/nftMarket">
          <NavLink className="text-white" to="/nftMarket">
            Explore
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/nftBalance">
          <NavLink to="/nftBalance">My Collection</NavLink>
        </Menu.Item>

        <Menu.Item key="/transactions">
          <NavLink to="/nftBalance">Create</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuItems;
