console.log('budget')

// recuperer touts les elements HTML

const budget = document.querySelector('#budget');
const depense = document.querySelector('#depense');
const montant = document.querySelector('#montant');

const addBtn = document.querySelector('.add-btn');
const earserBtn = document.querySelector('.reset-btn');

const totalBudget = document.querySelector('.income>span');
const depensesEnBas = document.querySelector('.expense>span');
const balance = document.querySelector('.balance>span');

addBtn.addEventListener('click',addDepense);

let totalDepense = 0;



function addDepense(){
    budget.value = totalBudget
    totalBudget.textContent = budget.value
    depense.value.textContent = 
    montant.value.textContent

    
}
