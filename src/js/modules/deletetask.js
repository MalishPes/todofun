 const toDeleteTask = function(){
    let deleteBtns = document.querySelectorAll('.delete-task');
    let taskCards = document.querySelectorAll('.js-task-info');
    let doneBtns = document.querySelectorAll('.done-task');
    for(let i=0; i<taskCards.length; i++){
    let deleteBtn = deleteBtns[i];
    let doneBtn = doneBtns[i];
    let taskCard = taskCards[i];
    
    deleteBtn.addEventListener('click', function(evt){
        taskCard.style.transition = 'all 1s' ;
        taskCard.style.backgroundColor = '#8b5824';
        setTimeout(()=>{
            taskCard.remove(taskList);
        }, 1000)});
    
    doneBtn.addEventListener('click', function(){
        taskCard.style.transition = 'all 1s' ;
        taskCard.style.backgroundColor = '#fcebae';
    setTimeout(()=>{
        taskCard.remove(taskList);
    }, 1000)
   

    })
    }
}
export default toDeleteTask();
