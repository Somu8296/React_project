import React from "react";
import '../styles/addusers.css'

const AddUsers = () => {
    return (
        <div className="add">
            <div className="center1">
                <div className="card1">
                    <h1>ADD USERS</h1>
                    <form >
                        <label>NAME:</label><input
                            className="form-item"
                            type="text"


                            required

                        />
                        <label>Book Taken:</label>
                        <input
                            className="form-item"
                            type="text"

                            required
                        />
                        <label>AGE:</label>
                        <input
                            className="form-item"
                            type="number"


                            required
                        />
                        <label>GENDER:</label>
                        <input
                            className="form-item"
                            type="text"


                            required
                        />

                        <input className="form-submit" value="ADD" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUsers;
