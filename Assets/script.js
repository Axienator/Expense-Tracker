const description = document.getElementById('description')
const userinputD = document.getElementById('userdescription')
const amount = document.getElementById('amount')
const userinputA = document.getElementById('useramount')
const addexpense = document.getElementById('addexpense')
const totalexpense = document.getElementById('totalexpense')
const list = document.getElementById('list')




addexpense.addEventListener ('click', x => {
   const uservalueD = userinputD.value.trim()
   const uservalueA = userinputA.value.trim()
   const additem = document.createElement('li')
   additem.textContent = uservalue
   list.appendChild(additem)  
})










// adds input to description 
// when the button clicked it should be added to the list