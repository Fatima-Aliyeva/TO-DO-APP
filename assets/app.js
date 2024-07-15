const myDiv = document.querySelector(".container");
const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const tasklar = document.querySelector(".tasklar");
/* const deletebtn = document.querySelector(".deletebtn");
const editbtnbtn = document.querySelector(".editbtn"); */

const todoArr = [];

function TodoyaElaveEt() {
  let value = input.value;
  if (value.length === 0) {
    console("Zehmet olmasa todonuzu yazin");
  } else {
    todoArr.push(value);
    render();
    console.log(todoArr);
  }
}

function render() {
  tasklar.innerHTML = "";
  todoArr.forEach((item) => {
    tasklar.innerHTML += `
    <div class="task">
  <span>${item}</span>
          <button class="deletebtn"><i class="fa-solid fa-trash"></i></button>
          <button class="editbtn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
    `;
  });
  deleteItem();
  editItem();
}

function deleteItem() {
  let deleteBtns = document.querySelectorAll(".deletebtn");
  deleteBtns.forEach((btn, index) =>
    btn.addEventListener("click", function () {
      todoArr.splice(index, 1);
      render();
    })
  );
}

function editItem() {
  let editBtns = document.querySelectorAll(".editbtn");
  editBtns.forEach((btn, index) =>
    btn.addEventListener("click", function () {
      let taskElement = btn.parentNode.querySelector("span");
      taskElement.contentEditable = true;
      taskElement.focus();
      taskElement.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          taskElement.contentEditable = false;
          todoArr[index] = taskElement.textContent;
          render();
        }
      });
    })
  );
}
btn.addEventListener("click", TodoyaElaveEt);
