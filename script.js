

// color changer
let greenBtn = document.querySelector('.green-btn');
let whiteBtn = document.querySelector('.white-btn');
let orangeBtn = document.querySelector('.orange-btn');
let allText = document.querySelectorAll('p');

greenBtn.addEventListener('click', () => {
  allText.forEach((element) => {
    element.style.color = 'green';
  });
});

whiteBtn.addEventListener('click', () => {
    allText.forEach((element) => {
      element.style.color = 'white';
    });
  });

  orangeBtn.addEventListener('click', () => {
    allText.forEach((element) => {
      element.style.color = 'orange';
    });
  });
         
         

         //conditional
let ag = document.getElementById("prompt");
    ag.addEventListener("click",function(){
        let age = prompt("what is your age?");
if(age>= 18){
    alert("you can drive!");
} else{
    alert("sorry but you can not drive");
}
    })
// event handler
    let hi = document.getElementById("hello");
    hi.addEventListener("click",function(){
        alert("hello");
    })

    // notification
    let day = document.getElementById("good");
    day.addEventListener("click",function(){
        alert("have a nice day");
    })


