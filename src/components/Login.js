import React from 'react';
// import '../../css/LoginPage/Login.css';
// import YOUTUBE_LOGO_IMAGE from '../../assets/images/youtube-logo-edited.png';
// import YOUTUBE_UNDRAW_IMAGE from '../../assets/images/youtube-undraw.svg';
import POKEMON_IMAGE from '../assets/images/horse-ride.svg'
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <div className = 'login'>

            <div className = 'app-introduction-and-login'>
                <img className = 'youtube-logo'
                    alt = 'Youtube'
                    src = 'https://lh3.googleusercontent.com/proxy/VckKGZ5Q-MjxP6N8B2AQdcawNxTDGUIg32CwBNXrM_FuFqnQdc4gZa-3I__dfBJA0gbasF4eQ6mh3uyjpM066vLpfeDr2Kf77P2TjdezxRjr1BLqWdKUbkfXy8Qh40GDz8q-LxI'
                />
                <p className = 'app-description'>Hey there user! This React JS application provides you a list of all pokemons and all types of information about those pokemons you used to see as a kid. It uses the Poke API to fetch the pokemon data in real time. You can see info about a pokemon from the available list or you can search for a pokemon to see its details. Now hurry and grab those pokemons before team Rocket does!</p>
                
                <nav className = 'login-button'>
                    <NavLink to = {"/homepage"}>FIND ME A POKEMON</NavLink>
                </nav>
                
            </div>

            <div className = 'wallpaper-image'>
                <img
                    src = {POKEMON_IMAGE}
                    alt = 'Pokemon'
                />            
            </div>
            
        </div>
    )
}



export default Login;