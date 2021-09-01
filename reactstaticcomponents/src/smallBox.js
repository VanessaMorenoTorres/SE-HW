// three small containers
import React from 'react';

function Sbox(prop){
    return(
        <div className="small">
            <h3>{prop.title}</h3>
            <p>{prop.num1}</p>
            <p>{prop.num2}</p>
            <p>{prop.num3}</p>
        </div>
    )
}
export default Sbox