import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { Input , Button} from "reactstrap";
import { nanoid } from "nanoid";
import { FaTrashAlt } from "react-icons/fa";

const App = () => {
    const [inputValue,setInputValue] = useState("")
    const [todoAddTask,setTodoAddTask] = useState([])

   const handleAddTask = () =>{
      
     for(let i of todoAddTask){
       if(i.title.toLowerCase() === inputValue.toLowerCase() ){
         alert("already exist")
         return
       }
     }

     let newObj = { title:inputValue, completed: false, id: nanoid() }
     let newTaskData = [newObj]
     
     for(let i in todoAddTask){
      newTaskData.push(todoAddTask[i])
     }
     console.log(newTaskData)
     setTodoAddTask(newTaskData)
     
     setInputValue("")
     

   }
   const handleDelete = (id) =>{
     let filteredTask = todoAddTask.filter(task => task.id !==id )
     setTodoAddTask(filteredTask)
     console.log(filteredTask)
  }

  return (
    <div className="App">
      <h1>Todo List </h1>
        <input 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        className="inp-text" 
        placeholder="add task..." />
        
       <button onClick={handleAddTask} className="btn-add">Add</button>
       
       <div className="mainInfo">
         {
           todoAddTask.map((task,indexOfTask) => {
             return(
               <div  className="add-task-content" key={task.id}>
               <input type="checkbox" />
                 <p >{task.title}</p>
                 <FaTrashAlt onClick={()=>handleDelete(task.id)} className="trash"/>
               </div> 
             )
           })
         }
       </div>
    </div>
  );
};

export default App;










// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Input, Button } from "reactstrap";
// import { nanoid } from "nanoid";
// import "./App.css";

// const App = () => {
//   const [inputTask, setInputTask] = useState("add");
//   const [todoTask,setTodoTask] = useState([])

//   const handleAddTask = () => {
//     // console.log(inputTask);
//          for (let i of todoTask){
//            if(i.title.toLowerCase() === inputTask.toLowerCase()){
//              alert("task already exists")
//              return
//            }
//          }
//        let newObj = {title:inputTask, completed:false , id: nanoid() }
//        let newTaskData = {newObj}
//        console.log(newTaskData)
//     setTodoTask([inputTask,...todoTask])
//     setInputTask("");
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 col-sm-4">
//           <div className="d-flex">
//             <div>
//               <Input
//                 value={inputTask}
//                 placeholder="add task..."
//                 onChange={(e) => setInputTask(e.target.value)}
//               />
//             </div>
//             <div>
//               <Button onClick={handleAddTask}>Add</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-12 col-sm-4">
//             {
//          
//                todoTask.map((task,indexOfTask) =>{
//                 return (
//                 <div key={task.id}>
//                     {task.title}
//                 </div>
//                 )
//               })
//             }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
