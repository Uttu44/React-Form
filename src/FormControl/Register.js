import React from 'react'

export default function Register(props) {
    
  return (
    <div className="container card p-3 mt-2 register-container ">
        <h1 className="text-center color-white">Registration form</h1>
        <form onSubmit={props.submit  } >
            <div className="font-group p-2">
                <label htmlFor="userID" className="lab">UserID:</label>
                <input type="text" name="userID" required className="form-control p-2 "/>
            </div>
            <div className="font-group p-2">
                <label htmlFor="ID" className="lab">ID:</label>
                <input type="text" name="ID" required className="form-control p-2"/>
            </div>
            <div className="font-group p-2">
                <label htmlFor="title" className="lab">Title:</label>
                <input type="text" name="title"required  className="form-control p-2"/>
            </div>

            <div className="font-group p-2">
                <label htmlFor="body" className="lab">Body:</label>
                <input type="text" name="body" required className="form-control p-2"/>
            </div>
           
            <button type="submit" className="btn btn-primary p-2 mt-4 w-100">Register</button>
        </form>
    </div>
  );
}
