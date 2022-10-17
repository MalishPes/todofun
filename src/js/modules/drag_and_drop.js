

const dragAndDrop = ()=> {
    let  taskCards = document.querySelectorAll('.js-task-info');
     let cells = document.querySelectorAll('.js-cell'); 
 if(taskCards.length>0){
     for (let i=0;i<taskCards.length; i++){
 
         let taskCard = taskCards[i];
         const dragStart = function(){
             setTimeout(()=>{
                 taskCard.classList.add('hide');
                 taskCard.classList.add('chosen')
             }, 0)
             
         }
         
         const dragEnd = function(){
             taskCard.classList.remove('hide');
             taskCard.classList.remove('chosen')
 
             
         }
         
         taskCard.addEventListener('dragstart', dragStart);
         taskCard.addEventListener('dragend', dragEnd);
    
         const dragOver = function(evt){
             evt.stopImmediatePropagation();
             evt.preventDefault();

          }
          const dragEnter = function(evt){
              evt.preventDefault();
              evt.stopImmediatePropagation();

              this.classList.add('hovered');
          }
          const dragLeave = function(){
              this.classList.remove('hovered');
      
          }
          const dragDrop = function(){
            if(taskCard.classList.contains('chosen')){
             this.classList.remove('hovered');
             this.append(taskCard);
            }
         
          }
          cells.forEach((cell)=>{
              cell.addEventListener('dragenter', dragEnter);
              cell.addEventListener('dragleave', dragLeave);
              cell.addEventListener('drop', dragDrop);
              cell.addEventListener('dragover', dragOver);  
              
          })
 
     }
 }
 

 }
 
 
 export { dragAndDrop as dragAndDrop};
 