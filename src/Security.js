import React from 'react';

const Security = ({security}) => {

  if (security === '') {
    return null
  }
  const securityArray = security.split('\n')

  return (
  <section>
    <h2> Security </h2>
    {securityArray.map((line) => {
      return (
        <p>{line}</p>
      )
    })}
  </section>
  )
}

export default Security