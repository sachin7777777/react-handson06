import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from './StoreComponent';

const EditStudent = () => {
    const index=useLocation().state.data
    const ContextData=useContext(store)
    console.log(index);
   const Navi= useNavigate()
   const UpdateObj={
    name: ContextData.entries[index].name,
    age:ContextData.entries[index].age,
    Course:ContextData.entries[index].Course,
    Batch:ContextData.entries[index].Batch
}
   const handleChange=(e)=>{
    UpdateObj[e.target.name]=e.target.value
}

const UpdateHandle=()=>{
ContextData.entries[index]=UpdateObj;
Navi(-1)
}
  
    return (
        <>
       <div className='updateform_container'>

      
            <div className='Update_form'>
            <input type="text" name='name' onChange={handleChange}  placeholder={ContextData.entries[index].name} />
            <input type="text" name='age' onChange={handleChange} placeholder={ContextData.entries[index].age}/>
            <input type="text" name='Course' onChange={handleChange} placeholder={ContextData.entries[index].Course} />
            <input type="text" name='Batch' onChange={handleChange} placeholder={ContextData.entries[index].Batch} />
            </div>
            </div>
            <button onClick={UpdateHandle}>Update</button>
        </>
    );
}

export default EditStudent;