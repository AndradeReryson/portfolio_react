import React from 'react'
import './Container.css'
import '../../general/Theme.css'
import '../../general/Contraste-Theme.css'

const Container = ({id="", className="", children=null, flexDirection="row"}) => {
  return (
    <div id={id} className={'Container '+className} style={{flexDirection: flexDirection}}>
      <>{children}</>
    </div>
  )
}

export default Container