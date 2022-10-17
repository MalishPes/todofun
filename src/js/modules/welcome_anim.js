
const animateImg = ()=> {
    const img = document.querySelector('.js_welcome-img');
    const body = document.querySelector('body');
    let clientWidth = document.body.clientWidth;
    let leftValue = 0;

    window.addEventListener('load', function(evt){
        console.log(clientWidth)
       
            setInterval(()=>{
           leftValue += 1;
           ///console.log(img.offsetLeft);
            img.style.left = leftValue + '%';
                if(img.offsetLeft > clientWidth){
                  //  console.log('hi')
                     leftValue = -40;
                }
           
        }, 33.3)
        
      
    })
   
   
}


export  {animateImg as animateImg};

