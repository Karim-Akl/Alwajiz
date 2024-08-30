document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if(window.scrollY > 0) {
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})





 

let cols = document.querySelectorAll(".cols .num")
let section = document.querySelector(".Company")
let starteed = false


window.onscroll = function( ) {
    if(window.scrollY >= section.offsetTop){
        if (!starteed){
            cols.forEach((num) => startCount(num))
        }
        starteed = true;
    }
};


function startCount(el) {
    let goal =el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },0.1)
}


startCount(document.querySelectorAll(".cols .num"[0]));









//  const boxs = document.querySelectorAll('.Newsletters')


//  const options = {
//     root: null,
//     rootMargin:'-150px 0px -200px 0px'
//  }

//  const observer = new IntersectionObserver ((entries) =>
//  {
//     entries.forEach(el => {
//         el.target.classList.toggle('container', el.isIntersecting)
//         if (el.isIntersecting){
//             observer.unobserve(el.target)
//         }
//     })
 
// }, options)

// boxs.forEach(box =>{
//     observer.observe(box)
// })





 const boxes =document.querySelectorAll('.container')



 window.addEventListener('scroll' ,checkBoxes)
 checkBoxes();
 function checkBoxes() {
 const triggerBottom = window.innerHeight / 5 * 4;

 boxes.forEach( box => {
    const boxTop =box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
       box.classList.add('show') 
    } else{
        box.classList.remove('show')
    }
 })
  }








  






  
 
 
 