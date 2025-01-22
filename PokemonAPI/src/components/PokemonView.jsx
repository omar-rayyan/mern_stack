import react, { useState } from 'react';
import './PokemonView.css';
    
const PokemonView = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemons(response.results.map(pokemon => pokemon.name));
        }).catch(err=>{
            console.log(err);
        });
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