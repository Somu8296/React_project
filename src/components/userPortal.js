import React from "react";
import '../styles/userportal.css'
import BOOK from '../assets/images/booklist.jpg'
import FAV from '../assets/images/favourite.jpg'
import { Button,Card } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import Logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const UserPortal = () => {
    return ( <div className="user">

        <div class="navlogo">
        <img src={Logo}/>
        <Button  icon={<PoweroffOutlined/>}  >
        &nbsp;  LogOut
        </Button>
        </div>
        <div className="cards">
        <Card>
<Link to='/userbooklist'><img src={BOOK} /></Link>
<h1>Add Books</h1>
  </Card>
  <Card>
  <img src={FAV}/>
  <h1>Add Favorites</h1>
  </Card>
  </div>
          </div>
          );
}
export default UserPortal;