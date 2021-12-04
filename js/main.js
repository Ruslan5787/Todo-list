import { uiElements } from './view.js'


function addTask(elem, list) {
   let inputTodo = elem.target.querySelector('.todo__input')
   if (!(inputTodo.value === '')) {
      list.innerHTML += `<div class="todo__item">
                           <div class="checkbox">
                              <div class="todo__checkbox"></div>
                           </div>
                           <p class="todo__text">${inputTodo.value}</p>
                           <button class="todo__btnclose"><img src="img/close-icon.png" alt=""></button>
                        </div>`
      inputTodo.value = ''
   } else {
      showAlert()
   }
   elem.preventDefault()
}
function showAlert() {
   uiElements.alert.style.opacity = '1'
   setTimeout(() => {
      uiElements.alert.style.opacity = '0'
   }, 1500);
}
uiElements.formHigh.addEventListener('submit', e => {
   addTask(e, uiElements.todoListHigh)
})
uiElements.formLow.addEventListener('submit', e => {
   addTask(e, uiElements.todoListLow)
})


function deleteTask(elem) {
   let btnClose = elem.target.closest('.todo__btnclose')
   if (btnClose) {
      btnClose.closest('.todo__item').remove()
   }
}

function markTask(elem) {
   let checkbox = elem.target.classList.contains('todo__checkbox')
   if (checkbox) {
      elem.target.classList.toggle('_active')
      if (elem.target.classList.contains('_active')) {
         let itemList = elem.target.closest('.todo__item')
         itemList.style.backgroundColor = '#F4F4F4'
      } else {
         let itemList = elem.target.closest('.todo__item')
         itemList.style.backgroundColor = ''
      }
   }
}
window.addEventListener('click', e => {
   deleteTask(e)
   markTask(e)
})


// const arr = [
//    {
//       id: 1,
//       name: 'create a post',
//       status: 'TODO',
//       priority: 'low',
//    },
//    {
//       id: 2,
//       name: 'test',
//       status: 'Done',
//       priority: 'high'
//    }
// ]
// // -------------------------------------------------
// function addTask(name, status, priority) {
//    arr.push({
//       id: arr.length + 1,
//       name,
//       status,
//       priority
//    })
// }
// function deleteTask(name) {
//    arr.forEach((e, i) => {
//       if (e.name === name) {
//          arr.splice(i, 1)
//       }
//    })
// }
// function changeStatus(name, status) {
//    arr.forEach((e, i) => {
//       if (e.name == name) {
//          e.status = status
//       }
//    })
// }
// function changeId() {
//    arr.forEach((e, i) => {
//       e.id = i + 1
//    })
// }