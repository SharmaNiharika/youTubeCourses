


function Filter(props)
{
    const data = props.data;
    const category=props.category;
    const setCategory=props.setCategory;

function filterHandler(title)
{
    setCategory(title);
}

    return <div  className="flex mt-[10px] justify-center gap-2   font-bold p-1 px-2" >
  
      {
        
      data.map(element=>
     <div key={element.id} >
 
        {
            <button className="border rounded px-2 py-1 hover:outline hover:scale-[1.1] transition-all ease-in-out duration-50 hover:bg-slate-300" onClick={()=>{
                filterHandler(element.title)

            }} >{element.title}</button>

        }
       
     </div>
      
      )
      }

    </div>
}

export default Filter;