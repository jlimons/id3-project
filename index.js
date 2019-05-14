var ID3A = require('./id3-algorithm');

let test = new ID3A({
  titles: ['Cielo', 'Temperatura', 'Humedad', 'Viento'],
  data: [
    ['Sol', 'Sol', 'Nubes', 'Lluvia', 'Lluvia', 'Lluvia', 'Nubes', 'Sol', 'Sol', 'Lluvia', 'Sol', 'Nubes', 'Nubes', 'Lluvia'],
    ['Alta', 'Alta', 'Alta', 'Suave', 'Baja', 'Baja', 'Baja', 'Suave', 'Baja', 'Suave', 'Suave', 'Suave', 'Alta', 'Suave'],
    ['Alta', 'Alta', 'Alta', 'Alta', 'Normal', 'Normal', 'Normal', 'Alta', 'Normal', 'Normal', 'Normal', 'Alta', 'Normal', 'Alta'],
    ['Débil', 'Fuerte', 'Débil', 'Débil', 'Débil', 'Fuerte', 'Fuerte', 'Débil', 'Débil', 'Débil', 'Fuerte', 'Fuerte', 'Débil', 'Fuerte']
  ],
  classes: ['No', 'No', 'Sí', 'Sí', 'Sí', 'No', 'Sí', 'No', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'No']
});

// let res = test.getTree();
// console.log(res);

console.log('------------------------------------------');
console.log('--------------ÁRBOL OBTENIDO--------------');
console.log('------------------------------------------');

console.log(test.getRules());