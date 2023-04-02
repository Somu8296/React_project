import { useState, useEffect } from 'react';
import './CSS/Movielist.css';
import MovielistData from './MovielistData';

const Movielist = () => {

    let [popularlists, setPopularlists] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPopularlists(data)
            },)

    }, [])


    return (

        <div className="lists ">
            <MovielistData data={popularlists} data1={setPopularlists} />
        </div>
    );
};
export default Movielist;