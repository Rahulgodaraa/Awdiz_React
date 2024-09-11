import React, { memo } from 'react'

const Childrenmemo = ({count2}) => {
    console.log("Child memo was triggered");
    
  return (
    <div>Childrenmemo</div>
  )
}

export default memo(Childrenmemo)