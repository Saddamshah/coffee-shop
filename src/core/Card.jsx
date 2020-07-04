import React from 'react'

const Card = ({src, name, price, description}) => {
    return (
        <div className="text-center ">
            <div className="px-2">
                <img src={src} alt={name} width="100%"/>
            </div>
            
            <div className="d-flex justify-content-between px-3 heading align-items-center">
                <div className=" mt-3 mb-1" style={{letterSpacing: "1.8px"}}>
                    <h5>{name}</h5>
                </div>

                <div className=" text-center p-2">
                    ₹{price}
                </div>
            </div>

            <div className="px-1" style={{opacity: "0.8"}}>
                {description}
            </div>
        </div>
    )
}

export default Card;
