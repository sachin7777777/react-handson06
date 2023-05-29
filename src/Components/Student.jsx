import React, { useContext } from 'react';
import store from './StoreComponent';
import { Link, useNavigate } from 'react-router-dom';

const Student = () => {
    const contexData=useContext(store)
    console.log(contexData)
    const navi=useNavigate()
    return (
        <>
        <div className='Student-Header'>
        <h1>Student Details</h1>
        <button onClick={()=>navi('/addnewstudent')}>Add New Student</button>
        </div>
       
<table border='1' align='center' width='80%'>


        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
            </tr>
        </thead>
        <tbody>
            {contexData.entries.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.Course}</td>
                        <td>{item.Batch}</td>
                        <td><Link to='/editstudent' state={{data:index}}>Edit</Link></td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        </>
    );
}

export default Student;