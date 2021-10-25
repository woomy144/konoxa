let b = !1
const a = document.getElementById("arrow");
const c = document.getElementById("menublock");
onhh = () => {
c.style.opacity = b ? "0" : "1"
}
a.onclick = () =>{
b = !b
onhh()
}