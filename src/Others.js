import React from 'react';

const Others = ({others}) => {

  if (others === '') {
    return null
  }
  const othersArray = others.split('\n')

  return (
  <section>
    <h2> Nft and DAO news </h2>
    {othersArray.map((line) => {
      return (
        <p>{line}</p>
      )
    })}
  </section>
  )
}

export default Others