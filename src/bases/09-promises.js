
import { getHeroeId, getHeroesOwner } from './bases/08-import-exp';

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeId(2);
//         // resolve();
//         // reject(heroe);
//         reject('no se puedo encontrar el heroe');
//     }, 2000);
// });

// promise.then((heroe) => {
//     console.log('heroe', heroe);
// })

//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeId(id);
            if (p1) {
                resolve(p1); 
            } else {
                reject('no existe ese heroe');
            }
            
            
        }, 2000)
    });

})

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);






