import { MenuFoldOutlined } from "@ant-design/icons";
import { Drawer, Space } from "antd";
import React, { useState } from "react";

export const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Space>
        <MenuFoldOutlined
          onClick={showDrawer}
          className="text-gray-500 md:hidden hover:text-white cursor-pointer text-xl"
        />
      </Space>
      <Drawer
        title="Basic Drawer"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="left"
        destroyOnClose={true}
        width="100%"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
