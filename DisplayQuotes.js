import React from 'react'

const DisplayQuotes = ({quote}) => {
    return(
        <div>
            <h1>{quote.character}</h1>
            <p>{quote.quote}</p>
            <img src={quote.image} alt=""/>
        </div>
    );
}

export default DisplayQuotes