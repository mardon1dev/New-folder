// 1-topshriq
const number = [11111,1,];
const oddNums = [];

const oddNum = function (nums) {
    for (const item of nums) {
        if (item % 2 == 1){
            oddNums.push(item);
        }
    }
}

const oddSum = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        console.log(num);
        sum += num;
    }
    return sum;
}

oddNum(number);
console.log(oddSum(oddNums));

// 2-topshriq

const toDo = document.querySelector(".todo-main");
const insert = document.querySelector(".insert");
const tap = document.querySelector(".tap");
const toDoSpan = document.querySelector(".todo-span");


toDo.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!insert.value){
        toDoSpan.innerText = ("Please write something you wanna to do");
        insert.classList = ("insert-red");
    }else{
        toDoSpan.innerText = ("");
        insert.classList = ("insert-green");
    };

    if(!insert.value){

    }
    else{
        const div = document.querySelector(".box");

    const toDoList = document.createElement("div");
    toDoList.classList = ("todo-list");

    const toDoSpan1 = document.createElement('span');
    toDoSpan1.innerText = insert.value;
    toDoSpan1.classList.add('todo-list--span');
    toDoList.appendChild(toDoSpan1);

    const toDoImageWrapper = document.createElement("div");
    toDoImageWrapper.classList.add("todo-wrapper")
    toDoList.appendChild(toDoImageWrapper);

    const toDoImage = document.createElement("img");
    toDoImage.src = './delete.jpg';
    toDoImage.alt = 'delete';
    toDoImage.classList.add('todo--image');
    toDoImageWrapper.appendChild(toDoImage);

    toDoImageWrapper.onclick = function(){
        div.removeChild(toDoList);
    }

    div.appendChild(toDoList);
    }
})