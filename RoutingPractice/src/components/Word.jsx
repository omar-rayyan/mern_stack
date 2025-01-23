import React from 'react';
import { useParams } from "react-router";

const Word = () => {
    const { word } = useParams();
    const notNumber = isNaN(word);
    return (
        <>
        {
        notNumber ?
        <h1> The word is: {word}</h1> :
        ''
        }
        {
        !notNumber ?
        <h1> The number is: {word}</h1> :
        ''
        }
        </>
    );
}
export default Word;