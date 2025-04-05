import React from 'react'
import Ex2 from './Ex2'

const Ex = ({name}) => {
  return (
    <>
    <div>mai hu example1 with prop value {name}</div>
    <Ex2 user={name} />
    </>
  )
}

export default Ex