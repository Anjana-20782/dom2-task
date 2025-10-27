let Todo=[];

document.getElementById("add").addEventListener('click',()=>{
    let task = document.getElementById("task").value;
    if(task=="")
        return alert("Enter your task name")
    Todo.push(task)
    document.getElementById("task").value="";
    display()
})

function display(){
    let str =``;
    for(const[index,task] of Todo.entries()){
        str+= `
        <tr>
            <td>${index+1}</td>
            <td>${task}</td>
            <td><button id="edit">Edit</button></td>
            <td><button id="delete" onclick="deleteTask(${index})">Delete</button></td>
        </tr>
        ` 
    }
    document.getElementById("display").innerHTML=str
}
function deleteTask(index){
    let task = Todo[index];
    if(confirm(`Are you sure "${index+1} ,${task}" want to delete?`)){
        // Todo.splice(index,1);
        Todo=Todo.filter((task,i)=> i!==index)
        display()
    }
}