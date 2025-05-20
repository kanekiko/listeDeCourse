'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const pushButton = document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
      alert("Entrer un élément à ajouter à votre liste de course.");
    }
  }
})

