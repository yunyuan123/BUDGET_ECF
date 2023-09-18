console.log('budget')

// recuperer touts les elements HTML

const budgetInput = document.querySelector('#budget');
const depenseLabel = document.querySelector('#depense');
const depensePrix = document.querySelector('#montant');

const addBtn = document.querySelector('.add-btn');
const earserBtn = document.querySelector('.reset-btn');

const budgetInfo = document.querySelector('.income>span');
const depensesEnBas = document.querySelector('.expense>span');
const balanceEnBas = document.querySelector('.balance>span');

const rightList = document.querySelector('.expenses-list');


budgetInput.addEventListener('keyup',updateBudget);

let totalDepense = 0;
let totalBudget = 0;
let balance = 0;




// pour la valeur budget global dans le budget en bas 
function updateBudget(){
    totalBudget = budgetInput.value
    budgetInfo.textContent = totalBudget 
    console.log(totalBudget)
}


//la fonction addItems ( pour ajouter les elements dans la liste des dépenses a droite avec leur montant )
addBtn.addEventListener('click', addItems);

function addItems(){
    //createElement
    
    const laSpan = document.createElement('span')
    laSpan.textContent = depenseLabel.value + '' + depensePrix.value+ '€'

    const uneDiv = document.createElement('div');
    uneDiv.classList.add('expenses-item')

    uneDiv.append(laSpan)
    rightList.prepend(uneDiv)

    totalDepense += parseInt(depensePrix.value)
    updateExpense()
    updateBalance()
}
// a chaque fois qu'une depense est ajouté, la dépense totale est mise a jour
function updateExpense(){
    depensesEnBas.textContent = totalDepense + '€'
}
console.log(depensesEnBas)
//a chaque fois qu'une dépense est ajoutée, la balance total est mise a jour
function updateBalance(){
    balance = totalBudget - totalDepense
    balanceEnBas.textContent = balance + '€';
}

// pour tout réinitialise a 0 
earserBtn.addEventListener('click', eraserAll);

function eraserAll(){
    totalDepense = 0
    updateExpense()
    totalBudget = 0
    balanceEnBas.textContent = 0
    updateBalance()
    flushItems()
}

// permet de delete tout la liste des dépenses située a droite
function flushItems(){
    rightList.innerHTML = "";
    // let expensesItems = document.querySelectorAll('.expenses-item');

    // for(let i=0; i < expensesItems.length; i++){
    //     const intemEnCours = expensesItems[i];
    //     intemEnCours.remove()
    // }

}
