//big box with picture

import React from 'react';

function Bbox(prop){
    return(
        <div className="big">
            <h3>{prop.title}</h3>
            <p>821</p>
            <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/36414330/original/8ba2103e3d16c5dd9a7035781e3505d85478d001/design-apa-styled-single-case-design-graphs.png' className="pic"/>
        </div>
    )
}

export default Bbox
