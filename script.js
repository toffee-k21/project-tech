let btnLeft = document.querySelector('#btnLeft');   
let btnRight = document.querySelector('#btnRight');
let cardContainer = document.querySelector('.cardContainer'); 
let dropdownlist = document.querySelectorAll('.dropdownlist');
let navbar = document.querySelector('.navbar') 
let listItem = document.querySelectorAll('.listItem') 
let dropFirst = document.getElementById('#dropFisrt') 
// let drop1 = document.querySelector('#drop1') 
let dropSecond = document.querySelector('#dropSecond') 
let dropThird = document.querySelector('#dropThird') 
let drop4 = document.querySelector('#drop4') 
let navCont = document.querySelector('#navContainer')


btnRight.addEventListener('click',()=>{
    
    if( cardContainer.style.transform == `translateX(0px)`){
    cardContainer.style.transform = 'translateX(-300px)'
    }
    else if( cardContainer.style.transform == 'translateX(-300px)'){
        cardContainer.style.transform = 'translateX(-600px)'
    }
    else if( cardContainer.style.transform == 'translateX(-600px)'){
        cardContainer.style.transform = 'translateX(-900px)'
    }
    else if( cardContainer.style.transform == 'translateX(-900px)'){
        cardContainer.style.transform = 'translateX(-1200px)'
    }
    else if( cardContainer.style.transform == 'translateX(-1200px)'){
        cardContainer.style.transform = 'translateX(-1500px)'}
    else if( cardContainer.style.transform == 'translateX(-1500px)'){
        cardContainer.style.transform = 'translateX(-1800px)'
        btnRight.style.display = "none"
    }
    else{
        console.log('nhi ho rha')
        // cardContainer.style.transform = 'translateX(-300px)'
    }
})
btnLeft.addEventListener('click',()=>{
    if( cardContainer.style.transform == `translateX(-300px)`){
        cardContainer.style.transform = 'translateX(0px)'
        }
        else if( cardContainer.style.transform == 'translateX(-600px)'){
            cardContainer.style.transform = 'translateX(-300px)'
        }
        else if( cardContainer.style.transform == 'translateX(-900px)'){
            cardContainer.style.transform = 'translateX(-600px)'
        }
        else if( cardContainer.style.transform == 'translateX(-1200px)'){
            cardContainer.style.transform = 'translateX(-900px)'
        }
        else if( cardContainer.style.transform == 'translateX(-1500px)'){
            cardContainer.style.transform = 'translateX(-1200px)'}
        else if( cardContainer.style.transform == 'translateX(-1800px)'){
            cardContainer.style.transform = 'translateX(-1500px)'
        }
        else{
            console.log('nhi ho rha')
            // cardContainer.style.transform = 'translateX(-300px)'
        }
})

cardContainer.addEventListener('mouseover',()=>{
    btnLeft.style.display = 'block'
    btnRight.style.display = 'block'
})

btnLeft.addEventListener('mouseover',()=>{
    btnLeft.style.display = 'block'
    btnRight.style.display = 'block'
})
btnRight.addEventListener('mouseover',()=>{
    btnLeft.style.display = 'block'
    btnRight.style.display = 'block'
})
cardContainer.addEventListener('mouseout',()=>{
    btnLeft.style.display = 'none'
    btnRight.style.display = 'none'
})

listItem[0].addEventListener('mouseover',()=>{
    dropdownlist[0].style.display = "block"
    dropdownlist[1].style.display = "none"
    dropdownlist[2].style.display = "none"
    dropdownlist[3].style.display = "none"
    dropdownlist[0].style.animation = "animate 3s ease-in-out"
    navbar.style.backgroundColor = "black"
})

// dropFirst.addEventListener('mouseleave',()=>{
//     dropdownlist[0].style.display = "none"
//     dropdownlist[0].style.animation = "animate2 .5s ease-in-out"
//     navbar.style.backgroundColor = ""
// })
navCont.addEventListener('mouseleave',()=>{
    dropdownlist[0].style.display = "none"
    dropdownlist[0].style.animation = "animate2 5s ease-out"
    navbar.style.backgroundColor = ""
})

listItem[1].addEventListener('mouseover',()=>{
    dropdownlist[0].style.display = "none"
    dropdownlist[1].style.display = "block"
    dropdownlist[2].style.display = "none"
    dropdownlist[3].style.display = "none"
    dropdownlist[1].style.animation = "animate .5s ease-out"
    // dropdownlist[1].style.transition = "all "
    navbar.style.backgroundColor = "black"
    
})
listItem[1].addEventListener('mouseleave',()=>{
    dropdownlist[1].style.display = "none"
    dropdownlist[1].style.animation = "animate2 .5s ease-in-out"
    // dropdownlist[1].style.transition = "all "
    navbar.style.backgroundColor = ""
})

listItem[2].addEventListener('mouseover',()=>{
    dropdownlist[0].style.display = "none"
    dropdownlist[1].style.display = "none"
    dropdownlist[2].style.display = "block"
    dropdownlist[3].style.display = "none"
    dropdownlist[2].style.animation = "animate .5s ease-in-out"
    navbar.style.backgroundColor = "black"
    
})

navCont.addEventListener('mouseleave',()=>{
    dropdownlist[2].style.display = "none"
    dropdownlist[2].style.animation = "animate2 .5s ease-in-out"
    navbar.style.backgroundColor = ""
})

listItem[3].addEventListener('mouseover',()=>{
    dropdownlist[0].style.display = "none"
    dropdownlist[1].style.display = "none"
    dropdownlist[2].style.display = "none"
    dropdownlist[3].style.display = "block"
    dropdownlist[3].style.animation = "animate .5s ease-in-out"
    navbar.style.backgroundColor = "black"
    
})

navCont.addEventListener('mouseleave',()=>{
    dropdownlist[3].style.display = "none"
    dropdownlist[3].style.animation = "animate2 .5s ease-in-out"
    navbar.style.backgroundColor = ""
})













//waste
// dropdownlist[0].addEventListener('mouseout',()=>{
//     dropdownlist[0].style.display = "none"
//     dropdownlist[0].style.animation = "animate2 .5s ease-in-out"
//     navbar.style.backgroundColor = ""
// })

// listItem[1].addEventListener('mouseover',()=>{
//     dropdownlist[1].style.display = "block"
//     dropdownlist[1].style.animation = "animate .5s ease-in-out"
//     navbar.style.backgroundColor = "black"
// })

// // dropSecond.addEventListener('mouseleave',()=>{
// //     dropdownlist[1].style.display = "none"
// //     dropdownlist[1].style.animation = "animate2 .5s ease-in-out"
// //     navbar.style.backgroundColor = ""

// // })
// // dropdownlist[1].addEventListener('mouseout',()=>{
// //     dropdownlist[1].style.display = "none"
// //     dropdownlist[1].style.animation = "animate2 .5s ease-in-out"
// //     navbar.style.backgroundColor = ""

// // })
// listItem[2].addEventListener('mouseover',()=>{
//     dropdownlist[2].style.display = "block"
//     dropdownlist[2].style.animation = "animate .5s ease-in-out"
//     navbar.style.backgroundColor = "black"
// })

// // dropThird.addEventListener('mouseout',()=>{
// //     dropdownlist[2].style.display = "none"
// //     dropdownlist[2].style.animation = "animate2 .5s ease-in-out"
// //     navbar.style.backgroundColor = ""

// // })
// // dropdownlist[2].addEventListener('mouseout',()=>{
// //     dropdownlist[2].style.display = "none"
// //     dropdownlist[2].style.animation = "animate2 .5s ease-in-out"
// //     navbar.style.backgroundColor = ""

// // })
// listItem[3].addEventListener('mouseover',()=>{
//     dropdownlist[3].style.display = "block"
//     dropdownlist[3].style.animation = "animate .5s ease-in-out"
//     navbar.style.backgroundColor = "black"
// })

// // dropdownlist[3].addEventListener('mouseout',()=>{
// //     dropdownlist[3].style.display = "none"
// //     dropdownlist[3].style.animation = "animate2 .5s ease-in-out"
// //     navbar.style.backgroundColor = ""

// // })

