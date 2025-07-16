

const description = document.getElementById('description')
const userinputD = document.getElementById('userdescription')
const amount = document.getElementById('amount')
const userinputA = document.getElementById('useramount')
const addexpense = document.getElementById('addexpense')
const totalexpense = document.getElementById('totalexpense')
const list = document.getElementById('list')


let total = 0

addexpense.addEventListener ('click', () => {
   const uservalueD = userinputD.value.trim()
   const uservalueA = userinputA.value.trim()
   if (!uservalueD || !uservalueA) return 
   const additem = document.createElement('li')
   const removebtn = document.createElement('button')
   removebtn.textContent = 'X'
   removebtn.classList.add('remove-btn')
   const useramount = parseFloat(uservalueA).toFixed(2) 
   additem.textContent = `${uservalueD} - $${useramount}`
   list.appendChild(additem)
   additem.appendChild(removebtn)
   total += parseFloat(useramount)

   totalexpense.textContent = `Total Expenses: $${total.toFixed(2)}`
      removebtn.addEventListener('click', () => {
      list.removeChild(additem)
      total -= parseFloat(useramount)
      totalexpense.textContent = `Total Expenses: $${total.toFixed(2)}`
   })
})




// Things to Add 

// the page should start off as only 1 container, when expense is added, the container 2 pops up

// CSS design
// Money sign inside the amount container
// Change currency