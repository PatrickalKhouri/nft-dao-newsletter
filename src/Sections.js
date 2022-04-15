import React from 'react';
import Investments from './Investments'

const Sections = ({todaysNews}) => {
  const {investmentsUpdates, security,  mints, nftNews, others} = todaysNews
  console.log(investmentsUpdates)

  return (<section>
    <h5>Sections</h5>
    <Investments investmentsUpdates={investmentsUpdates}/>
  </section>
  )}

export default Sections