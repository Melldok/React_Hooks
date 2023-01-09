import { HeroList } from "../components/HeroList"


export const MarvelPage = () => {
  return (
    <>
        <h1>Marvel Comics</h1>
        <hr />

        {/* publisher sent as props to filter the search */}
        <HeroList publisher={'Marvel Comics'}/>
    </>
  
  )
}
