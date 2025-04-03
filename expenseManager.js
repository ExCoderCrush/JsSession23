let expenses = [];// private array
let expneseID=1;


//add expense  
const addExpense =  (amount, description) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const expense={ id:expneseID++ ,amount, description};
            if (amount > 0 && description) {
                expenses.push(expense);
                console.log(`Expense Added: ${expense.id} - ${expense.amount} - ${expense.description}`);
                resolve(expense);
            }
        }, 1000)
    }
    );
};

// delete expense 
const deleteExpense =  (id) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                expenses = expenses.filter(exp => exp.id !== id);
                console.log(`Expense : ${id} Deleted`);
                resolve();
            }, 1000);
        }
    );
};

//display expense
const displayExpense =  () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            console.log("Current Expenses");
            expenses.forEach( exp=>{
                console.log(`ID: ${exp.id}, Name: ${exp.description}, Amount: $${exp.amount}`)}
            );
            resolve(expenses);
        }, 1000);
    });
};


export { addExpense, deleteExpense, displayExpense };

