import React from 'react'

const Child = () => {

    console.log('this is from child component');
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)
