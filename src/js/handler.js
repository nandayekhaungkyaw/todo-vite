
import Swal from "sweetalert2";
import { calculateList, checkList, listEdit, listRemove, taskAdd } from "./list.js";
import { congratulation, inputTask, listGroup, totalTasks } from "./selector.js";

export const listGroupControl = (event) => {
    const List = event.target.closest(".List");
   
    
  
    if (event.target.classList.contains("editBtn")) {
      listEdit(List.id);
      
    }
    if (event.target.classList.contains("list-del-btn")) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          listRemove(List.id)
      
          calculateList();;
        }else{
          Swal.fire({
            title: "Are you sure to cancle it",
          
            
              
             border:"rounded",
              width: '50%', // Set the width here
              background:"#ffff",
              color:"#aaaa",

              padding: '1rem',
              backdrop: true, // Optional: add a backdrop
        
          
            
          hideClass: {
            popup: `
              animate__animated
             animate__fadeOutRightBig
              animation-duration: 4s;
            `
          }
          });
          
          
          
        }
      });

    
     
    }
    if (event.target.classList.contains("checked")) {
      checkList(List.id);
    }
  };
  
  export const taskInputHandler = (event) => {
    if (event.key === "Enter") {
      if (inputTask.value.trim()) {
        taskAdd(inputTask.value);
      } else {
        Swal.fire({
          width:"60%",
          title: "The input Text?",
         
          icon: "info"
        });
      }
    } 
    
  };
  export const taskAddHandler = () => {
    if (inputTask.value.trim()) {
      taskAdd(inputTask.value);
    } else {

      Swal.fire({
        width:"60%",
        title: "The input Text?",
        
        icon: "info"
      });
      
    }
  };
  export const deletAllHandler = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       
        const lists = listGroup.querySelectorAll(".List");
      
  
        lists.forEach((list) => {
          
          listRemove(list.id);
          // list.remove()
        });
      }
    });

 
    
  };
  export const doneTaskAllHandler = () => {
    const lists = listGroup.querySelectorAll(".List");
  
    lists.forEach((list) => {
      if (list.querySelector("#checked").checked === true) {
        list.querySelector("#checked").checked = false;
      } else {
        list.querySelector("#checked").checked = true;
      }
      // list.querySelector("#checked").checked=true
     
        
      checkList(list.id);
     
    });
    

  };
const fruits=["apple","orange"]
  export const initialRender=()=>{
    fruits.forEach((fruit)=>{
     
      taskAdd(fruit)
    })

  }

export const congrat=()=>{
  const Lists =listGroup.querySelectorAll(".List input:checked")
  console.log(Lists.length);
  console.log(totalTasks.innerHTML);
  
  if(Lists.length==totalTasks.innerHTML){
    congratulation.classList.remove("hidden")
    congratulation.classList.add("block")
    console.log("done");

  }else{
    congratulation.classList.remove("block")
    congratulation.classList.add("hidden")

  }
  
  
}
  