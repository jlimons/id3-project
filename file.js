var fs = require("fs");
var rl = require('readline');

// fs.readFile("./adult.txt", function(err, buf) {
//   console.log(buf.toString());
// });

var lineReader = rl.createInterface({
  input: fs.createReadStream('adult.txt')
});
var lineCounter = 0; 
var lines = [];

var cero = []
var uno = []
var dos = []
var tres = []
var cuatro = []
var cinco = []
var seis = []
var siete = []
var ocho = []
var nueve = []
var diez = []
var once = []
var doce = []
var trece = []
var last = []

lineReader.on('line', function (line) {
  lineCounter++
  lines.push(line)
  if (lineCounter === 22000) {
    lineReader.close()
  }
})

lineReader.on('close', function() {

  lines.forEach(line => {
    let arr = line.split(', ')
    cero.push(arr[0])
    uno.push(arr[1])
    dos.push(arr[2])
    tres.push(arr[3])
    cuatro.push(arr[4])
    cinco.push(arr[5])
    seis.push(arr[6])
    siete.push(arr[7])
    ocho.push(arr[8])
    nueve.push(arr[9])
    diez.push(arr[10])
    once.push(arr[11])
    doce.push(arr[12])
    trece.push(arr[13])
    last.push(arr[14])
  })


  // data: [
  //   ['Sol', 'Sol', 'Nubes', 'Lluvia', 'Lluvia', 'Lluvia', 'Nubes', 'Sol', 'Sol', 'Lluvia', 'Sol', 'Nubes', 'Nubes', 'Lluvia'],
  //   ['Alta', 'Alta', 'Alta', 'Suave', 'Baja', 'Baja', 'Baja', 'Suave', 'Baja', 'Suave', 'Suave', 'Suave', 'Alta', 'Suave'],
  //   ['Alta', 'Alta', 'Alta', 'Alta', 'Normal', 'Normal', 'Normal', 'Alta', 'Normal', 'Normal', 'Normal', 'Alta', 'Normal', 'Alta'],
  //   ['Débil', 'Fuerte', 'Débil', 'Débil', 'Débil', 'Fuerte', 'Fuerte', 'Débil', 'Débil', 'Débil', 'Fuerte', 'Fuerte', 'Débil', 'Fuerte']
  // ],
  // classes: ['No', 'No', 'Sí', 'Sí', 'Sí', 'No', 'Sí', 'No', 'Sí', 'Sí', 'Sí', 'Sí', 'Sí', 'No']

  var ID3A = require('./id3-algorithm');

  let test = new ID3A({
    titles: ['age', 'workclass', 'fnlwgt', 'education', 'education-num', 'marital-status',
            'occupation', 'relationship', 'race', 'sex', 'capital-gain', 'capital-loss',
            'hours-per-week', 'native-country'],
    data: [
      cero,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece
    ],
    classes: last
  });
  
  console.log('------------------------------------------');
  console.log('--------------ÁRBOL OBTENIDO--------------');
  console.log('------------------------------------------');
  
  // console.log(test.getRules());
  console.dir( test.getRules(), {'maxArrayLength': null})
  // console.log('Número de reglas: ', test.getRules().length)
  // console.log( test.getRules(), {'maxArrayLength': null} );

  process.exit(0);

});