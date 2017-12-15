function noRepeats(str){
	var alphabet = {}
	var newStr = '';
	for (let i = 0; i < str.length; i++){
		
		if (alphabet[(str.charAt(i))] == 1){
			continue;
		}else{
			alphabet[(str.charAt(i))] = 1;
			newStr = newStr + str.charAt(i)
		}
	}
	return newStr;
	console.log(alphabet);
}
console.log(noRepeats("hello"));