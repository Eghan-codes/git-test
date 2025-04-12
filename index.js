let myLeads = []
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()  
})

function renderLeads(){
    let listItems = " "
    for(let i = 0; i < myLeads.length; i++){
    listItems += "<li>" + "<a href='#'>"+ myLeads[i] + "</a>" + " " + "</li>"
    }
    ulEl.innerHTML = listItems
}


