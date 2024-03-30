const task=document.getElementById("task");
const inputbox=document.getElementById("taskInput");
const listcontainer1=document.getElementById("list-container-1");
const dueDate=document.getElementById("taskDeadline");
const listcontainer2=document.getElementById("list-container-2");
const priority=document.getElementById("priority");
const listcontainer3=document.getElementById("list-container-3");

function addtask(){
    if(inputbox.value=='')
    {
        alert("You must write something");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer1.appendChild(li);

        li=document.createElement("li");
        if(dueDate.vaue=!'')
        {
       
            li.innerHTML=dueDate.value;
            listcontainer2.appendChild(li);
        }
      
        li=document.createElement("li");
        li.innerHTML=priority.value;
        listcontainer3.appendChild(li);

        // let span=document.createElement("span");
        // span.innerHTML = "\u00d7"
        // li.appendChild(span);
        
    }
    inputbox.value='';
    saveData()
}

listcontainer1.addEventListener("click",function(e){
    if(e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName=="SPAN")
    {
        listcontainer1.remove();
        listcontainer2.remove();
        listcontainer3.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data1",listcontainer1.innerHTML);
    localStorage.setItem("data2",listcontainer2.innerHTML);
    localStorage.setItem("data3",listcontainer3.innerHTML);
}
function showTask(){
    listcontainer1.innerHTML = localStorage.getItem("data1");
    listcontainer2.innerHTML = localStorage.getItem("data2");
    listcontainer3.innerHTML = localStorage.getItem("data3");
    // btn.style.display="block";
}
function deleteAllTask(){
    localStorage.clear();
    location.reload();

}
showTask()