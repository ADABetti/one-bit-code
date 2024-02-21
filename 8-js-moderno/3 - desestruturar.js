const person = {
  name: "Alice",
  job: "farmer",
  parents: ["Jhon", "Rita"],
};

const name = person.name;
const { job, parents } = person;
console.log(name, job, parents);

const [father, mother] = parents;
console.log(parents);

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const alice = createUser(person);
console.log(alice);
