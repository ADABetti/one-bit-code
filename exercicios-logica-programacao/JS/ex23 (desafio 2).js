function retornarConceito(nota) {
  switch (Math.round(nota)) {
    case 10:
      return "A+";

    case 9:
      return "A";

    case 8:
      return "B+";

    case 7:
      return "B";

    case 6:
      return "C+";

    case 5:
      return "C";

    case 4:
      return "D+";

    case 3:
      return "D";

    case 2:
      return "E+";

    case 1:
      return "E";

    case 0:
      return "F";

    default:
      return null;
  }
}

console.log(retornarConceito(10));
console.log(retornarConceito(9));
console.log(retornarConceito(5));
console.log(retornarConceito(0));
console.log(retornarConceito(4.6));
console.log(retornarConceito(4.2));
console.log(retornarConceito(4.1));
console.log(retornarConceito("laura"));
