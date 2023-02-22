
const waifus = ['shizuku', 'chiyuki', 'nana'];
const [ , , w1 ] = waifus;
console.log(w1);

const arrayReturn = () => {
    return ['ABC', 123];
}

const [letras, numeros] = arrayReturn();
console.log(letras, numeros);

const statusUse = (value) => {
    return [ value, () => { console.log('hello world') }];

}

const [nombre, setNombre] = statusUse('kiyotaka');

console.log(nombre);
setNombre();



