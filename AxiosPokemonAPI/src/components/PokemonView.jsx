import react, { useState } from 'react';
import './PokemonView.css';
import axios from 'axios';
    
const PokemonView = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
            setPokemons(response.data.results.map(pokemon => pokemon.name));
        })
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input type="submit" value="Fetch Pokemon" />
            </form>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon}</li>
                ))}
            </ul>
        </>
    );
};
    
export default PokemonView;