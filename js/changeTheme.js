const blu = document.getElementById("blu");//紫色
const pup = document.getElementById("pup");//紫色
const ora = document.getElementById("ora");//橙色
const toTop = document.getElementById("toTop");
const cus = document.getElementById("cus");

const headerLogo = document.getElementById("headerLogo");//header

//获取主题色后 ，设置主题色

blu.addEventListener("click",function(){
	document.body.style.setProperty('--themeColor', '#1d50a2');
	document.body.style.setProperty('--themeColorDeep', '#0f4292');
	document.body.style.setProperty('--themeColorShallow', '#4e72ab');
	headerLogo.src="images/header_logo.png";
	cus.className=""
	toTop.className=""
})
pup.addEventListener("click",function(){
	document.body.style.setProperty('--themeColor', '#611987');
	document.body.style.setProperty('--themeColorDeep', '#4c0e6c');
	document.body.style.setProperty('--themeColorShallow', '#9d81a9');
	headerLogo.src="images/header_logo-pup.png";
	cus.className="cus-pup"
	toTop.className="to-top-pup"
})
ora.addEventListener("click",function(){
	document.body.style.setProperty('--themeColor', '#ed6942');
	document.body.style.setProperty('--themeColorDeep', '#f45a2c');
	document.body.style.setProperty('--themeColorShallow', '#eeb7a2');
	headerLogo.src="images/header_logo-ora.png";
	cus.className="cus-ora"
	toTop.className="to-top-ora"
})

