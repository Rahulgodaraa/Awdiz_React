import React, { useState } from 'react'

const DynamicCss = () => {
    const [isButton , setIsButton] = useState(false);
    
    function buttonClick(){
        setIsButton(!isButton);
    }

  return (
<div className='parentDiv'>
<div onClick={buttonClick} className={isButton ? 'active' : 'not-active'}>{isButton ? "ACTIVE" : "NOT-ACTICE"}</div>

</div>  )
}

export default DynamicCss