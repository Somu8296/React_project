
import React from "react";
import Logo from '../assets/images/logo.png'
import ADD from '../assets/images/addbooks.jpg'
import USER from '../assets/images/adduser.jpg'
import BOOK from '../assets/images/booklist.jpg'
import LIST from '../assets/images/userlist.jpg'
import { Button,Card } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import '../styles/adminportal.css'
import { Link } from "react-router-dom";

const AdminPortal = () => {
    return (<div className="adminportal">
        <div class="navlogo">
        <img src={Logo}/>
        <Button  icon={<PoweroffOutlined/>}  >
        &nbsp;  LogOut
        </Button>
        </div>
        <div className="cards">
        <Card>
<Link to='/addbooks'><img src={ADD} /></Link>
<h1>Add Books</h1>
  </Card>
  <Card>
  <Link to='/addusers'><img src={USER}/></Link>
  <h1>Add User</h1>
  </Card>
  <Card >
 <Link to='/booklist'> <img  src={BOOK}/></Link>
  <h1>Book List</h1>
  </Card>
  <Card >
 <Link to='/userlist'> <img  src={LIST}/></Link>
  <h1>User List</h1>
  </Card>
  </div>
    </div>  );
}
 
export default AdminPortal;