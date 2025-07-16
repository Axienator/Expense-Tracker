

const description = document.getElementById('description')
const userinputD = document.getElementById('userdescription')
const amount = document.getElementById('amount')
const userinputA = document.getElementById('useramount')
const addexpense = document.getElementById('addexpense')
const totalexpense = document.getElementById('totalexpense')
const list = document.getElementById('list')


let total = 0

addexpense.addEventListener ('click', x => {
   const uservalueD = userinputD.value.trim()
   const uservalueA = userinputA.value.trim()
   if (!uservalueD || !uservalueA) return // I cleaned up the else and instead put the 'return' on this line, it still has the same functionality but more clean.
   const additem = document.createElement('li')
   const useramount = parseFloat(uservalueA).toFixed(2) // added a parseFloat, so that I can turn the input of amount from string into a real number with 2 decimals(.toFixed(2))
   additem.textContent = `${uservalueD} - $${useramount}`
   list.appendChild(additem)

   total += parseFloat(useramount)
   totalexpense.textContent = `Total Expenses: $${total.toFixed(2)}`
})


// when the expense is added, the total expense should pop up 





