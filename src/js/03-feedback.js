import storageAPI from './storage';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const feedbackFormEmailEl = document.querySelector('[name="email"]');
const feedbackFormMessageEl = document.querySelector('[name="message"]');

feedbackFormEmailEl.required = true;
feedbackFormMessageEl.required = true;

const STORAGE_KEY = 'feedback-form-state';

populateFormFields();

feedbackFormEl.addEventListener('input', throttle(onFormFieldChange, 500));

feedbackFormEl.addEventListener('submit', onFormSubmit);

function onFormFieldChange(e) {
  const { name, value } = e.target;

  const userInfo = storageAPI.load(STORAGE_KEY) ?? {};
  userInfo[name] = value;

  storageAPI.save(STORAGE_KEY, userInfo);
}

function onFormSubmit(event) {
  event.preventDefault();
  const userData = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  console.log(userData);
  storageAPI.remove(STORAGE_KEY);
  feedbackFormEl.reset();
}

function populateFormFields() {
  const saveData = storageAPI.load(STORAGE_KEY);

  if (!saveData) {
    return;
  }

  Object.entries(saveData).forEach(([name, value]) => {
    feedbackFormEl.elements[name].value = value;
  });
}
