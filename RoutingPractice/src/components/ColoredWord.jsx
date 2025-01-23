import React from 'react';
import { useParams } from "react-router";

const ColoredWord = () => {
    const { word, textColor, backgroundColor } = useParams();
    const notNumber = isNaN(word);
    return (
        <>
        {
        notNumber ?
        <h1 style={{
            backgroundColor: backgroundColor,
            color: textColor,
            border: '0.5vh solid black',
        }}> The word is: {word}</h1> :
        ''
        }
        {
        !notNumber ?
        <h1 style={{
            backgroundColor: backgroundColor,
            color: textColor,
            border: '0.5vh solid black',
        }}> The number is: {word}</h1> :
        ''
        }
        </>
    );
}
export default ColoredWord;