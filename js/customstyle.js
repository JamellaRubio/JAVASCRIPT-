function displayName(name){
    return name;
}
function computeTwoNumbers(num1,num2){
    return num1 + num2;
}
function confirmSubmission(){
    if (confirm("Do you really want to submit?")) {
        alert(computeTwoNumbers(10,23));
    }
}
function inputTwoNumbers(){
    let name = prompt("Enter Your Name");
    var firstNum = parseInt(prompt("Enter First Number"));
    var secondNum = parseInt(prompt("Enter Second Number"));
    alert("Your Name is: " + name + "\nThe Sum of Two Numbers is: " + computeTwoNumbers(firstNum, secondNum));
}
function calculateGrade() {
    let name = prompt("Enter Your Name");
    let totalScore = parseFloat(prompt("Enter Total Items")); 
    let totalItems = parseFloat(prompt("Enter Total Score"));  
    let grade = -4 * (totalItems / totalScore) + 5;
    let remarks = (grade >= 3.01) ? "FAILED" : "PASSED";
    alert("Your Name is: " + name + "\nYour Total Grade is: " + grade.toFixed(2) + "\nRemarks: " + remarks);
    console.log(`Your Name is: ${name}\nYour Total Grade is: ${grade.toFixed(2)}\nRemarks: ${remarks}`);
    document.getElementById("result").innerHTML = `
        Your Name is: ${name}<br>
        Your Total Grade is: ${grade.toFixed(2)}<br>
        Remarks: ${remarks}<br>
    `;
}