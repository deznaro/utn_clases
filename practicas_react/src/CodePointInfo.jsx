import React from 'react'

const CodePointInfo = (props) => {
  return (
    <div>
        <h2>Code Point</h2>
        <div>{props.children}</div>
    </div>
  )
}

export default CodePointInfo