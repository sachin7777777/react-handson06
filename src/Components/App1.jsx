import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import NavBar from './NavBar';
import store from './StoreComponent';
import EditStudent from './EditStudent';
import AddNewStudent from './AddNewStudent';

const App1 = () => {
    const[data,SetData]=useState([
        {name:"Mudasir",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Saleem",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Sangram",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Sachin",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Arif",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Namrata",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Vijay",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Kishan",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Abdul",age:30,Course:"Mern",Batch:"EA21"},
        {name:"Altamash",age:30,Course:"Mern",Batch:"EA21"}
    ])
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={<store.Provider value={{entries:data,setEntries:SetData}}>
                <Student/>
                </store.Provider>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/editstudent' element={
                    <store.Provider value={{entries:data,setEntries:SetData}}>
                    <EditStudent/>
                    </store.Provider>
                }/>
                <Route path='/addnewstudent' element={<store.Provider value={{entries:data,setEntries:SetData}}>
                    <AddNewStudent/>
                    </store.Provider>
                    
                }/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App1;