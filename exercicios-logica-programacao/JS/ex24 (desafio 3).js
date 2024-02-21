function calcularMedia(nota1, nota2, nota3) {
  let primeiraMaior = 0;
  let menorNota = 0;
  let segundaMaior = 0;
  if (nota1 > nota2) {
    primeiraMaior = nota1;
    menorNota = nota2;
  } else {
    primeiraMaior = nota2;
    menorNota = nota1;
  }

  if (nota3 > menorNota) {
    segundaMaior = nota3;
  } else {
    segundaMaior = menorNota;
  }

  let media = 0;
  media = (primeiraMaior + segundaMaior) / 2;

  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

// Outra resolução

const nota1 = 4;
const nota2 = 2;
const nota3 = 2;

function retornarMinimo(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
  const menorNota = retornarMinimo(n1, retornarMinimo(n2, n3));

  if (n1 === menorNota) {
    return (n2 + n3) / 2;
  } else if (n2 === menorNota) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

function retornarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

const mediaDasMaioresNotas = media(nota1, nota2, nota3);
console.log(retornarSituacao(mediaDasMaioresNotas));
