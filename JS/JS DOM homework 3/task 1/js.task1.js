//calls the event listeners in the end so they can have what to work with
function startListen(){
     document.getElementById("addButton").addEventListener("click", addToList);
 }
 
function addToList() {
    let node = document.createElement("li");
    let inputText = document.getElementById("inputid");
    let textnode = document.createTextNode(inputText.value);
    node.appendChild(textnode);
    document.getElementById("toDoList").appendChild(node);
  }

  