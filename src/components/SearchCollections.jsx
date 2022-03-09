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
        style={{ width: "1000px", marginLeft: "20px" }}
        placeholder="Find a Collection"
        optionFilterProp="children"
        onChange={onChange}
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </>
  );
}

export default SearchCollections;
