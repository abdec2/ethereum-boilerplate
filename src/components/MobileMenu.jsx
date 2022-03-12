import { MenuFoldOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Drawer, Space } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./../App"
import AccountMM from "./Account/AccountMM";
import Chains from "./Chains";

export const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const headerStyle = {
    background: '#001529',
    borderBottom: "none",
    paddingRight: "10px",
    paddingLeft: "10px"
  }
  const bodyStyle = {
    background: '#001529'
  }

  const title = (
    <Logo />
  );

  const closeIcon = (
    <div className="text-3xl text-gray-700 hover:text-gray-400 flex ">
      <CloseCircleOutlined />
    </div>
  )
  return (
    <>
      <Space>
        <MenuFoldOutlined
          onClick={showDrawer}
          className="text-gray-500 md:hidden hover:text-white cursor-pointer text-xl"
        />
      </Space>
      <Drawer
        title={title}
        placement="left"
        onClose={onClose}
        visible={visible}
        key="left"
        width="100%"
        headerStyle={headerStyle}
        closeIcon={closeIcon}
        bodyStyle={bodyStyle}

      >
        <div className="text-[17px] flex flex-col">
          <div className="px-2 py-4 mx-2 text-xl">
            <NavLink className="text-white " to="/nftMarket" onClick={() => setVisible(false)}>
              Explore
            </NavLink>
          </div>
          <div className="px-2 py-4 mx-2 text-xl">
            <NavLink className="text-white " to="/nftBalance" onClick={() => setVisible(false)}>
              My Collections
            </NavLink>
          </div>
          <div className="px-2 py-4 mx-2 text-xl">
            <NavLink className="text-white " to="/nftBalance" onClick={() => setVisible(false)}>
              Create
            </NavLink>
          </div>

          <AccountMM />
        </div>

        <div className="px-2 py-4 mx-2">
          <Chains />
        </div>
      </Drawer>
    </>
  );
};
