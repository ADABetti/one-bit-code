const dayjs = require("dayjs");

function birthday(date) {
  const today = dayjs();
  const birthday = dayjs(date);

  const ageInYears = today.diff(birthday, "y");

  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysForNextBirthday = nextBirthday.diff(today, "day");

  console.log(`You are ${ageInYears} years old.`);
  console.log(`Your next birthday is ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Your next birthday is in ${daysForNextBirthday} days.`);
}

birthday("1995-04-30");
