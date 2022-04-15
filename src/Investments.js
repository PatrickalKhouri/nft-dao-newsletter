import React from 'react';

const Investments = ({investmentsUpdates, investmentsUpdatesHeader}) => {

  return (<section>
    <h5>Investments</h5>
    {Object.keys(investmentsUpdates).map((keyName) => {
      if (investmentsUpdates[keyName] === '') {
        return null
      }
      const arrayText = investmentsUpdates[keyName].split('\n')
      return (
        <>
        <h3>{investmentsUpdatesHeader[keyName]}</h3>
        {arrayText.map((line) => {
          return <p>{line}</p>
        })}
        </>
      )
    })
    }
  </section>
  )}

export default Investments