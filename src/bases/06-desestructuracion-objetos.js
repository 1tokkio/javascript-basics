const person = {
    nombre: 'tired',
    age: 'seventeen',
    password: 'nya',
};

const personReturn = ({ password, nombre, age}) => {

    return {
        keyName: nombre,
        years: age,
   }

}

const user00 = personReturn(person);
console.log(user00);