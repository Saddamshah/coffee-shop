import React from 'react'

const Heading = ({title, className}) => {
    return (
        <div className={className}>
            <h1 className="heading myColor myFontSize">{title}</h1>
            <hr className="hr"/>
        </div>
    )
}

export default Heading  
