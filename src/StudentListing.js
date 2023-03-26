import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentListing = () => {
    const[studentData,setStudentData]=useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/students/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(()=>{
        fetch("http://localhost:8000/students").then((res)=>{
            return res.json();
        }).then((resp)=> {
            setStudentData(resp);
        }).catch((err)=> {
            console.log(err.message);
        })
    },[])
    return (
    <div className="container">
        <div className="card">
        <div className="card-title">
            <h2>Student Table</h2>
        </div>
        <div className="card-body">
            <div>
                <Link to="/create" className="btn btn-outline-primary">Add New (+)</Link>
            </div>
            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>

                { studentData &&
                    studentData.map(item =>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-outline-warning">Edit</a>
                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-outline-danger">Remove</a>
                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-outline-info">Details</a>
                        </td>
                        </tr>
                    ))
                }

            </tbody>
            </table>
        </div>
        </div>
    </div>
    );
};

export default StudentListing;
