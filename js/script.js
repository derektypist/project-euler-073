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

/*
    Function to return the number of fractions lying between 1/3 and 1/2 in the
    sorted set of reduced proper fractions for d ≤ limit.
    countingFractionsInARange(8)     returns 3
    countingFractionsInARange(1000)  returns 50695
    countingFractionsInARange(6000)  returns 1823861
    countingFractionsInARange(12000) returns 7295372
*/
function countingFractionsInARange(limit) {
    let result = 0;
    const stack = [[3,2]];
    while (stack.length > 0) {
        const [startDenominator, endDenominator] = stack.pop();
        const curDenominator = startDenominator + endDenominator;
        if (curDenominator <= limit) {
            result++;
            stack.push([startDenominator, curDenominator]);
            stack.push([curDenominator, endDenominator]);
        }
    }
    return result;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("limitinfo").innerHTML = txt;
}
