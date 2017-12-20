function fecharMenu(){
menuBox = document.querySelector("ul.nav.navbar-nav.navbar-right");
if(menuBox.style.display == 'block') {
	menuBox.style.display = 'none';
}
else {
	menuBox.style.display = 'block';
}

}
