var count = 1;

function specialCounter(element) {
  count++;
  element.innerText++;
}

function specialCounter() {
  document.querySelector("#number").innerText++;
}
function logOut(element) {
  element.innerText = "Logout";
}
function hide(element) {
  element.remove();
}
