function findSmallest() {
    // Get the input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        // Find the smallest number
        if (num1 === num2) {
            alert("Both numbers are equal.");
        } else {
            var smallest = num1 < num2 ? num1 : num2;

            // Display the result
            alert("The smallest number is: " + smallest);
        }
    } else {
        alert("Please enter valid numbers.");
    }
}