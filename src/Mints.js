import React from 'react';

const Mints = ({mints, mintsHeaders}) => {

  return (<section>
    <h5>Mints</h5>
    {Object.keys(mints).map((keyName) => {
      if (mints[keyName] === '') {
        return null
      }
      const arrayText = mints[keyName].split('\n')
      return (
        <>
        <h3>{mintsHeaders[keyName]}</h3>
        {arrayText.map((line) => {
          return <p>{line}</p>
        })}
        </>
      )
    })
    }
  </section>
  )}

export default Mints