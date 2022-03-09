import React from 'react'
import Star from './Star'
import Count from './Count'

export default function AnotherPractice (){
        const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })


    console.log("AnotherPractice component rendered")
    
    function toggleFavorite() {
        setContact(prevState => ({
            ...prevState,
            isFavorite: !prevState.isFavorite
        }))
    }

    // let starIcon = contact.isFavorite ? "./images/star-filled.png" : "./images/star-empty.png"
    const [user, setUser] = React.useState("JOE MAMA")
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    {/* <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    /> */}
                    <Star 
                        isFilled={contact.isFavorite}
                        function={toggleFavorite}
                        user={user}
                        />
                    <Count 
                        user={user}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}