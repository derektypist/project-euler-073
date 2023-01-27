// Function to Get Limit (Number) Information (including Invalid Input)
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mylimit").value;
    // Check if the Input is Valid
    if (isNaN(num) || num.length==0 || num<8 || num>12000 || (num.length>1 && num[0] == "0") || Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 8 and 12000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit of ${num}.<p>`;
        txt += `${countingFractionsInARange(num)} fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}