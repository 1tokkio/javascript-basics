
import heroes, {owners} from '../data/heroes';

// console.log(owners);

// const getHeroeId = (id) => {
//     return heroes.find((heroes) => {
//         if (heroes.id === id) {
//             return true;
//         } else {
//             false
//         }
//     });
// }

export const getHeroeId = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroeId(3));

export const getHeroesOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesOwner('Marvel'));


