import React from 'react';

const Investments = ({investmentsUpdates, investmentsUpdatesHeader}) => {

  return (<section>
    <h2>Investments</h2>
    {Object.keys(investmentsUpdates).map((keyName) => {
      if (investmentsUpdates[keyName] === '') {
        return null
      }
      const investmentsArray = investmentsUpdates[keyName].split('\n')
      return (
        <>
        <h3>{investmentsUpdatesHeader[keyName]}</h3>
        {investmentsArray.map((line) => {
          return <p>{line}</p>
        })}
        </>
      )
    })
    }
  </section>
  )}

export default Investments