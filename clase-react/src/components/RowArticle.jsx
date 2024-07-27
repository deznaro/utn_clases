import React from "react";

export const RowArticle = (props) => {
    return (
        <article> 
            <h1>{props.titulo}</h1>
            <span>{props.fecha}</span>
            <br />
            <a>{props.direccion_author}</a>
            <hr />
        </article>
    )
}