const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);//tornei a data um objeto do dayjs.
  const today = dayjs();
  const ageInYears = today.diff(birthday, "y");

  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const formatDate = nextBirthday.format("DD/MM/YYYY");
  const daysForNextBirthday = nextBirthday.diff(today, "day");

  console.log(`Idade: ${ageInYears}`);
  console.log(`Next birthday: ${formatDate}`);
  console.log(`Faltam ${daysForNextBirthday} dias para seu próximo aniversário.`);
}

birthday("1991-06-29");
