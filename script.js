function firstNonRepeatedChar(str) {
 // Write your code here

	for(let i=0;i<str.length;i++){
		if( str.indexOf(str.charAt(i))== str.lastIndexOf(str.chartAt(i))){

			break;	
		}
	}

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
