const inputTask = document.getElementById("inputTask");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskListContainer");
const nonTask = document.getElementById("nonTask")
console.log(button);

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(inputTask.value);
    // inputTask.value = ""; 
});

function addTask(taskText){
    if(!taskText)return;

    // タスクカードの作成
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

     // タスク内容の表示
    const taskContent = document.createElement("p");
    taskContent.classList.add("task-content");
    taskContent.textContent = taskText;
    taskCard.appendChild(taskContent);

    // 削除ボタンの作成
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => deleteTask(taskCard));

    taskCard.appendChild(deleteButton);
    taskListContainer.appendChild(taskCard);
    nonTask.style.display="none"
}

function deleteTask(taskCard){
    taskCard.remove();
    const allTaskCard = document.querySelectorAll(".task-card");
    if(allTaskCard.length===0){
        nonTask.style.display="flex"
    }
}