import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetPokemonList } from '../actions/pokemonAction';
import {Link} from "react-router-dom";
import Pagination from 'react-pagination-library';
import "react-pagination-library/build/css/index.css";
const PokemonList = (props) => {

    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState("");

    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList)
    useEffect(() => {
        FetchData()
    }, []);

    const FetchData = (page) => {
        dispatch(GetPokemonList(page))
    }

    function changeThePage(page) {
        FetchData(page);
        setCurrentPage(page)
    }

    const ShowData = () => {
        if(!_.isEmpty(pokemonList.data)) {
            return (
                <div className = "list-wrapper">
                    {pokemonList.data.map((el) => {
                        return (
                            <div className = "pokemon-item">
                                {el.name}
                                <Link to={`/pokemon/${el.name}`}>View</Link>
                            </div>
                        );
                    })}   
                </div>
            )
        }

        if(pokemonList.loading) {
            return <p>Loading...</p>
        }

        if(pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>Unable to get data</p>
    }
    
    return (
        <div>

            <div className = 'search-wrapper'>
               <input 
                    type = 'text'
                    onChange = {e => setSearch(e.target.value)} />
               <button onClick = {() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>

            {ShowData()}

            {!_.isEmpty(pokemonList.data) && (
                <div className = 'pagination-table'>
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={75}
                        changeCurrentPage={(data) => changeThePage(data)}
                        theme="square-fill"
                    />
                </div>
            )}

        </div>
    )
} 

export default PokemonList;