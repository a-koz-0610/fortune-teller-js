class FortuneTeller {
  constructor(
    firstName,
    lastName,
    age,
    birthMonth,
    favoriteColor,
    numSiblings
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthMonth = birthMonth;
    this.favoriteColor = favoriteColor;
    this.numSiblings = numSiblings;
  }

  calculateRetirementAge() {
    let retirementAge;
    if (this.age % 2 == 0) {
      retirementAge = '60 years';
    } else {
      retirementAge = '65 years';
    }
    return retirementAge;
  }

  determineVacationHome() {
    let vacationHome;
    if (this.numSiblings === '0') {
      vacationHome = 'Myrtle Beach';
    } else if (this.numSiblings === '1') {
      vacationHome = 'Virginia Beach';
    } else if (this.numSiblings === '2') {
      vacationHome = 'Miami';
    } else if (this.numSiblings === '3') {
      vacationHome = 'Banff';
    } else {
      vacationHome = 'Portland';
    }
    return vacationHome;
  }

  determineModeOfTransport() {
    let transport;
    if (this.favoriteColor.toLowerCase() === 'red') {
      transport = 'mustang';
    } else if (this.favoriteColor.toLowerCase() === 'orange') {
      transport = 'charger';
    } else if (this.favoriteColor.toLowerCase() === 'yellow') {
      transport = 'school bus';
    } else if (this.favoriteColor.toLowerCase() === 'green') {
      transport = 'tesla';
    } else if (this.favoriteColor.toLowerCase() === 'blue') {
      transport = 'corvette';
    } else if (this.favoriteColor.toLowerCase() === 'indigo') {
      transport = 'helicopter';
    } else {
      transport = 'hot air balloon';
    }
    return transport;
  }

  determineBankBalance() {
    let bankBalance;
    if (this.birthMonth >= 1 && this.birthMonth <= 4) {
      bankBalance = '$1,000,000';
    } else if (this.birthMonth >= 5 && this.birthMonth <= 8) {
      bankBalance = '$100,000';
    } else {
      bankBalance = '$1,000';
    }
    return bankBalance;
  }
}

export default FortuneTeller;
