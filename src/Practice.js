import React from 'react'
import Count from './Count'

// export default function Practice(){
// /*
// Challenge: complete the function below
// Given a name, return "Good <timeOfDay>, <name>!" depending
// on the current time of day.

// 4 am - 11:59 am, timeOfDay = "morning"
// 12 pm - 4:59 pm: timeOfDay = "afternoon"
// 5 pm - 7:59 pm: timeOfDay = "evening"
// 8 pm - 3:59 am: timeOfDay = "night"

// E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"
// */


// let timeOfDay;

// function greeting(name) {
//     const date = new Date()
//     const hours = date.getHours()
//     console.log(hours)
//     if (hours >= 4 || hours < 12){
//         timeOfDay = "morning"
//     } else if (hours >= 12 || hours < 17){
//         timeOfDay = "afternoon"
//     } else if (hours >= 17 || hours < 20){
//         timeOfDay = "evening"
//     } else {
//         timeOfDay = "night"
//     }
//     console.log("Good " + timeOfDay+ ", " + name)
// }

// greeting("Bob")



//         return (
//         <div>
//         </div>
//     )
// }


export default function Practice(){
        React.useState()
        // let [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
        // function addArray(){
        //     setThingsArray(prevThingsArray =>{
        //         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        //     })
        // }

        // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
        
        //! Rewrite to see if I can write it on my own below
        let [thingsArray, setThingsArray] = React.useState(["Things 1", "Thing 2"])
        function addArray(){
            setThingsArray(prevState => {
                return [...prevState, `Thing ${thingsArray.length + 1}`]})
            }
        const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

        //?-------------------------------------------------------------------------------------
        
        let [result, setResult]  = React.useState("Hello")
        function handleClick(){
            setResult("WORLD")
        }
        let [count, setCount] = React.useState(0)
        function plus(){
            // setCount(count + 1)
            //!OR
            // setCount(function(prevValue){
            //     return prevValue + 1
            // })
            //!OR
            setCount(prevValue => prevValue + 1)
        }

        function minus(){
            // setCount (count - 1)
            //!OR
            // setCount(function(prevValue){
            //     return prevValue - 1
            // })
            //!OR
            setCount(prevValue=> prevValue - 1)
        }
        


        console.log("Practice component rendered")

            return (
            <div>
                <button onClick={addArray}>Add Item</button>
                {thingsElements}
                <br></br>
                <br></br>
                <br></br>




                <button onClick={handleClick}>setResult</button>
                <h1>{result}</h1>
                <div className="counter">
                <button onClick={minus} className="counter--minus">–</button>
                {/* <div className="counter--count">
                    <h1>{count}</h1>
                </div> */}
                <Count 
                    number={count}
                />
                <button onClick={plus} className="counter--plus">+</button>
            </div>




            </div>
        )











































    // let [isGoingOut, setIsGoingOut] = React.useState(true)

    // function goingOut(){
    //     if (isGoingOut === true){
    //         setIsGoingOut(false)
    //     } else if (isGoingOut === false){
    //         setIsGoingOut(true)
    //     }
    //     //!OR
    //     // setIsGoingOut(prevState => !prevState)
    //     //!OR
    //     // setIsGoingOut(prevState => prevState ? false : true)
    // }
    
    // // if (isGoingOut === true ? "Yes" : "No")


    // return(
    //             <div className="state">
    //         <h1 className="state--title">Do I feel like going out tonight?</h1>
    //         <div onClick={goingOut} className="state--value">
    //             <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
    //         </div>
    //     </div>
    // )
}
