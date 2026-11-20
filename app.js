                chapter 1
question 1


alert("Welcome to this website")

alert("Error! Plz entre valid password ")

alert("Welcome to JS land \n Happy Coding")

alert("Welcome to JS land")

alert("Happy Coding!")



                    // chapter 6 to 9


//  question 1

var a = 10
a++;
console.log(a)


var a = 10;
++a;
document.write("The Value of ++a is : " + a + "<br>")
document.write("The Value of a is : " + a + "<br> <br>")

document.write("The Value of a++ is : " + a + "<br>")
a++;
document.write("The Value of a is : " + a + "<br> <br>")

--a;
document.write("The Value of --a is : " + a + "<br>")
document.write("The Value of a is : " + a + "<br> <br>")

document.write("The Value of a-- is : " + a + "<br>")
a--;
document.write("The Value of a is : " + a + "<br>")



// question 3
var name = prompt("Write your name")
document.write("welcome" + " " + name + "<br>")

var num = prompt("write a number")

if (num) {

    document.write(num + " " + "x" + " " + "1" + " " + "=" + " " + (num * 1) + "<br>")
    document.write(num + " " + "x" + " " + "2" + " " + "=" + " " + (num * 2) + "<br>")
    document.write(num + " " + "x" + " " + "3" + " " + "=" + " " + (num * 3) + "<br>")
    document.write(num + " " + "x" + " " + "4" + " " + "=" + " " + (num * 4) + "<br>")
    document.write(num + " " + "x" + " " + "5" + " " + "=" + " " + (num * 5) + "<br>")
    document.write(num + " " + "x" + " " + "6" + " " + "=" + " " + (num * 6) + "<br>")
    document.write(num + " " + "x" + " " + "7" + " " + "=" + " " + (num * 7) + "<br>")
    document.write(num + " " + "x" + " " + "8" + " " + "=" + " " + (num * 8) + "<br>")
    document.write(num + " " + "x" + " " + "9" + " " + "=" + " " + (num * 9) + "<br>")
    document.write(num + " " + "x" + " " + "10" + " " + "=" + " " + (num * 10) + "<br>")
} else {
    document.write(5 + " " + "x" + " " + "1" + " " + "=" + " " + (5 * 1) + "<br>")
    document.write(5 + " " + "x" + " " + "2" + " " + "=" + " " + (5 * 2) + "<br>")
    document.write(5 + " " + "x" + " " + "3" + " " + "=" + " " + (5 * 3) + "<br>")
    document.write(5 + " " + "x" + " " + "4" + " " + "=" + " " + (5 * 4) + "<br>")
    document.write(5 + " " + "x" + " " + "5" + " " + "=" + " " + (5 * 5) + "<br>")
    document.write(5 + " " + "x" + " " + "6" + " " + "=" + " " + (5 * 6) + "<br>")
    document.write(5 + " " + "x" + " " + "7" + " " + "=" + " " + (5 * 7) + "<br>")
    document.write(5 + " " + "x" + " " + "8" + " " + "=" + " " + (5 * 8) + "<br>")
    document.write(5 + " " + "x" + " " + "9" + " " + "=" + " " + (5 * 9) + "<br>")
    document.write(5 + " " + "x" + " " + "10" + " " + "=" + " " + (5 * 10) + "<br>")
}

var english = prompt("Enter Subject name")
var math = prompt("Enter Subject name")
var urdu = prompt("Enter Subject name")

var totalMarks = 100;

var subject1 = prompt("Enter obtained marks")
var subject2 = prompt("Enter obtained marks")
var subject3 = prompt("Enter obtained marks")

var totalObtaindMarks = subject1 + subject2 + subject3;

var englishPercentage = subject1 / 300 * 100;
var mathPercentage = subject2 / 300 * 100;
var urduPercentage = subject3 / 300 * 100;


document.write("Subject" + " " + "totalMarks" + " " + "Obtained Marks" + " " + "Percentage" + "<br>")
document.write(english + " " + totalMarks + " " + subject1 + " " + englishPercentage + "<br>")
document.write(math + " " + totalMarks + " " + subject2 + " " + mathPercentage + "<br>")
document.write(urdu + " " + totalMarks + " " + subject3 + " " + urduPercentage + "<br>")





