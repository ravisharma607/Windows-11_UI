let taskBar = document.getElementsByClassName('taskBar')[0];
let startMenu = document.getElementsByClassName('startMenu')[0];

taskBar.addEventListener('click', () =>{
    if(startMenu.style.bottom == '45px'){
        startMenu.style.bottom = '-700px';
    }
    else{
        startMenu.style.bottom = '45px'
    }
})