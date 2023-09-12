let count = document.querySelector("#counter-value");

function decrement() {
  if (count.value <= 1) {
    count.value = 1;
  } else {
    count.value = parseInt(count.value) - 1;
  }
}

function increment() {
  count.value = parseInt(count.value) + 1;
}
