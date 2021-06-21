import FortuneTeller from './FortuneTeller';

const firstName = document.querySelector('.userInput__firstName'),
  lastName = document.querySelector('.userInput__lastName'),
  age = document.querySelector('.userInput__age'),
  birthMonth = document.querySelector('.userInput__birthMonth'),
  favoriteColor = document.querySelector('.userInput__favoriteColor'),
  numSiblings = document.querySelector('.userInput__numSiblings'),
  submitBtn = document.querySelector('.userInput__submit');

submitBtn.addEventListener('click', () => {
  const user = new FortuneTeller(
    firstName.value,
    lastName.value,
    age.value,
    birthMonth.value,
    favoriteColor.value,
    numSiblings.value
  );
  const fortuneContainer = document.querySelector('.fortune__container');
  fortuneContainer.classList = 'display__fortuneContainer';
  const userInputContainer = document.querySelector('.userInput__container');
  userInputContainer.classList = 'hide__userInputContainer';
  const fortuneHeader = document.createElement('h2');
  fortuneHeader.innerText = 'Your Fortune';
  fortuneHeader.classList = '.displayFortune__header';
  fortuneContainer.appendChild(fortuneHeader);

  const fortunePara = document.createElement('p');
  fortunePara.innerText =
    user.firstName +
    ' ' +
    user.lastName +
    ' will retire at ' +
    user.calculateRetirementAge() +
    ' with a vacation home in ' +
    user.determineVacationHome() +
    ' will travel by ' +
    user.determineModeOfTransport() +
    ' and will have ' +
    user.determineBankBalance();
  fortuneContainer.appendChild(fortunePara);
});
