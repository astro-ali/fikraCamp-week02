const input = document.querySelector("#input")
const todolist = document.querySelector(".to-do-list")
const button = document.querySelector("#my-btn")

button.addEventListener("click", () => {
    if(input.value.length < 0){
        return;
    }
    if(input.value.length === 0){
        alert("please do not leave the input field empty")
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        todolist.append(li);
        input.value = "";
    }
});

const rendrTodo = () => {

}

// add local storage

// add delete button 

// make it a form 

// display the form input values on the console when the user click the submit button