import React from 'react';
import Investments from './Investments'
import Mints from './Mints'

const Sections = ({todaysNews, headers}) => {
  const {investmentsUpdates, security,  mints, nftNews, others} = todaysNews
  const investmentsUpdatesHeader = headers.investmentsUpdates
  const mintsHeaders = headers.mints

  return (<section>
    <h5>Sections</h5>
    <Investments investmentsUpdates={investmentsUpdates} investmentsUpdatesHeader={investmentsUpdatesHeader}/>
    <Mints mints={mints} mintsHeaders={mintsHeaders}/>
  </section>
  )}

export default Sections