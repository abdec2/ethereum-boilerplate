import React from "react";
import { Layout } from "antd";
import Text from "antd/lib/typography/Text";
const { Footer } = Layout;

export const FooterComponent = () => {
  return (
    <Footer className="text-center bg-[#0C1446] ">
      <Text className="block text-[#87ACA3]">
        ⭐️ Please star this{" "}
        <a
          href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          boilerplate
        </a>
        , every star makes us very happy!
      </Text>

      <Text className="block text-[#87ACA3]">
        🙋 You have questions? Ask them on the {""}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
        >
          Moralis forum
        </a>
      </Text>

      <Text className="block text-[#87ACA3]">
        📖 Read more about{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
        >
          Moralis
        </a>
      </Text>
    </Footer>
  );
};
