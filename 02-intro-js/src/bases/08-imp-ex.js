import heroes, { owners } from '../data/heroes'

console.log(heroes)
console.log(owners)


//find
export const getHeroesById = (id) => {
    return heroes.find(element => element.id === id)
}

console.log( getHeroesById(2) )


//filter
export const getHeroesByOwner = ( owner ) => heroes.filter(element => element.owner === owner)

console.log( getHeroesByOwner('DC'))

