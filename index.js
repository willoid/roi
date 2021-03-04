const investment = document.getElementById("investment");
const income = document.getElementById("income");

function calculateRoi() {
    let investmentCost = investment.value;
    let incomeGenerated = income.value;

    var firstParam = incomeGenerated - investmentCost;
    var result = firstParam / investmentCost;
    
    console.log(result);
    console.log(investmentCost);
    console.log(incomeGenerated);
}