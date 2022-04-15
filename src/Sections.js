import React from 'react';
import Investments from './Investments'
import Mints from './Mints'
import Security from './Security'
import NftNews from './NftNews'
import Others from './Others'

const Sections = ({todaysNews, headers}) => {
  const {investmentsUpdates, security,  mints, nftNews, others} = todaysNews
  const investmentsUpdatesHeader = headers.investmentsUpdates
  const mintsHeaders = headers.mints

  return (<section>
    <Security security={security}/>
    <Investments investmentsUpdates={investmentsUpdates} investmentsUpdatesHeader={investmentsUpdatesHeader}/>
    <Mints mints={mints} mintsHeaders={mintsHeaders}/>
    <NftNews nftNews={nftNews}/>
    <Others others={others}/>
  </section>
  )}

export default Sections