
 import throttle from 'lodash/throttle';

//   Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
//  При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
//  При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
//  Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
const formData = {};
const LOC_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'), 
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.input.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));
 function onFormInput({ name, value }) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOC_KEY, JSON.stringify(formValues));
    
};





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
    
    };




