const submitBtn = document.querySelector('.submit');
const input = document.querySelector('.input');
const todo = document.querySelector('.todo_list');
const totalItem = document.querySelector('.pending_tasks');






window.onload = function(){
    showTasks();
    changeTotal();
};





submitBtn.addEventListener('click', function(){
    let userData = input.value;
    if(userData.trim().length != 0){
        let getlocalStorage = localStorage.getItem('new todo');
        if(getlocalStorage == null){
            listArray = [];
        }else{
            listArray = JSON.parse(getlocalStorage);
        };
        listArray.push(userData);
        localStorage.setItem('new todo', JSON.stringify(listArray));
        showTasks();
        changeTotal();
    };
});



function showTasks(){
    let getlocalStorage = localStorage.getItem('new todo');
    if(getlocalStorage == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getlocalStorage);
    };

    let newliTask = '';
    listArray.forEach((element, index) => {
        newliTask += `<li>${element}<span onclick = "deletelist(${index});"><i class="fas fa-trash"></i></span></li>`;
    });

    todo.innerHTML = newliTask;
    input.value = ``;

};


function deletelist(index){
    let getlocalStorage = localStorage.getItem('new todo');
    listArray = JSON.parse(getlocalStorage);
    listArray.splice(index, 1);
    localStorage.setItem('new todo', JSON.stringify(listArray));
    showTasks();
    changeTotal();
};





function clearAll(){
    window.localStorage.clear();
    window.location.reload();
}


function changeTotal(){
    let getlocalStorage = localStorage.getItem('new todo');

    if(getlocalStorage != '[]'){
        totalItem.textContent = getlocalStorage.split(',').length;
    }else{
        totalItem.textContent = 0;
    };   
};



