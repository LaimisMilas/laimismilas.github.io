function getById(id){
	return document.getElementById(id);
}

function printToElement(id, text){
	var el = getById(id);
	el.innerHTML = text;
}

function getValue(id){
	return getById(id).value;
}

function getRandomColor(){

	const r = getRandomNumber(0, 255);
	const g = getRandomNumber(0, 255);
	const b = getRandomNumber(0, 255);

	return 'rgb('+ r +','+ g +','+ b +')';
}

function getRandomNumber(from, to){

	return Math.floor(Math.random() * to) + from;
}

function moveRight(element){

	element.style.left = (element.offsetLeft + 2) + "px";
	element.style.top =  (element.offsetTop + 0) + "px";

}

function moveLeft(element){

	element.style.left = (element.offsetLeft - 2) + "px";
	element.style.top =  (element.offsetTop + 0) + "px";
}

function moveUp(element){

	element.style.left = (element.offsetLeft + 0) + "px";
	element.style.top =  (element.offsetTop - 1) + "px";
}

function moveDown(element){

	element.style.left = (element.offsetLeft + 0) + "px";
	element.style.top =  (element.offsetTop + 1) + "px";
}

