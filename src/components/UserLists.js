import React from "react";
import '../styles/userlist.css'

const userList =[{
    "booktaken": "Northanger Abbey",
    "name": "Austen, Jane",
    "age": 23,
    "gender": "Male",
   
},
{
    "booktaken": "War and Peace",
    "name": "Tolstoy, Leo",
    "age": 25,
    "gender": "Male",
   
},
{
    "booktaken": "Anna Karenina",
    "name": "Tolstoy, Leo",
    "age": 35,
    "gender": "Female",
    
},
{
    "booktaken": "Mrs. Dalloway",
    "name": "Woolf, Virginia",
    "age": 20,
    "gender": "Female",
    
},
{
    "booktaken": "The Hours",
    "name": "Cunnningham, Michael",
    "age": 35,
    "gender": "Male",
    
},
{
    "booktaken": "Huckleberry Finn",
    "name": "Twain, Mark",
    "age": 22,
    "gender": "Female",
    
},
{
    "booktaken": "Bleak House",
    "name": "Dickens, Charles",
    "age": 23,
    "gender": "Male",
  
},
{
    "booktaken": "Tom Sawyer",
    "name": "Twain, Mark",
    "age": 38,
    "gender": "Female",
   
},
{
    "booktaken": "A Room of One's Own",
    "name": "Woolf, Virginia",
    "age": 18,
    "gender": "Female",
    
},
{
    "booktaken": "Harry Potter",
    "name": "Rowling, J.K.",
    "age": 20,
    "gender": "Male",
    
},
{
    "booktaken": "One Hundred Years of Solitude",
    "name": "Marquez",
    "age": 29,
    "gender": "Female",
  
},
{
    "booktaken": "Hamlet, Prince of Denmark",
    "name": "Shakespeare",
    "age": 30,
    "gender": "Male",
   
},
{
    "booktaken": "Lord of the Rings",
    "name": "Tolkien, J.R.",
    "age": 37,
    "gender": "Female",
  
}
]
const UserList = () => {
    return(<div className="menu1" >    {userList.map((val) => {  return ( 
        <div className="collections1">
           
<h2>{val.name}</h2>
<h4>{val.booktaken}</h4>
<h4>{val.age}</h4>
<h4>{val.gender}</h4>


    </div>)})} </div>)  ;
}
 
export default UserList;