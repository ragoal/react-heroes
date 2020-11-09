import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';


export const HeroScreen = () => {

    const {heroeId} = useParams();

    const hero = getHeroesById(heroeId);
    
   

    if (!hero){
        return <Redirect to="/" />;
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} =  hero;
        console.log(superhero)
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`}
                className="img-thumbnail"
                alt={superhero}></img>
            </div>
            <div className="col-8">
                <h3>{superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <i> Alter ego: </i> {alter_ego}
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
