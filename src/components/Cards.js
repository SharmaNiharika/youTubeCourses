import { useState } from "react";
import Card from "./Card"
import React from "react";


function Cards(props)
{
    const category=props.category;
    const courses=props.courses;
    const [likedCourses,setLikedCourses]=useState([]);
    function getCourses(){
        if(category==="All")
        {
             let allCourses=[]; 
        Object.values(courses). forEach(array=>{
                 array.forEach(courseData=>{
                    allCourses.push(courseData);
                 })
        })
        return allCourses;
        }
        else{
            return courses[category];
        }
       
    }

    return ( <div className="flex flex-wrap justify-center gap-4 mb-4" >
       
     
        {
            getCourses().map((course)=>
            

               
                <Card likedCourses={likedCourses} key={course.id} course={course} setLikedCourses={setLikedCourses} />

                
                
            )
        }
     
    </div>)







}
export default Cards;