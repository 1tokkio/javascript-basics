
const person = {
    namae: 'tired',
    surname: 'life',
    age: 'seventeen',
    direction: {
        city: 'osaka',
        region: 'kansai',
        island: 'honshu',
    }
}

const person2 = { ...person };
person2.namae = 'tachiyomi';
person2.age = 'eightteen';
person2.surname = 'manga';

console.log(person);
console.log(person2);




