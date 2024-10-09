function calcFibonacci(number) {
  let fibo = [0, 1];

  while (fibo[fibo.length - 1] < number) {
    let nextFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(nextFibo);
  }

  const isNumberPresent = fibo.includes(number);

  if (isNumberPresent) {
    console.log("Número faz parte da sequencia de fibonacci");
  } else {
    console.log("Número não faz parte da sequência de fibonacci");
  }
}

calcFibonacci(5);
