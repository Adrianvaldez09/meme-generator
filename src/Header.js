import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    console.log("Header component rendered")
    return(
        <header className='navbar'>
            <div className='nav'>
                <FontAwesomeIcon className='earth' icon={faEarthAmericas}></FontAwesomeIcon>
                <h1>Meme Generator</h1>
            </div>
            <h2 className='edit'>Edit your MEMES!</h2>
        </header>
    )
}