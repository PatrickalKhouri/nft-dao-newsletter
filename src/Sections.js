import React from 'react';
import Investments from './Investments'

const Sections = ({todaysNews, headers}) => {
  const {investmentsUpdates, security,  mints, nftNews, others} = todaysNews
  const investmentsUpdatesHeader = headers.investmentsUpdates

  return (<section>
    <h5>Sections</h5>
    <Investments investmentsUpdates={investmentsUpdates} investmentsUpdatesHeader={investmentsUpdatesHeader}/>
  </section>
  )}

export default Sections