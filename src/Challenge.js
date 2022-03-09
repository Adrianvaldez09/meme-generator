import React from 'react'
import Data from './Boxes'
import Box from './Box'
import { faSquare } from '@fortawesome/free-solid-svg-icons'


export default function Challenge(props){
    console.log("Challenge component rendered")

    let [boxes, setBoxes] = React.useState(Data)


    //!Below is "Declarative" way
    function toggle(id){
        console.log(id)
        setBoxes(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ?{...square, on: !square.on} : square
            })
        })
    }
    // function toggle(id){
    //     console.log(id)
    //     setBoxes(prevSquares => {
    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }


    let boxMap = boxes.map(box => 
        <Box
            key={box.id}
            on={box.on}
            func={()=> toggle(box.id)}
        />
        )

    return(
        <div>
            {boxMap}
        </div>
    )
}