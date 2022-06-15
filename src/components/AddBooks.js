import React from "react";
import '../styles/addbooks.css'

const AddBooks = () => {
  return (
    <div className="add">
      <div className="center">
        <div className="card">
          <h1>ADD BOOKS</h1>
          <form >
            <label>Title:</label><input
              className="form-item"
              type="text"


              required

            />
            <label>Author:</label>
            <input
              className="form-item"
              type="text"

              required
            />
            <label>Year_Written:</label>
            <input
              className="form-item"
              type="number"


              required
            />
            <label>Edition:</label>
            <input
              className="form-item"
              type="text"


              required
            />
            <label>Price:</label>
            <input
              className="form-item"
              type="number"


              required
            />

            <input className="form-submit" value="ADD" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;