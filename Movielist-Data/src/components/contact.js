import React, { useState, useEffect } from 'react';
import './CSS/Movielist.css';


const Contact = (props) => {
    let [popularlists, setPopularlists] = useState([])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPopularlists(data)
            },)
            .catch((err) => console.log(err));

    }, []);


    // let setPopularlists = props.data1;
    let [name, setName] = useState({

    })
    let [email, setEmail] = useState({

    })
    let [phonenumber, setPhonenumber] = useState({

    })

    let submitFn = (e) => {
        e.preventDefault();
        storeNameData();
        storeEmailData();
        storePhoneData();
        alert('Your Ticket Has been Booked...!')
    }
    function storeNameData() {
        sessionStorage.setItem('Key', name.userName);
    }
    function storeEmailData() {
        sessionStorage.setItem('myEmail', email.userEmail);
    }
    function storePhoneData() {
        sessionStorage.setItem(+91, phonenumber.userPhoneNumber);
    }
    const storedNameData = sessionStorage.getItem('Key');
    const storedEmailData = sessionStorage.getItem('myEmail');
    const storedPhoneData = sessionStorage.getItem(+91);



    return (
        <div className="contact">
            {
                popularlists.map((value) => {
                    return (
                        <div className="collection">
                            <div className='Info'>
                                <ul key={value.show.id}>
                                    <li>  Name Of The Series:<strong> {value.show.name}</strong></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            <center className="usedetails">
                <form id="contact-form" method="POST" onSubmit={submitFn}>
                    <label htmlFor="name" style={{ marginLeft: '0px' }}>Username:</label><br />
                    <input name="username" id="username" placeholder="type your name..." type='text'
                        required
                        value={name.userName}
                        onChange={(e) => setName({ ...name, userName: e.target.value })} />
                    <label htmlFor="email">Email:</label><br />
                    <input name="email" placeholder="type your email..." type='email'
                        required
                        value={email.userEmail}
                        onChange={(e) => setEmail({ ...email, userEmail: e.target.value })} />
                    <label htmlFor="message">Phone Number:</label><br />
                    <input type='tel'
                        placeholder='type Your number here...!'
                        required
                        value={(phonenumber.userPhoneNumber)}
                        onChange={(e) => setPhonenumber({ ...phonenumber, userPhoneNumber: Number(e.target.value) })}
                    /><br />
                    <button className='Button' type='submit'>Ticket Book</button>
                    <h2>{JSON.stringify(name.userName)}</h2>
                    <h2>{JSON.stringify(email.userEmail)}</h2>
                    <h2>{JSON.stringify(phonenumber.userPhoneNumber)}</h2>
                </form>
            </center>
        </div>
    );
}
export default Contact;