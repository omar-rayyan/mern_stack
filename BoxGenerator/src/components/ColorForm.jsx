import react, { useState } from 'react';
    
    
const ColorForm = (props) => {
    const [colors, setColors] = useState([]);
    const [colorInput, setColorInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newColors = [...colors, colorInput]; 
        setColors(newColors);
        props.onNewColor(newColors);
        setColorInput("");
    };

    const updateColorInput = (e) => {
        setColorInput(e.target.value);
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Add color</h1>
            <input type="text" placeholder="Enter a color" value={colorInput} onChange={updateColorInput}/>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default ColorForm;