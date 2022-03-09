import React from 'react'

export default function Box(props) {
    let [on, setOn] = React.useState(props.on)

    // function toggle(){
    //     setOn(prevState => !prevState)
    // }
    console.log(props.on)
    const styles = {
    backgroundColor: props.on ? "#cccccc" : "#222222"
    }

    return(
        <div onClick={props.func} style={styles} className='box'></div>
    )
}