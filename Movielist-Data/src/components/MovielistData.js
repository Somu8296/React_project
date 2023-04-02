import { Link } from 'react-router-dom';
import './CSS/Movielist.css'


const MovielistData = (props) => {
    let popularlists = props.data;

    return (
        <div className="popchild">
            {popularlists.map((value) => {
                return (
                    <div className="collection">
                        <div className='Info'>
                            <h1>Name Of The Series: {value.show.name}</h1>
                            <h3>Id: {value.show.id}</h3>
                            <h3>Type: {value.show.type}</h3>
                            <h3>Genere: {value.show.genres}</h3>
                            <h3>Language: {value.show.language}</h3>
                            <h3>Avg rating: {value.show.rating.average}</h3>
                            <div className='synopsis'><strong>Summary:</strong>{value.show.summary}</div>
                            {/* <Link className='Button' to='/contact'><button onClick={<Contact />}> Click Here</button> </Link> */}
                            <Link className='Button' to='/contact'>Click Here</Link>
                        </div>
                        <div className="poster">



                            <img src={`https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg`} alt="" height="210px" width="250px" />


                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default MovielistData;