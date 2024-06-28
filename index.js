// Write your code here!
const noMainId = document.getElementById("main").remove()

const newHeader = document.createElement("h1")
newHeader.innerHTML = "Kyle is the champion"
newHeader.setAttribute("id", 'victory')
document.body.append(newHeader)