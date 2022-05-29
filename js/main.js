import { uiElements } from './view.js';

if (localStorage.length) {
  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }
    if (key.slice(0, 1) === 'h') {
      todoListHigh.innerHTML += `<div class="todo__item" id="${key}">
                                    <div class="checkbox">
                                       <div class="todo__checkbox"></div>
                                    </div>
                                    <p class="todo__text">${localStorage.getItem(key)}</p>
                                    <button class="todo__btnclose"><img src="img/close-icon.png" alt=""></button>
                                 </div>`;
    } else {
      todoListLow.innerHTML += `<div class="todo__item" id="${key}">
                                    <div class="checkbox">
                                       <div class="todo__checkbox"></div>
                                    </div>
                                    <p class="todo__text">${localStorage.getItem(key)}</p>
                                    <button class="todo__btnclose"><img src="img/close-icon.png" alt=""></button>
                                 </div>`;
    }
  }
}

function addTask(elem, list) {
  const inputTodo = elem.target.querySelector('.todo__input');
  const listLength = list.children.length;

  if (!(inputTodo.value === '')) {
    if (list.id === 'todoListHigh') {
      list.innerHTML += `<div class="todo__item" id="h${listLength}">
                              <div class="checkbox">
                                 <div class="todo__checkbox"></div>
                              </div>
                              <p class="todo__text">${inputTodo.value}</p>
                              <button class="todo__btnclose"><img src="img/close-icon.png" alt=""></button>
                           </div>`;

      localStorage.setItem(`h${listLength}`, `${inputTodo.value}`);
      inputTodo.value = '';
    } else {
      list.innerHTML += `<div class="todo__item" id="l${listLength}">
                              <div class="checkbox">
                                 <div class="todo__checkbox"></div>
                              </div>
                              <p class="todo__text">${inputTodo.value}</p>
                              <button class="todo__btnclose"><img src="img/close-icon.png" alt=""></button>
                           </div>`;

      localStorage.setItem(`l${listLength}`, `${inputTodo.value}`);
      inputTodo.value = '';
    }
  } else {
    showAlert();
  }

  elem.preventDefault();
}

uiElements.formHigh.addEventListener('submit', e => {
  addTask(e, uiElements.todoListHigh);
});

uiElements.formLow.addEventListener('submit', e => {
  addTask(e, uiElements.todoListLow);
});

function showAlert() {
  uiElements.alert.style.opacity = '1';

  setTimeout(() => {
    uiElements.alert.style.opacity = '0';
  }, 1500);
}

function deconsteTask(elem) {
  const btnClose = elem.target.closest('.todo__btnclose');

  if (btnClose) {
    const idTask = btnClose.closest('.todo__item').id;

    localStorage.removeItem(idTask);

    btnClose.closest('.todo__item').remove();
  }
}

function markTask(elem) {
  const checkbox = elem.target.classList.contains('todo__checkbox');

  if (checkbox) {
    elem.target.classList.toggle('_active');
    if (elem.target.classList.contains('_active')) {
      const itemList = elem.target.closest('.todo__item');

      itemList.style.backgroundColor = '#F4F4F4';
    } else {
      const itemList = elem.target.closest('.todo__item');

      itemList.style.backgroundColor = '';
    }
  }
}

window.addEventListener('click', e => {
  deconsteTask(e);
  markTask(e);
});
