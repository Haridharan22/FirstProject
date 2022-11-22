import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {

    const emplists= useSelector(state=> state);
    const dispatch= useDispatch();

    const deletelist = (id) => {
        dispatch({type: "DELETE_LIST", payload: id});
        toast.success("Employee list deleted Successfully!");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 text-left'>
                    <Link to="/add" className="btn btn-outline-dark">AddData</Link>
                </div>
                <div className='col-md-6 mx-auto'>
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Number</th>
                            <th scope="col">Action</th>
                        </thead>
                        <tbody>
                        {emplists.map((emplist, id) => (
                            <tr key={id}>
                                <td>{id + 1 }</td>
                                <td>{emplist.name}</td>
                                <td>{emplist.email}</td>
                                <td>{emplist.number}</td>
                                <td>
                                    <Link to={`/edit/${emplist.id}`} className="btn btn-small btn-primary m-2">Edit</Link>
                                    <button type="button" onClick={()=> deletelist(emplist.id)} className="btn btn-small btn-danger m-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>    

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home