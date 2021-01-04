import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/pokemonAction';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import _ from 'lodash';

const Pokemon = (props) => {
    
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch()
    const pokemonState = useSelector(state => state.Pokemon)

    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, [])

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

    function ShowData() {

        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokemonData = pokemonState.data[pokemonName];
            return (
                <div className='pokemon-wrapper'>

                    <div className='pokemon-info-cards'>

                        <div className='pokemon-info-cards-other-than-moves'>

                            <div className='general-info-and-stats'>

                                <div className='general-info'>
                                    <h3>General Info</h3>
                                    <hr />
                                    <br />
                                    <div className='general-info-row'><p className='feature-name'>Order</p> <p className='feature-value'>{pokemonData.order}</p></div>
                                    <div className='general-info-row'><p className='feature-name'>Name</p>  <p className='feature-value'>{pokemonName}</p></div>
                                    <div className='general-info-row'><p className='feature-name'>Height</p> <p className='feature-value'>{pokemonData.height}(decimeters)</p></div>
                                    <div className='general-info-row'><p className='feature-name'>Weight</p> <p className='feature-value'>{pokemonData.weight}(hectograms)</p></div>
                                    <div className='general-info-row'><p className='feature-name'>Default</p> <p className='feature-value'>{pokemonData.is_default ? 'True' : 'False'}</p></div>
                                    <div className='general-info-row'><p className='feature-name'>Base Exp.</p> <p className='feature-value'>{pokemonData.base_experience}</p></div>
                                </div>

                                <div className='general-info'>
                                    <h3>Stats</h3>
                                    <hr />
                                    <br />
                                    {pokemonData.stats.map((el) => {
                                        return (
                                            <div className='stat-row'><p className='stat-name'>{el.stat.name}</p> <p className='stat-value'>{el.base_stat}</p><br /></div>
                                        );
                                    })}
                                </div>

                            </div>

                            <div className='abilities-and-types'>

                                <div className='abilities'>
                                    <div className='abilities-header'>
                                        <h3>Abilities</h3>
                                        <h3>Hidden</h3>
                                    </div>
                                    <hr />
                                    <br />
                                    {pokemonData.abilities.map((el) => {
                                        return (
                                            <div className='abilities-row'>
                                                <div className='ability-name'>
                                                    <p>{el.ability.name}</p>
                                                </div>
                                                <div className='ability-hidden'>
                                                    <p>{el.is_hidden ? 'True' : 'False'}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className='abilities'>
                                    <div className='abilities-header'>
                                        <h3>Types</h3>
                                        <h3>Slot</h3>
                                    </div>
                                    <hr />
                                    <br />
                                    {pokemonData.types.map((el) => {
                                        return (
                                            <div className='abilities-row'>
                                                <div className='ability-name'>
                                                    <p>{el.type.name}</p>
                                                </div>
                                                <div className='ability-hidden'>
                                                    <p>{el.slot}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                        <div className='pokemon-moves-card'>
                            <div className='pokemon-moves'>

                                <div className='pokemon-moves-header'>
                                    <h3>Moves</h3>
                                    <h3>Learn Method</h3>
                                </div>
                                <hr />
                                <br />
                                {!_.isEmpty(pokemonData.moves) ?
                                    (
                                        pokemonData.moves.map((el) => {
                                            return (
                                                <div className='pokemon-moves-row'>
                                                    <div className='moves-name'>
                                                        <p>{el.move.name}</p>
                                                    </div>
                                                    <div className='moves-learn-method'>
                                                        <p>{el.version_group_details[0].move_learn_method.name}</p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : <center>This Pokemon has no moves!</center>}
                            </div>

                        </div>

                    </div>

                    <div className='pokemon-images'>
                        <div className='pokemon-image-row'>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.front_default !== null ?
                                    <img
                                        title='Front Default View'
                                        src={pokemonData.sprites.front_default}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.back_default !== null ?
                                    <img
                                        title='Back Default View'
                                        src={pokemonData.sprites.back_default}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                        </div>
                        <div className='pokemon-image-row'>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.front_shiny !== null ?
                                    <img
                                        title='Front Shiny View'
                                        src={pokemonData.sprites.front_shiny}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.back_shiny !== null ?
                                    <img
                                        title='Back Shiny View'
                                        src={pokemonData.sprites.back_shiny}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                        </div>
                        <div className='pokemon-image-row'>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.other.dream_world.front_default !== null ?
                                    <img className='dream_world-image'
                                        title='Dream World'
                                        src={pokemonData.sprites.other.dream_world.front_default}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                            <div className='image-parent-container'>
                                {pokemonData.sprites.other['official-artwork'].front_default !== null ?
                                    <img className='artwork-image'
                                        title='Official Artwork'
                                        src={pokemonData.sprites.other['official-artwork'].front_default}
                                        alt='Pokemon' /> : "Not Available!"}
                            </div>
                        </div>
                    </div>

                </div>
            );
        }

        if (pokemonState.loading) {
            return <p>Loading...</p>;
        }

        if (pokemonState.errorMsg !== "") {
            return <h2>{pokemonState.errorMsg}</h2>;
        }

        return <p>Error getting pokemon</p>;

    }

    console.log('pokemon Name', pokemonState.data);

    return (
        <div>
            <nav>
                <NavLink className = 'search-navlink' to = {"/homepage"} title = 'Search'>Search</NavLink>
            </nav>

            <div className = 'pokemon'>
                <h1 className = 'pokemon-name'>Pokemon : {toTitleCase(pokemonName)}</h1>
                {ShowData()}
            </div>
        </div>
    )
} 

export default Pokemon;