import React from 'react'

function InnerBanner(props) {
  return (
    <div className='inner-banner' style={{marginBottom:"80px"}}>
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
    </div>
  )
}

export default InnerBanner