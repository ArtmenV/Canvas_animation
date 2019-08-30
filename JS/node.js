var elems = document.querySelectorAll("p");
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function() {
    this.innerHTML = i;
  });
}

console.log(i);
