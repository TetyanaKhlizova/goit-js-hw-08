
 import throttle from 'lodash/throttle';

//   Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
//  При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
//  При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
//  Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

const refs = {
    form: document.querySelector('.feedback-form'), 
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input',  throttle(onTextAreaInput,500));

populateTextarea();
populateEmail();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset(); 
    localStorage.removeItem('feedback-msg');
    localStorage.removeItem('feedback-email');
    
}
function onEmailInput(e) {
    const eMail = e.target.value;
    localStorage.setItem('feedback-email', eMail);
}
function populateEmail() {
    const savedEmail = localStorage.getItem('feedback-email');

    if (savedEmail) {
        console.log(savedEmail);
        refs.input.value = savedEmail;
    }
}

function onTextAreaInput(e) {
    const message = e.target.value;
    localStorage.setItem('feedback-msg', message);
}
function populateTextarea() {
    const savedMsg = localStorage.getItem('feedback-msg');

    if (savedMsg) {
        console.log(savedMsg);
        refs.textarea.value = savedMsg;
    }
    
}




// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }












// const form = document.querySelector('.feedback-form');

// const LOCAL_KEY = 'feedback-form-state';

// addLocalData();

// const formValues = {
//   email: form.email.value,
//   message: form.message.value,
// };

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);

// function onFormInput({ target: { name, value } }) {
//   formValues[name] = value;
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formValues));
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   const submittedData = {
//     email: event.currentTarget.email.value,
//     message: event.currentTarget.message.value,
//   };

//   if (submittedData.email === '' || submittedData.message === '') {
//     alert('Please fill all fields!');
//     return;
//   }

//   console.log(submittedData);

//   localStorage.removeItem(LOCAL_KEY);
//   form.reset();
// }

// function addLocalData() {
//   const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

//   if (!localData) return;

//   if (localData.email) form.email.value = localData.email;
//   if (localData.message) form.message.value = localData.message;
// }