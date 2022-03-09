import React from 'react'
// import Data from './Data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons'

export default function Form(){
    React.useState()
    
    const [allMemes, setMemesData] = React.useState([])

    React.useEffect(() =>{
        async function getMemes(){

            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemesData(data.data.memes)
            console.log("Effect ran")
        }
            getMemes()
    }, []) //useEffect depends on this value
    


    let [meme, setMeme] = React.useState(
        {
            topText:"",
            bottomText: "",
            randomImage: "./images/meme.jpg"
        }
        )
        
        
        function practice(){
            let y = Math.floor(Math.random() * allMemes.length)
            let url = allMemes[y].url
            setMeme(prevState => ({
                ...prevState,
                randomImage: url
            }))
        }
        
        function handleChange(event){
            const {name, value} = event.target
            setMeme(prevState =>({
                ...prevState,
                [name]: value
            }))
        }
        
        console.log(meme)

        return(
        <main className='form'>
            <div className='text'>
                <input className='text-1' placeholder='Top text' type="text" name='topText' onChange={handleChange} ></input>


                <input className='text-1' placeholder='Bottom text' type="text" name='bottomText' onChange={handleChange} ></input>
            </div>
            <div className='button'>
                <button onClick={practice} >Get new meme image <FontAwesomeIcon icon={faImage}></FontAwesomeIcon></button>
            </div>
            <div className='imageContainer meme'>
                <img className='meme--image' src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}