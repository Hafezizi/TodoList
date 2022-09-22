document.addEventListener('DOMContentLoaded', function(){
    let addToDoButton = document.getElementById('addToDo');
    let ToDoContainer = document.getElementById ('toDoContainer');
    let inputField =document.getElementById('inputField');
    addToDoButton.addEventListener('click', function(){
    var para = document.createElement('p');
    var icon = document.createElement('button');
    var div  = document.createElement('div'); 

    icon.innerHTML = "<small>supprimer</small>";
    icon.setAttribute('class', 'btn btn-red')
    div.appendChild(icon);
    div.setAttribute('class','item');
    document.body.appendChild(div)
    
   para.innerText = inputField.value;  
   div.appendChild(para)

    ToDoContainer.appendChild(div);
    

    para.addEventListener('click', function(){
        para.style.textDecoration='line-through';
    })
    icon.addEventListener('click',function(){
        ToDoContainer.removeChild(div)
    })
})


})
