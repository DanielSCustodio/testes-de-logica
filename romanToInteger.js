const romanToInteger = (s) => {
  const values = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  let acc = 0;

  for(i=0; i < s.length; i++){
    if(s[i] === 'I' && s[i+1]=== 'V'){
      acc+= 4; // seta o valor para o acc
      i++;   // avança uma posição no loop do for já que foram usados dois valores consecutivos nessa operação
    }

    else if (s[i] === 'I' && s[i+1]=== 'X'){
      acc+= 9;
      i++;
    }

    else if (s[i] === 'X' && s[i+1]=== 'L'){
      acc+= 40;
      i++;
    }

    else if (s[i] === 'X' && s[i+1]=== 'C'){
      acc+= 90;
      i++;
    }

    else if (s[i] === 'C' && s[i+1]=== 'D'){
      acc+= 400;
      i++;
    }

    else if (s[i] === 'C' && s[i+1]=== 'M'){
      acc+= 900;
      i++;
    }

    else {
      acc+= values[s[i]]; // s[i] retorna o valor atual do loop que está ocorrendo em s
    }                     // sendo s[i] um valor é o mesmo que por exemplo: values.X / values.I
  }                       // sendo values.X(por exemplo) uma propriedade então será acrescido seu valor ao acumulador.

  return acc;
}
