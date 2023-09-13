let count = document.querySelectorAll(".counter");
var minus = document.querySelectorAll(".btn-minus");
var plus = document.querySelectorAll(".btn-plus");

for (let b = 0; b < minus.length; b++) {
  let num = count[b].value;

  minus[b].addEventListener(
    "click",
    function () {
      if (num <= 1) {
        num = parseInt(num);
        count[b].setAttribute('value', num);
      } else {
        num = parseInt(num) - 1;
        count[b].setAttribute('value', num);
      }
    },
    true
    );
    
    plus[b].addEventListener('click', function(){
      num = parseInt(num)+1;
      count[b].setAttribute('value', num);
    });
  }





