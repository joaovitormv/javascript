const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

console.log(listElement, inputElement, buttonElement)

const tarefas = ["estudar para prova", "dormir cedo", "KKKKKKKKKKK"]

for (const itemTarefa of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemTarefa)
    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}

