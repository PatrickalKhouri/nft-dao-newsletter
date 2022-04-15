import React from 'react';

const Mints = ({mints, mintsHeaders}) => {

  return (<section>
    <h2>Mints</h2>
    {Object.keys(mints).map((keyName) => {
      if (mints[keyName] === '') {
        return null
      }
      const mintsText = mints[keyName].split('\n')
      return (
        <>
        <h3>{mintsHeaders[keyName]}</h3>
        {mintsText.map((line) => {
          return <p>{line}</p>
        })}
        </>
      )
    })
    }
  </section>
  )}

export default Mints