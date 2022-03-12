import React from "react";
import { Layout } from "antd";
import Text from "antd/lib/typography/Text";
const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className="text-center bg-[#04111d] ">
      <Text className="block text-[#87ACA3]">
        © NFTDubai, Inc. All rights reserved.
      </Text>

      <Text className="block text-[#87ACA3]">
        <a target="_blank" rel="noopener noreferrer" href="#">
          Privacy Policy
        </a>
      </Text>

      <Text className="block text-[#87ACA3]">
        <a target="_blank" rel="noopener noreferrer" href="#">
          Terms & Conditions
        </a>
      </Text>
    </Footer>
  );
};
