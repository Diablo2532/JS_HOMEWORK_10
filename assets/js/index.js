
function getDivider(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError("Обидва аргументи мають бути цілими числами");
  }

  if (a === 0 && b === 0) {
    throw new RangeError("Не можна знайти НСД двох нулів");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) {
    return a;
  }

  return getDivider(b, a % b);
}

try {
  console.log(getDivider(45, 15)); 
  console.log(getDivider(24, 15)); 
  console.log(getDivider(24, 23)); 
} catch (error) {
  console.log("Помилка:", error.message);
}


function getDivider(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError("Обидва аргументи мають бути цілими числами");
  }

  if (a === 0 && b === 0) {
    throw new RangeError("Не можна знайти НСД двох нулів");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

try {
  console.log(getDivider(45, 15));   
  console.log(getDivider(24, 15));   
  console.log(getDivider(24, 23));   
  console.log(getDivider(-24, 15));  

  console.log(getDivider(5.5, 2));   // помилка: не цілі числа
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}