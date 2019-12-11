var c = document.querySelector('#c')
var cc = c.getBoundingClientRect()

var colors = ["#1f1e24","#b72015","#075862","#e1b806","white"]

function block(n) {

  if(document.querySelectorAll('.block').length < 400) {
    var b = document.createElement('div')
    b.className = "block"
    b.style.background = colors[Math.floor(Math.random()*colors.length)]
    var n = Math.random() < .5 ? "0" : "45"
    var r = Math.random();
    b.style.borderRadius = n + "px"
    b.style.transform = "scale("+r+")"
  c.appendChild(b)
  } else {
    clearInterval(build)
  }
}

var build = setInterval(block)

window.addEventListener('click', reset)

function reset() {
  c.innerHTML = ""

    var build = setInterval(block)
    c.style.filter = "hue-rotate("+Math.floor(Math.random()*360)+"deg)"

}
