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
   const useramount = parseFloat(uservalueA).toFixed(2) // added a parseFloat, so that I can turn the input of amount from string into a real number with 2 decimals(.toFixed(2))
   const additem = document.createElement('li')


   if (!uservalueD || !uservalueA) return // I cleaned up the else and instead put the 'return' on this line, it still has the same functionality but more clean.
   list.appendChild(additem)
   additem.textContent = `${uservalueD} - ${useramount}$`
   
})










// adds input to description 
// when the button clicked it should be added to the list