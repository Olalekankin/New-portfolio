// The website is a single page application
// Here is functionality to toggle between pages
// declearing variable

const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.menu-page');
const container = document.querySelector('.container');

const theme = document.querySelector('.theme');
const themeBtn = document.querySelector('.theme-btn');


let isClicked = false;

themeBtn.addEventListener('click', function (){
    if(isClicked == false){
        theme.style.backgroundColor = `var(--white-color)`
        container.style.backgroundColor = `var(--black-color)`
        themeBtn.style.backgroundColor = `var(--black-color)`
        themeBtn.style.transform = `translateX(30px)`;
        isClicked = true;
    
    }else{
        theme.style.backgroundColor = `var(--black-color)`
        container.style.backgroundColor = `var(--greybg-color)`
        themeBtn.style.backgroundColor = `var(--white-color)`
        themeBtn.style.transform = `translateX(0px)`;
        isClicked = false;
    }
   

        
    
    

    
})

container.addEventListener('click', function(e){
    const id = e.target.dataset.id
    console.log(id)

    if(id){
        navBtns.forEach( function (btn){
            btn.classList.remove('active');
            e.target.classList.add('active')
        })

        pages.forEach( function (page){
            page.classList.remove('active');
            const pageElem = document.getElementById(id);
            pageElem.classList.add('active')
        })
    } 
    
   
});

