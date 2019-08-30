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

let Menu = {
     elTmp: function() {
         let el = document.createElement("a");
         el.style.margin = "2px";
         return el;
     },
     tabs:[
         {href: "LetterInText.html",    text: "LetterInText",    index: 0},
         {href: "Palindrome.html",      text: "Palindrome",      index: 1},
         {href: "RandomeColor.html",    text: "RandomeColor",    index: 2},
         {href: "RandomeColor_1.html",  text: "RandomeColor_1",  index: 3},
         {href: "bounce-up-down.html",  text: "bounce-up-down",  index: 4},
         {href: "bounce.html",          text: "bounce",          index: 5},
         {href: "calc.html",            text: "calc",            index: 6},
         {href: "console.html",         text: "console",         index: 7},
         {href: "nasa-picture.html",    text: "nasa-picture",    index: 8},
         {href: "space_control.html",   text: "space_control",   index: 9},
         {href: "svg_random_color.html",text: "svg_random_color",index: 10},
         {href: "textAnalize.html",     text: "textAnalize",     index: 11},
         {href: "timediff.html",        text: "timediff",        index: 12},
         {href: "temp-mail.html",       text: "temp-mail",       index: 13},
         {href: "index.html",           text: "home",            index: 14},
	 {href: "proporcijos.html",     text: "proportion",      index: 15},
	 {href: "ajax-reguest.html",    text: "ajax-reguest",    index: 16},
	 {href: "notes.html",           text: "notes",           index: 17}
     ]
 }
