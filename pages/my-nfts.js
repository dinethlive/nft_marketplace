import React, { useEffect, useState, useContext } from 'react';

import { NFTContext } from '../context/NFTContext';
import { Loader, NFTCard, Banner } from '../components/index';

const MyNFTs = () => {
  const { fetchMyNFTsOrCreatedNFTs, currentAccount } = useContext(NFTContext);
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Your NFTs"
          childStyles="text-center mb-4"
          parentStyle="h-80 justify-center"
        />
      </div>
    </div>
  );
};

export default MyNFTs;
