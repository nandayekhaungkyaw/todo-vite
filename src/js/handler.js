import { calculateList, checkList, listEdit, listRemove, taskAdd } from "./list.js";
import { inputTask, listGroup } from "./selector.js";

export const listGroupControl = (event) => {
    const List = event.target.closest(".List");
   
    
  
    if (event.target.classList.contains("editBtn")) {
      listEdit(List.id);
      
    }
    if (event.target.classList.contains("list-del-btn")) {
      if (window.confirm("Are you sure to delet")) {
        listRemove(List.id)
        
  
        calculateList();
      }
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
        alert("don't take ender");
      }
    } else {
    }
  };
  export const taskAddHandler = () => {
    if (inputTask.value.trim()) {
      taskAdd(inputTask.value);
    } else {
      alert("u must input task");
    }
  };
  export const deletAllHandler = () => {
    if (confirm("are you sure to delet")) {
      
      const lists = listGroup.querySelectorAll(".List");
      
  
      lists.forEach((list) => {
        
        listRemove(list.id);
        // list.remove()
      });
    }
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
  