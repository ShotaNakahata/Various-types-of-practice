const inputTask = document.getElementById("inputTask");
const button = document.getElementById("button");
const taskList = document.getElementById("taskListContainer");
console.log(button)


button.addEventListener("click",()=>{
    const card = document.createElement("div");
    card.id = "card"
    taskList.appendChild(card);
    console.log("clicked");
    const tasktext = inputTask.value;
    console.log(tasktext);
    const taskUl= document.createElement("ul")
    taskUl.className="taskContent";
    taskUl.id=tasktext;
    taskUl.textContent=tasktext;
    card.appendChild(taskUl);
    const deleteBtn=document.createElement("button")
    deleteBtn.id =tasktext
    
    deleteBtn.className = "btn"
    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener("click",deleteFn)
    // deleteBtn.textContent = deleteBtn.id
    console.dir(deleteBtn)
    taskUl.after(deleteBtn);
    
})

function deleteFn(event){
    console.log("from deleteFn")
    const btn = event.target;
    card = btn.closest("#card")
    console.log(card)
    card.remove();
}