const text = "Ab;:.!baa";

const esPalindromo = text => {
  const textPreparadoCheck = text.toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const textReversed = textPreparadoCheck.split("")
    .reverse()
    .join("");

  return textPreparadoCheck === textReversed;
};

console.log(esPalindromo(text));
