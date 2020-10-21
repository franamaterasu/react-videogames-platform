import React from 'react';

const Detail = props => {
    const {image, name} = props.game;

    return (
       <section>
           <img src={image} alt={name} />
           <p>{name}</p>
       </section>
    )
};

export default Detail;