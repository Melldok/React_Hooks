import { Link } from "react-router-dom"

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters, }) => {

  // id is a prop containing the heroe name, which at the same time is the name of its image {id: 'dc-batman', superhero: 'Batman', publisher: 'DC Comics', alter_ego: 'Bruce Wayne', first_appearance: 'Detective Comics}

  const heroImageUrl = `assets/heroes/${id}.jpg`

  

  return (
    
    <div className="col animate__animated animate__fadeIn">
      <div className="card ">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                ( alter_ego !== characters ) && ( <p> {characters} </p> )
              }

             <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
             </p>
              {/* with this id we are sending props that we will use as params on the hero page */}
              <Link className="text-danger" to={`/hero/${id}`} >
                More info
              </Link>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
