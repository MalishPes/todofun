
 const toDeleteTask = function(){
    let taskCards = document.querySelectorAll('.js-task-info');
    let taskList = document.querySelector('.task-list');
    let deleteBtns = document.querySelectorAll('.delete-task');
    let doneBtns = document.querySelectorAll('.done-task');
    for(let i=0; i<taskCards.length; i++){
    let deleteBtn = deleteBtns[i];
    let doneBtn = doneBtns[i];
    let taskCard = taskCards[i];
    
    deleteBtn.addEventListener('click', function(evt){
        console.log(taskCards.length);

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
export {toDeleteTask as toDeleteTask};
