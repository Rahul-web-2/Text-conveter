import React, {useState, useEffect} from 'react';
import '../css/Form.css';
export default function Form() {
    useEffect(() => {
        document.title = "Sign in from";
    }, []);
    const[username, setusername]= useState();
    const[password, setpassword]= useState();
    const[cpassword, setcpassword]= useState();
    const[email, setemail]= useState();
    const[number, setnumber]= useState();

    return (
        <>
            <div className="container1">
                <div className="header1">
                    <h2>Create Account</h2>
                </div>

                <form id="form" className="form1"    autoComplete="off">
                    <div className="form-control1">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={(e) => setusername(e.target.value)} value={username} placeholder="florinpop17" id="username"  />
                        <span>Error message</span>
                    </div>

                    <div className="form-control1">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) => setemail(e.target.value)} value={email}  placeholder="example01@gmail.com" id="email" />
                        
                    </div>

                    <div className="form-control1">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder="Password" id="password" />
                        
                    </div>

                    <div className="form-control1">
                        <label htmlFor="cpassword">Password check</label>
                        <input type="password"  onChange={(e) => setcpassword(e.target.value)} value={cpassword} placeholder="Confirm Password" id="cpassword" />
                        
                    </div>

                    <div className="form-control1">
                        <label htmlFor="Number">Phone No.</label>
                        <input type="tel" onChange={(e) => setnumber(e.target.value)} value={number}  placeholder="123456789" id="tel" />
                        
                    </div>

                    <div className="btn1">
                        <button type="submit">Submit</button>

                    </div>
                </form>
            </div>
        </>

    );
}