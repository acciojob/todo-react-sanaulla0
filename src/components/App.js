
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[data , setData] = useState([]);
  const[error,setError] = useState(false);
  const[task,setTask] = useState([]);
  const handleChange=(event)=>{
   
         
        setData(event.target.value);
        // const update = [...data];

        console.log(data);
  }
  const handleClick = ()=>{
        if(data.length>0){
          setTask([...task,data]);
          setData(" ");
           setError(false);
        }
        else{setError(true);}

  }
  const handleDelete = (index)=>{
             const newtask = [...task];
             newtask.splice(index,1);
             setTask(newtask);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <input type='text' onChange={handleChange} />
        <button type="submit" onClick={handleClick} >Add task</button>
         
       <div >
         <ul>
            {task.map((item,index)=>(
            <div key={index}>
              <li> {item} 
              <button className="delete" onClick={()=>handleDelete(index)} >delete</button> 
              </li>
             
              </div>
             
            ))}
         </ul>
       </div>


    </div>
  )
}

export default App;
