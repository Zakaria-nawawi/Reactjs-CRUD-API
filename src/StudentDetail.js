import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const StudentDetail = () => {
    const { id } = useParams();

    const [studentdata, studentdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/students/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            studentdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body"></div>

                {studentdata &&
                    <div>
                        <h2>The Employee name is : <b>{studentdata.name}</b>  ({studentdata.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {studentdata.email}</h5>
                        <h5>Phone is : {studentdata.phone}</h5>
                        <Link className="btn btn-outline-secondary" to="/">Back to Home</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default StudentDetail;