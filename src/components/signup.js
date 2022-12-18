
import React from 'react';
import { useState } from 'react';
import firebase from "../firebase";

import giff from '../images/Comp_4.gif';
import image1 from '../images/PET_SOCIETY_UPDATE_1.gif';



function Signup() {

    const [input, setInput] = useState("")
    const inputhandler = (e) => {
        setInput(e.target.value);

    }



    const [message, setMessage] = useState("");
    const [image, setImage] = useState(giff);
    const [imageStyle, setImageStyle] = useState({ width: '250px' })


    const submithandler = (e) => {
        e.preventDefault();
        if (input) {
            if (/^[A-Z0-9._%+-]+@gmail|yahoo|hotmail|outlook|yandex|mail|aol|hubspot\.[A-Z]{2,4}$/i.test(input)) {
                console.log(input);
                //add to firebase

                const todoref = firebase.database().ref("emails");

                const todo = {
                    email: input,
                }
                todoref.push(todo);




                setInput("");
                setMessage("Thanks For Subscribing");
                setImage(image1);
                setImageStyle({ width: '330px', margin: '0px 0px 0px 30px', transition: '1s ease' });
                setTimeout(() => {
                    setMessage("")
                }, 3000);
            }
            else {
                setMessage("Enter a Valid Gmail Address");
            }

        }
        else {
            setMessage("First Enter Your Email");
            setTimeout(() => {
                setMessage("")
            }, 3000);
        }
    }
    return (
        <div className='Signup'>
            <div className='animation' >
                <img src={image} style={imageStyle} alt="loading..." />
            </div>
            <h3>Lets socialise with our pets, sign up!
            </h3>
            <form onSubmit={submithandler}>
                <input type='Email' placeholder="Email" value={input} className='email' id='email' onChange={inputhandler} required></input>

                <button type='submit'>Signup</button>
            </form>
            <div id="alert">
                {message && <alert>{message}</alert>}
            </div>``
        </div>
    )
}

export default Signup
