import React from 'react';

const NftNews = ({nftNews}) => {

  if (nftNews === '') {
    return null
  }
  const nftNewsArray = nftNews.split('\n')

  return (
  <section>
    <h2> Nft and DAO news </h2>
    {nftNewsArray.map((line) => {
      return (
        <p>{line}</p>
      )
    })}
  </section>
  )
}

export default NftNews