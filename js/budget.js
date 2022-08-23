document.getElementById("player-calculate").addEventListener("click", function () {
    const element = document.getElementById("player-list");
    let numb = element.childNodes.length - 1;
    const perPlayerBudget = document.getElementById("per-budget");
    const value = parseInt(perPlayerBudget.value);
    perPlayerBudget.value = '';
    if (isNaN(value)) {
        alert('Enter a valid value');
        return;
    }
    const calculation = value * numb;
    const expense = document.getElementById("total-amount");
    expense.innerText = calculation;


})
document.getElementById("calculate-total").addEventListener("click", function () {
    const expense = document.getElementById("total-amount");
    const calculation = parseInt(expense.innerText);
    const manager = document.getElementById("manager-calculate");
    const mangervalue = parseInt(manager.value);
    const coach = document.getElementById("coach-calculate");
    const coachValue = parseInt(coach.value);
    manager.value = '';
    coach.value = '';
    isvalid(mangervalue);
    isvalid(coachValue);

    const calculateTotal = calculation + mangervalue + coachValue;
    const totalexpense = document.getElementById("total-expense");
    totalexpense.innerText = calculateTotal;
    // expense.value = '';


})
function isvalid(value) {

    if (isNaN(value)) {
        alert('Enter a valid value');
        return;
    }
}