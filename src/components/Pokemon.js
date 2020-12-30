import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/pokemonAction';
import _ from 'lodash';

const Pokemon = (props) => {
    
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    const ShowData = () => {

        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokemonData = pokemonState.data[pokemonName]
            return  (
                <div className = 'pokemon-wrapper'> 
                    <div className = 'item'>
                        <h1 className = 'pokemon-feature-name'>Sprites</h1>
                        <br/>
                        <img 
                            src = {pokemonData.sprites.front_default}
                            alt = 'Pokemon'
                        />
                        <img 
                            src = {pokemonData.sprites.back_default}
                            alt = 'Pokemon'
                        />
                        <img 
                            src = {pokemonData.sprites.front_shiny}
                            alt = 'Pokemon'
                        />
                        <img 
                            src = {pokemonData.sprites.back_shiny}
                            alt = 'Pokemon'
                        />   
                    </div>
                    <div className = 'item'>
                        <h1 className = 'pokemon-feature-name'>Stats</h1>
                        <br/>
                        {pokemonData.stats.map((el) => {
                            return <p>{el.stat.name} - {el.base_stat}</p>
                        })}
                    </div>
                    <div className = 'item'>
                        <h1 className = 'pokemon-feature-name'>Abilities</h1>
                        {pokemonData.abilities.map((el) => {
                            return <p>{el.ability.name} {el.base_stat}</p>
                        })}
                    </div>
                </div>
            )
        }

        if (pokemonState.loading) {
            return <p>Loading...</p>
        }

        if(pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>Error getting pokemon</p>

    }

    console.log('pokemon Name', pokemonState.data);

    return (
        <div className = 'pokemon'>
            <h1>{pokemonName}</h1>
            {ShowData()}
        </div>
    )
} 

export default Pokemon;