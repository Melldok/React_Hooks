

import {getHeroById} from './base/imp_exp'

// const promised = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(2)
//         resolve(hero);
//     }, 2000);
// });

// promised.then((hero) => {
//     console.log('hero', hero)
// })
// .catch(err => console.log(err))





const getHerobyIdAsync = (id) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero){
                resolve(hero);
            }else{
                reject("This hero doesn't exist")
            }
        }, 2000);
    });
}


// getHerobyIdAsync(10)
//     .then(hero => console.log('hero', hero))
//     .catch(err => console.warn(err))

getHerobyIdAsync(2)
    .then(console.log)
    .catch(console.warn)