import React from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import {filterData,apiUrl} from "./data";
import { useState,useEffect } from "react";
import { toast } from 'react-toastify'
import Spinner from "./components/Spinner";
import {data} from './components/Links'
import Footer from "./components/Footer";




const App = () => {
  
  const [courses,setCourses]=useState([]);
  const [loading ,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
async function fetchData(){
setLoading(true);

  try{
    // let response=await fetch(apiUrl);
    let response= await data;



    // let output= response.json();
    // setCourses(output.data);
    setCourses(response.data);
    

  }
  catch(error)
  {
     toast.error("Network Error")
  }
  setLoading(false);
  
}

useEffect(()=>{
  fetchData();
},[])
  return<div >
  <Nav/>

  <div className="  min-h-[100vh]">

 
  <Filter className="bg-blue-300 " data={filterData} setCategory={setCategory} category={category} />
 
<div className="mt-[20px] w-11/12 max-w-[1200px] mx-auto  flex justify-center items-center min-h-[50vh]" >
  {
    loading?<Spinner/>:<Cards category={category} courses={courses} />
  }
  </div>
  </div>


  <Footer/>
  </div>;

};

export default App;
