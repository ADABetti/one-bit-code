const user = {
  name: "alice",
  email: "alice.bbb@hotmail.com",
  friends: [
    {
      name: "Let",
      address: {
        street: "Tucuruvi",
        number: 24,
      },
    },
  ],
  age: 12,
  phone: {
    countryCode: "+55",
    ddd: "11",
    number: "34562345",
  },
};

//console.log(user.friends[0].phone.ddd);
console.log(user.friends[0].phone?.ddd);
console.log(user?.friends?.[3]);
