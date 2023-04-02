import Home from '../images/home.svg';
import '../CSS/navbar.css';
import Contact from '../images/call.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>Movieslist....</h1>
            </div>
            <div className="link">
                <ul style={{ alignitems: 'center' }}>
                    <li> <Link to='/Movielist'><img src={Home} alt="" height={'30px'} width={'30px'} /></Link></li>
                    <li> <Link to='/contact'> <img src={Contact} alt="" height={'30px'} width={'30px'} /></Link> </li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;


