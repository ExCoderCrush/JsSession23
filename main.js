import { addExpense, deleteExpense, displayExpense } from "./expenseManager.js";
console.log("Started...");

async function run() {

await addExpense(200, "Groceries");
await addExpense(100, "trasport");
await addExpense(50, "Facewash");

await displayExpense();
await deleteExpense(2);
await displayExpense();
}
run();