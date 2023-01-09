import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    // helper function that filters the data array by publisher (Sent by props)
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;


  return (
    <div className="row rows-cols-1 row-cols-md-2 g-3 ">
        {
            heroes.map(hero => (
               <HeroCard key={ hero.id } 
               // spread operator used to add all the props from the item, instead of writing them one by one
               {...hero}
               /> 
            ))
        }
    </div>
  )
}
