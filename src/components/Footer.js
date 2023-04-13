const Footer=()=>{




return <div>
  
<div className="flex flex-col mt-10 justify-evenly bg-slate-200 border-t-[2px] border-black gap-3 p-[10px]" >
<h2 className="font-bold " >About Us:</h2>

<p>We are a team of passionate educators committed to providing high-quality online courses to help individuals advance their careers and achieve their goals.
</p>


<div className="flex flex-wrap  leading-7 justify-between" >
<div>
    <h3 className="font-bold" >Courses:</h3>
    <ul>
        <li>
        Marketing
        </li>
        <li>Design</li>
        <li>Programming</li>
        <li>Marketing</li>
        <li>Health & Fitness</li>
    </ul>
</div>

<div>
    <h3 className="font-bold"  >Contact Us:</h3>
    <p>
      <a href="support@onlinecourses.com
" > Email:<span>support@onlinecourses.com</span> 
 </a>


    </p>
    <p>
    Phone: 1-800-123-4567
    </p>
    <p>
    Follow us on Facebook, Twitter, and LinkedIn for the latest updates and promotions.
    </p>
    <p>2023 Online Courses.</p>
</div>
</div>


</div>

</div>



}


export default Footer;