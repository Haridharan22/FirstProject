import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddData = () => {

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [number, setNumber]= useState("");


    const emplists = useSelector((state) => state);
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
    const checkEmail = emplists.find(emplist=> emplist.email === email && email);
    const checkNumber = emplists.find(emplist=> emplist.number === parseInt(number));

        if(!email || !name || !number){
            return toast.warning("Please fill in all fields");
        }

        if(checkEmail){
            return toast.error("This email is already registered");
        }
        if(checkNumber){
            return toast.error("This number is already registered");
        }

        const data={
            id: emplists[emplists.length - 1].id+1,
            name,
            email,
            number
        }
        dispatch({type: "ADD_LIST", payload:data});
        toast.success("Data successfully added");
        navigate("/");
    };
    
    return (
        <div>
            <div className="container">
                <div className="row">

                    <h1 className="display-3 text-center my-5">AddData in the employee list</h1>

                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group p-2">
                                <input type="text" placeholder="Name" className="form-control" 
                                value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group p-2">
                                <input type="email" placeholder="Email" className="form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group p-2">
                                <input type="number" placeholder="Phonenumber" className="form-control" 
                                value={number} onChange={(e) => setNumber(e.target.value)}/>
                            </div>
                            <div className="form-group p-2 text-center">
                                <input type="submit" value="Add Employee" className="btn btn-block btn-dark" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddData