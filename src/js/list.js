import {  listGroup, listTemplate } from "./selector.js";
import { v4 as uuidv4 } from 'uuid';


let count = 1;
export const calculateList = () => {
    const totalList = listGroup.querySelectorAll(".List");
    totalTasks.innerText = totalList.length;
  };
  
 export  const doneCheck = () => {
    const inputCheck = document.querySelectorAll(".List input:checked");
    doneTasks.innerText = inputCheck.length;
  };
  
  // creatElement
  
  export const create = (inputTask) => {
    const divList = listTemplate.content.cloneNode(true);
    
    let list = divList.querySelector(".List");
    list.querySelector("#taskList").innerText = inputTask;
  
    list.setAttribute("id", `List${uuidv4()}`);
    listGroup.append(list);
  };
  
  export const taskAdd = (enterTask) => {
    create(` ${enterTask}`);
    inputTask.value = "";
    // calculateList();
  };

  export const listRemove = (comeList) => {
    const currentList = listGroup.querySelector(`#${comeList}`);
    console.log(currentList);
    currentList.className = "animate__animated animate__hinge";
    currentList.addEventListener("animationend", () => {
      currentList.remove();
    });
  };
  
  export const checkList = (comeList) => {
    const currentList = document.querySelector(`#${comeList}`);
    const editBtn = currentList.querySelector("#editBtn");
    // doneCheck();
    const taskList = currentList.querySelector("#taskList");
  
    taskList.classList.toggle("line-through");
    currentList.classList.toggle("scale-75");
    currentList.classList.add("duration-700");
    currentList.classList.toggle("opacity-50");
  
    editBtn.toggleAttribute("disabled");
  };
  
 export  const listEdit = (comeList) => {
    const currentList = document.querySelector(`#${comeList}`);
  
    const taskList = currentList.querySelector("#taskList");
  
    const editBtn = currentList.querySelector("#editBtn");
  
    const newInput = document.createElement("input");
    newInput.setAttribute("autofocus", true);
    newInput.className =
      " border  focus:cursor-auto  w-52 border-stone-950 w-[300px] focus-visible:outline-none font-mon px-2 py-1 ";
    editBtn.setAttribute("disabled", true);
    taskList.after(newInput);
    taskList.className = "hidden";
    newInput.addEventListener("blur", () => {
      taskList.innerText = newInput.value;
      taskList.classList.remove("hidden");
      newInput.className = "hidden";
      editBtn.removeAttribute("disabled");
    });
  };
  