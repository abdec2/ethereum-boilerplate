import { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenIds = (address) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized, chainId } = useMoralis();
  const { resolveLink } = useIPFS();
  const [NFTTokenIds, setNFTTokenIds] = useState([]);
  const options = {
    chain: chainId,
    address,
    limit: 10,
  };
  let data;

  // const {
  //     fetch: getNFTTokenIds,
  //     data,
  //     error,
  //     isLoading,
  // } = useMoralisWeb3ApiCall(token.getAllTokenIds, options);

  useEffect(async () => {
    if (isInitialized) {
      data = await token.getAllTokenIds(options);
    }
    console.log(data);
    if (data?.result) {
      const NFTs = data.result;
      for (let NFT of NFTs) {
        if (NFT?.metadata) {
          NFT.metadata = JSON.parse(NFT.metadata);
          // metadata is a string type
          NFT.image = resolveLink(NFT.metadata?.image);
        }
      }
      setNFTTokenIds(NFTs);
    }
  }, [data, isInitialized]);

  return { NFTTokenIds };
};
