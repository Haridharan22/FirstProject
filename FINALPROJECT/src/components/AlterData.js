import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import {  useNavigate } from "react-router-dom";
const AlterData = () => {
  const {id}= useParams();
  const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [number, setNumber]= useState("");

  
  const emplists = useSelector((state) => state);
    const dispatch= useDispatch();
    const navigate= useNavigate();
  const currentList= emplists.find(emplist=> emplist.id === parseInt(id)); 

  useEffect(()=>{
    if(currentList){
      setName(currentList.name);
      setEmail(currentList.email);
      setNumber(currentList.number);
    }
  },[currentList]);

  const handleSubmit = (e)=>{
    e.preventDefault();
const checkEmail = emplists.find(emplist=> emplist.id !== parseInt(id) && emplist.email === email);
const checkNumber = emplists.find(emplist=> emplist.id !== parseInt(id) && emplist.number === parseInt(number));

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
        id: parseInt(id),
        name,
        email,
        number
    }
    dispatch({type: "UPDATE_LIST", payload:data});
    toast.success(" Update Data successfully added");
    navigate("/");
};
  return (
    <div>
       <div className="container">
          {currentList? (
                <div className="row">

                    <h1 className="display-3 text-center my-5">Alter Data in the employee list {id}</h1>

                    <div className="col-md-6 shadow mx-auto p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group p-2">
                                <input type="text" placeholder="Name" className="form-control" 
                                value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form-group p-2">
                                <input type="email" placeholder="Email" className="form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)}  />
                            </div>
                            <div className="form-group p-2">
                                <input type="number" placeholder="Phonenumber" className="form-control" 
                                value={number} onChange={(e) => setNumber(e.target.value)}/>
                            </div>
                            <div className="form-group ">
                                <input type="submit" value="update" className="btn btn-dark" />
                                <Link to="/" className="btn btn-danger m-3">Cancel</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
          ): (
            <h1 className="display-3 my-5 text-center">Employee List the id {id} does not exist</h1>
          )}
            </div>
    </div>
  );
};

export default AlterData