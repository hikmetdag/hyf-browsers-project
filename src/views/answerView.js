'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer');

  element.innerHTML = String.raw`
    <div class="answer-key">${key}</div>
    <div class="answer-text">${answerText}</div>
    <div class="answer-checkmark"></div>
  `;
  return element;
};
