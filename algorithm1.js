var monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var satOnFirsts = 1;
var startYear = 1701;
var endYear = 1799;
var currentYear = startYear;
var j = 1;
var previousNum;


for (y= startYear; y < endYear; y++){


// is this a leap year?
if (currentYear % 4 == 0){
	monthArray[1] = 29;
}


for (i = 0; i < 12; i++){
	//console.log("for i = 0, less than 12 ", i)
	previousNum = j;
	while(previousNum < monthArray[i]){
		//console.log("while ", previousNum, monthArray[i])
		previousNum = j;
		j = j + 7;
		if (j == monthArray[i] + 1){
			satOnFirsts++;
			previousNum  = monthArray[i] + 1;
			j = 1;
		}else if (j > monthArray[i] + 1){
			j = 7 - (monthArray[i] - previousNum);
			previousNum = monthArray[i] + 7;
		}
		//console.log(monthArray[i], " ", previousNum, " ", i, " ", j, " ", y)
	}	
}


monthArray[1] = 28;
}
console.log(`The number of Saturdays on the first of the month between 1701 and 1799 is ${satOnFirsts}`)

