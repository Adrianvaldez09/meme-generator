import React from 'react'

export default function Star(props){
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })


    // console.log("AnotherPractice component rendered")
    
    // function toggleFavorite() {
    //     setContact(prevState => ({
    //         ...prevState,
    //         isFavorite: !prevState.isFavorite
    //     }))
    // }
    // const [user, setUser] = React.useState("MAMA")
    let starIcon = props.isFilled ? "./images/star-filled.png" : "./images/star-empty.png"
    return(
        <div>
            <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={props.function}
                    /> 
                    <h1>
                        {props.user}
                    </h1>
        </div>
    )
}