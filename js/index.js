'use strict'
window.addEventListener('load', function () {
  const pushButton = document.querySelector('#push').onclick = function () {
    const newTaskInput = document.querySelector('#newtask input');
    const tasksContainer = document.querySelector('#tasks');
    if (newTaskInput.value.trim().length === 0) {
      alert("Entrer un élément à ajouter à votre liste de course.");
    } else {
      tasksContainer.innerHTML += `
      <div class="task"> <span id="taskname"> ${newTaskInput.value} </span>
      <button class="delete">
        <ion-icon name="trash-outline"></ion-icon>
      </button> 
      </div>`;
      let deleteButtons = document.querySelectorAll('.delete');
      for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function () {
          this.parentNode.remove();
        }
        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
          tasks[i].onclick = function () {
            this.classList.toggle('completed');
          }
        }
      }
      newTaskInput.value = "";
    }

  }
})

