const description = document.getElementById('description')
const userinputD = document.getElementById('userdescription')
const amount = document.getElementById('amount')
const userinputA = document.getElementById('useramount')
const addexpense = document.getElementById('addexpense')
const totalexpense = document.getElementById('totalexpense')
const list = document.getElementById('list')




addexpense.addEventListener ('click', x => {
   const uservalue = userinputD.value.trim()
   const additem = document.createElement('li')
   additem.textContent = uservalue
   list.appendChild(additem)  
   if (!uservalue === "") {
      alert("Nothing to add!") 
      return
   }
})










// adds input to description 
// when the button clicked it should be added to the list