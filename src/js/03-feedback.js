import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const userInfo = {};
const STORAGE_KEY = 'feedback-form-state';

fillFeedbackFormFields();

feedbackFormEl.addEventListener(
  'input',
  throttle(onFeedbackFormFieldChange, 500)
);

feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormFieldChange(e) {
  const { target } = e;

  const name = target.name;
  const value = target.value;

  userInfo[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
}

function onFeedbackFormSubmit(event) {
  console.log(userInfo);
  event.preventDefault();

  feedbackFormEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillFeedbackFormFields() {
  try {
    const userInfoFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (userInfoFromLS === null) {
      return;
    }

    for (const prop in userInfoFromLS) {
      feedbackFormEl.elements[prop].value = userInfoFromLS[prop];
    }
  } catch (err) {
    console.log(err);
  }
}
