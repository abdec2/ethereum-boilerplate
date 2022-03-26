import { ETHLogo } from "./Chains/Logos";

const PlanCard = ({ img, plan, children, price, animationClass }) => {
  return (
    <div className={`w-full sm:w-80 p-4 bg-gray-800 rounded-lg ${animationClass}`}>
      <div className="space-y-2">
        <h3 className=" text-white text-xl font-medium leading-7 truncate">
          {plan}
        </h3>
        <img src={img} alt="NFT Plan" />
      </div>
      <div className="pt-4">
        <h2 className="uppercase text-white text-base font-medium">Benefits</h2>
      </div>
      <div className="py-2 text-sm">{children}</div>
      <div className="mt-2 flex items-center text-white text-3xl font-bold space-x-5 mb-6 leading-7">
        <ETHLogo />
        <div>{price} ETH</div>
      </div>
      <div>
        <button className="btn-grad text-white focus:outline-none w-full px-6 py-2 text-xl rounded-full">
          MINT
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
