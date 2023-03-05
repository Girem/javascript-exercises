const findTheOldest = function (people) {
  function getAge(person) {
    const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    return yearOfDeath - person.yearOfBirth;
  }
  const currentYear = new Date().getFullYear();

  const oldestPerson = people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);

    if (currentAge > oldestAge) {
      return current;
    } else {
      return oldest;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
