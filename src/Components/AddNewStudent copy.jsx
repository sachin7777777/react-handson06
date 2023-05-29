import React, { useContext } from 'react';
import store from './StoreComponent';
import { useNavigate } from 'react-router-dom';



const AddNewStudent = () => {

    const NewData=useContext(store)
    console.log(NewData)
    const handleChange=(e)=>{
NewObj[e.target.name]=e.target.value
    }
    const NewObj={
        name:'',
        age:'',
        Course:'',
        Batch:''
    }
    const handleClick=()=>{
        NewData.entries.push(NewObj)
        navi('/student')
    }
    const navi=useNavigate()
    return (
        <>
        <div className='Addstdform_container'>
          <div className='AddStd_Form'>
          <input type="text" name='name' placeholder='Enter Name' onChange={handleChange} />
            <input type="text" name='age' placeholder='Enter Age' onChange={handleChange} />
            <br />
            <input type="text" name='Course' placeholder='Enter Course' onChange={handleChange} />
            <input type="text" name='Batch' placeholder='Enter Batch' onChange={handleChange} />
          </div>
          </div>
            <br />
            <button  className='butt'   onClick={handleClick}>Add New Student</button>
        </>
    );
}

export default AddNewStudent;