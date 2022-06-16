// Função para encontrar a string de prefixo comum mais longa entre uma matriz de strings.

var longestCommonPrefix = function(words) {
  if (!words[0] || words.length ==  1) return words[0] || ""; // Verificação se existe mais de uma palavra no Array
  let i = 0; // Variável de recorte
  while(words[0][i] && words.every((w) => w[i] === words[0][i])){ // Condição que só vai permanecer enquanto o prefixo da primeira palavra for igual ao prefixo das demais palavras do array
    i++;
  }
  return words[0].substr(0, i); // Retorna o prefixo baseado na variável de recorte
};
