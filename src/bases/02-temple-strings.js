
const namae = 'tired';
const surname = 'life';

//const completeName = namae + ' ' + surname;
const completeName = ` ${ namae } ${ surname } `;

console.log( completeName );

function getGreeting(namae) {
    return `hi ` + namae;
}

console.log( `this is a greeting: ${getGreeting(namae)} `);


