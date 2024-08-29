import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {

    const { id } = useParams()

    
  return (
    <div>{id}</div>
  )
}

export default UseParams