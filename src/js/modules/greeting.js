
const greeting = (name=`cтранник`)=> {
    const greetigTitle = document.querySelector('.main__greeting-title');
    const form = document.querySelector('.welcome-section__name-form');
    const nameInput = document.querySelector('.welcome-section__name-input');
    const welcomeSection = document.querySelector('.welcome-section');
    const wrapper = document.querySelector('.wrapper');
    form.addEventListener('submit', function(evt){
        console.log('hi')
        evt.preventDefault();
        name = nameInput.value;
        console.log(nameInput.value);
        welcomeSection.style.opacity = '0';
        setTimeout(()=>{
            welcomeSection.style.display = 'none';
        }, 2000)

        //welcomeSection.style.zIndex = '0';
        //wrapper.style.zIndex = '1';

        wrapper.classList.remove('wrapper-js');
        greetigTitle.textContent = `Привет, ${name}!`
    })
}

export  {greeting};