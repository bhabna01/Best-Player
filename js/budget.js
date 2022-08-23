document.getElementById("player-calculate").addEventListener("click", function () {
    const perPlayerBudget = document.getElementById("per-budget");
    const value = parseInt(perPlayerBudget.value);
    const calculation = value * 5;
    const expense = document.getElementById("total-amount");
    expense.innerText = calculation;
    perPlayerBudget.value = '';

})
document.getElementById("calculate-total").addEventListener("click", function () {
    const expense = document.getElementById("total-amount");
    const calculation = parseInt(expense.innerText);
    const manager = document.getElementById("manager-calculate");
    const mangervalue = parseInt(manager.value);
    const coach = document.getElementById("coach-calculate");
    const coachValue = parseInt(coach.value);
    const calculateTotal = calculation + mangervalue + coachValue;
    const totalexpense = document.getElementById("total-expense");
    totalexpense.innerText = calculateTotal;
    expense.value = '';
    manager.value = '';
    coach.value = '';
})
