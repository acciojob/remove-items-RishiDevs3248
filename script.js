//your JS code here. If required.
let x = document.getElementById("colorSelect")
let btn = document.querySelector('input')
btn.addEventListener('click',()=>{
	x.remove(x.selectedIndex);
})