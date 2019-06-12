let Utils = {
	clearNode: function (id) {

	    document.getElementById(id).innerHTML = '';
	},
	getValue: function (id){

	    return this.getById(id).value;
	},
	getById: function (id){

	    return document.getElementById(id);
	},
	insertBefore: function (id, el){

	    this.getById(id).insertBefore(el, this.getById(id).lastChild);
	},
	createElement: function (tag, text) {

	    let el = document.createElement(tag);

	    el.innerText = text;

	    return el;
	},
	setDefaultDate: function (id){

	    this.getById(id).value = new Date();
	}
}

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

