import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';


export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() =>  getHeroesById(heroeId), [heroeId]);

    
    
   

    if (!hero){
        return <Redirect to="/" />;
    }


    const handleReturn = ()=>{
        if (history.length<=2){
            history.push('/')
        }else{
            history.goBack();
        }
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} =  hero;
        
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`}
                className="img-thumbnail animate__animated animate__fadeInLeft animate__faster"
                alt={superhero}></img>
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i> Alter ego: </i> {alter_ego}</li>
                    <li className="list-group-item"><i> Publisher: </i> {publisher}</li>
                    <li className="list-group-item"><i> First Appearance: </i> {first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info"
                        onClick={handleReturn}>
                    Return
                </button>
            </div>
            
        </div>
    )
}
