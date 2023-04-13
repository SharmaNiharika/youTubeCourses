import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import React from "react";





const Card=(props)=>
{

let course=props.course;
let likedCourses=props.likedCourses;
let setLikedCourses=props.setLikedCourses;

function clickHandler()
{
    if(likedCourses.includes(course.id))
    {
        setLikedCourses((prev) => prev.filter((cid)=>(cid!==course.id)));
        toast.warning("liked Removed");
    }
    else{
       if(likedCourses.length===0)
       {
        setLikedCourses([course.id]);
       }
       else{
        setLikedCourses((prev)=>
        [...prev,course.id]

        );
       }
       toast.success("Liked Succesfully");
    }

}



return <div onClick={()=>{}} className="w-[300px] relative bg-gray-500 hover:scale-105  ease-in duration-300 rounded-md bg-opacity-80 overflow-hidden " >

    <div className="">
        <img className="rounded-md"  src={course.image.url} />
    </div>
    <div>
        <button onClick={clickHandler} className="w-[30px] bg-white rounded-full h-[30px] pl-1 absolute right-2  top-[160px]" >
          {
             likedCourses.includes(course.id) ? <FcLike fontSize='20'/>:<FcLikePlaceholder/>

          }
        </button>
        
    </div>
    <div className="p-4" >


    <a href={course.link} target="_blank" rel="noopener noreferrer">
 

        <p className="text-blue-900 hover:underline font-semibold text-lg leading-6" >
            {course.title}
        </p>
</a>
        <p className="text-white mt-2" >

            {course.description.length>100?course.description.substr(0,100)+"....":course.description}

        </p>
    </div>


</div>


}

export default Card;