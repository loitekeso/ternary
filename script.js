// Part 1
function showGrade() {
    var highSchoolGrade = Number(prompt("Please enter high school grade"));
    var yourGrade;
    switch(highSchoolGrade) {
    	case 9: yourGrade = "Freshman";
        		break;
        case 10: yourGrade = "Sophomore";
        		break;
        case 11: yourGrade = "Junior";
        		break;
        case 12: yourGrade = "Senior";
        		break;
        default: yourGrade = "Invalid";
    }
    document.getElementById("demo").innerHTML = yourGrade;
}
// Part 2
function showName() {
    var firstName = prompt("Please enter your first name");
	document.getElementById("demo").innerHTML = firstName === "John" ? "Hello John!" : "Hello Human!";
}