const tasks = [
    { name: "Task 1", level: 1 },
    { name: "Subtask 1.1", level: 2 },
    { name: "Subtask 1.2", level: 2 },
    { name: "Sub-subtask 1.2.1", level: 3 },
    { name: "Task 2", level: 1 },
    { name: "Subtask 2.1", level: 2 }
];

function makeTaskList(tasks) {
    for(task of tasks){
        let indent = ""
        switch(task.level){
            case 1:
                indent = "";
                break;
            case 2:
                indent = "-";
                break;
            case 3:
                indent="--";
                break;
            default:
                indent ="--";
                break;
        }
        console.log(indent+task.name);
    }
}

makeTaskList(tasks);