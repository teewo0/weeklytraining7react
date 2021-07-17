import React from 'react'

export default function Card(props) {
    return (
        <div>

            <h2>{props.myProducts.title}</h2>
            <p>{props.myProducts.description}</p>
            <p>{props.myProducts.price}</p>
            <button onClick={props.myClick}>Add To Cart</button>
        </div>
    )
}
