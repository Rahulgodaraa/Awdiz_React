import React from 'react'

const Mapping = () => {


  const students = [
    {name : "Rahul" ,
      value : true
    }
,
    {name : "Rahul" ,
      value : true
    }
    ,
    {name : "Rahul" ,
      value : true
    }
  ];

  return (
    <div>
      <ul>
        {students.map((i) => (<li>{i}</li>))}
      </ul>
    </div>
  )
}

export default Mapping


