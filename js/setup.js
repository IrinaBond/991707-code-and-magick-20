'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: getRandomElement(names) + ' ' + getRandomElement(surnames),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  },
  {
    name: getRandomElement(names) + ' ' + getRandomElement(surnames),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  },
  {
    name: getRandomElement(names) + ' ' + getRandomElement(surnames),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  },
  {
    name: getRandomElement(names) + ' ' + getRandomElement(surnames),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
