const investment = document.getElementById("investment");
const income = document.getElementById("income");

document.getElementById("form").addEventListener("submit", calculateRoi);

let investmentCost;
let incomeGenerated;

function getValue() {
    investmentCost = investment.value;
    incomeGenerated = income.value;
    console.log(investmentCost, incomeGenerated)
}
function calculateRoi(e) {
    e.preventDefault();
    var firstParam = incomeGenerated - investmentCost;
    var result = firstParam / investmentCost;
    var parsedResult = parseFloat(result).toFixed(2)

    document.getElementById("result").value = `${parsedResult} €`

    console.log(result);
    console.log(investmentCost);
    console.log(incomeGenerated);
}