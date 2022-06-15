import React from "react";
import '../styles/userbooklist.css'
import { HeartOutlined } from "@ant-design/icons";

const bookList =[{
    "title": "Northanger Abbey",
    "author": "Austen, Jane",
    "year_written": 1814,
    "edition": "Penguin",
    "price": 18.2
},
{
    "title": "War and Peace",
    "author": "Tolstoy, Leo",
    "year_written": 1865,
    "edition": "Penguin",
    "price": 12.7
},
{
    "title": "Anna Karenina",
    "author": "Tolstoy, Leo",
    "year_written": 1875,
    "edition": "Penguin",
    "price": 13.5
},
{
    "title": "Mrs. Dalloway",
    "author": "Woolf, Virginia",
    "year_written": 1925,
    "edition": "Harcourt Brace",
    "price": 25
},
{
    "title": "The Hours",
    "author": "Cunnningham, Michael",
    "year_written": 1999,
    "edition": "Harcourt Brace",
    "price": 12.35
},
{
    "title": "Huckleberry Finn",
    "author": "Twain, Mark",
    "year_written": 1865,
    "edition": "Penguin",
    "price": 5.76
},
{
    "title": "Bleak House",
    "author": "Dickens, Charles",
    "year_written": 1870,
    "edition": "Random House",
    "price": 5.75
},
{
    "title": "Tom Sawyer",
    "author": "Twain, Mark",
    "year_written": 1862,
    "edition": "Random House",
    "price": 7.75
},
{
    "title": "A Room of One's Own",
    "author": "Woolf, Virginia",
    "year_written": 1922,
    "edition": "Penguin",
    "price": 29
},
{
    "title": "Harry Potter",
    "author": "Rowling, J.K.",
    "year_written": 2000,
    "edition": "Harcourt Brace",
    "price": 19.95
},
{
    "title": "One Hundred Years of Solitude",
    "author": "Marquez",
    "year_written": 1967,
    "edition": "Harper  Perennial",
    "price": 14.00
},
{
    "title": "Hamlet, Prince of Denmark",
    "author": "Shakespeare",
    "year_written": 1603,
    "edition": "Signet  Classics",
    "price": 7.95
},
{
    "title": "Lord of the Rings",
    "author": "Tolkien, J.R.",
    "year_written": 1937,
    "edition": "Penguin",
    "price": 27.45
}
]
const UserBookList = () => {
    return(<div className="menu" >    {bookList.map((val) => {  return ( 
        <div className="collections">
           
<h2>{val.title}</h2>
<h4>{val.author}</h4>
<h4>{val.year_written}</h4>
<h4>{val.edition}</h4>
<h4>{val.price}</h4>
<button><HeartOutlined /> &nbsp; Add to Favorites</button>

    </div>)})} </div>)  ;
}
 
export default UserBookList;