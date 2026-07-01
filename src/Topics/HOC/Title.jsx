import React from 'react'

const Title = ({children,color,visibility}) => {
  return (
    <div>
        
        {
            !visibility? <div>we can't process the card</div>:
            <div>
              <h1 style={{backgroundColor:`${color}`}}> Card Title</h1>
              {
            children
              }
            </div>
        }
    </div>
  )
}

export default Title