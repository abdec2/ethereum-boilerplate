import { Select } from "antd";
import { useMoralis } from "react-moralis";
import { getCollectionsByChain } from "helpers/collections";

function SearchCollections({ setContractAddress }) {
  const { Option } = Select;
  const { chainId } = useMoralis();
  const NFTCollections = getCollectionsByChain(chainId);

  const onChange = (val) => {
    setContractAddress(val);
  };
  return (
    <>
      <Select
        showSearch
        className="w-full text-lg mx-4 hidden sm:block"
        dropdownClassName=" rounded-md px-4 focus:outline-none"
        // style={{ width: "1000px", marginLeft: "20px" }}
        placeholder="Find a Collection"
        optionFilterProp="children"
        onChange={onChange}
        size="large"
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option className="text-lg" value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </>
  );
}

export default SearchCollections;
