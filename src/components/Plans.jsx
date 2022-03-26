import PlanCard from "./PlanCard";
import basic from "./../images/basic.png";
import platinum from "./../images/platinum.png";
import premium from "./../images/premium.png";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import "animate.css";

const Plans = () => {
  return (
    <div className=" w-full p-4 border-b border-solid border-gray-800">
      <div className="flex flex-col  mt-20 w-full p-4 animate__animated animate__fadeInDown">
        <h1 className="text-white text-5xl text-left font-bold leading-normal ">
          NFT Dubai Plans
        </h1>
        <p>Enjoy wide range of benefits and privileges from our plans.</p>
      </div>
      <div className="w-full mt-8 p-4 flex items-center justify-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-20">
        <PlanCard
          img={basic}
          plan="BASIC PLAN"
          price={1}
          animationClass="animate__animated animate__fadeInLeft"
        >
          <ul className="space-y-2">
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Whitepaper</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Website</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Social Media</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Token Creation</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Marketing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Private Presale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Public Sale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">DEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined /> <span className="ml-6">CMC Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined /> <span className="ml-6">CG Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined /> <span className="ml-6">CEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined />{" "}
              <span className="ml-6">Continuous Marketing</span>{" "}
            </li>
          </ul>
        </PlanCard>

        <PlanCard
          img={platinum}
          plan="PLATINUM PLAN"
          price={2}
          animationClass="animate__animated animate__fadeInUp"
        >
          <ul className="space-y-2">
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Whitepaper</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Website</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Social Media</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Token Creation</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Marketing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Private Presale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Public Sale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">DEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">CMC Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">CG Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined /> <span className="ml-6">CEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate line-through">
              <CloseOutlined />{" "}
              <span className="ml-6">Continuous Marketing</span>{" "}
            </li>
          </ul>
        </PlanCard>

        <PlanCard
          img={premium}
          plan="PREMIUM PLAN"
          price={3}
          animationClass="animate__animated animate__fadeInRight"
        >
          <ul className="space-y-2">
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Whitepaper</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Website</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Social Media</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Token Creation</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Marketing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Private Presale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">Public Sale</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">DEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">CMC Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">CG Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined /> <span className="ml-6">CEX Listing</span>{" "}
            </li>
            <li className="flex items-center truncate ">
              <CheckOutlined />{" "}
              <span className="ml-6">Continuous Marketing</span>{" "}
            </li>
          </ul>
        </PlanCard>
      </div>
    </div>
  );
};

export default Plans;
