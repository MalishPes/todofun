import {dragAndDrop} from "./drag_and_drop.js";
import { toDeleteTask } from "./deletetask.js";

const addTask = ()=>{
const template = document.querySelector('#task-item').content;
const taskInput = document.querySelector('.task-content');
const form = document.querySelector('.add-tasks');
const taskList = document.querySelector('.task-list');
const taskText = template.querySelector('.task-text');
const taskDate = template.querySelector('.date');
const addTaskBtn  = document.querySelector('.add-task-btn')

form.addEventListener('submit', function(evt){
evt.preventDefault(); 

 let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate()
  taskText.textContent = taskInput.value;
  taskDate.textContent = day + '.' + month + '.' + year;
  let newTask = template.cloneNode(true);
  taskList.append(newTask);
  taskInput.value='';
  dragAndDrop();
  toDeleteTask();
});

}
//export{taskList};
export default addTask;