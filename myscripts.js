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

function isPalindrome(elValue,elPrint){
	
 	var result = "NE.";
	var resultText = " yra palindrome? ";
	var palind = "";
	var world = getValue(elValue).toLowerCase();

	for(var i = 0; i < world.length; i++){
		palind = palind + world.charAt((world.length - 1) - i); 
	} 
	if(world == palind){
		result = "TAIP.";
	}
	printToElement(elPrint, '"' + world + '"' + resultText + result);

}
