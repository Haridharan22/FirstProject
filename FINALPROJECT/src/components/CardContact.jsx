import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import Swal from "sweetalert2";

import UpdateContact from "./UpdateContact";
import deleteContact from "../redux/action/deleteContact";

export default function CardContact(props) {
    const dispatch = useDispatch()

    const DeleteContact =  (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning", 
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#D33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteContact(id))
            }  
        })
    }
    return(
        <div className="card shadow-sm radius">
            
            <div className="card-body">
                <h5>{props.contact.name}</h5>
                <p>{props.contact.email}</p>
                <p>{props.contact.phonenumber}</p>
                <p>{props.contact.category}</p>
            </div>
            <div className="card-header d-flex justify-content-center btn">
                <Link data-toggle="tooltip" data-placement="top" title="Detail" to={`/detail/${props.contact.id}`} className="btn btn-primary rounded shadow me-2">
                    View
                </Link>
                <button onClick={()=>DeleteContact(props.contact.id)} data-toggle="tooltip" data-placement="top" title="Delete" className="btn btn-danger rounded shadow me-2">
                    Delete
                </button>
                
                <UpdateContact id={props.contact.id}></UpdateContact>
                
            </div>
        </div>
    )
}