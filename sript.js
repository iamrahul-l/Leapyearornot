
function checkLeapYear() {
   
    var year = document.getElementById('yearInput').value;

    
    if (year === "") {
        document.getElementById('result').textContent = "Please enter a valid year.";
    } else {
        year = parseInt(year);

        
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            document.getElementById('result').textContent = year + " is a Leap Year!";
        } else {
            document.getElementById('result').textContent = year + " is NOT a Leap Year.";
        }
    }
}