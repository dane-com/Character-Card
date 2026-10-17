import propTypes from 'prop-types';
import  './character-card.css'


function CharacterCard(props){

let hpDisplay;
let displayStatus;
let displayDamage
    if(props.hp === 100){
         hpDisplay = <p>{props.hp} (Max Health)</p>
         
    }
    else if(props.hp >= 55){
         hpDisplay = <p>{props.hp} (Health is normal)</p>
         
        
    }
    
    else if(props.hp >= 35){
        hpDisplay =  <p>{props.hp} (Health is critical)</p>
        
    }
    
    if(props.hp > 100){
        hpDisplay =  <p>{props.hp} (Health is abnormal)</p>
    }


    if (props.hp === 0){
       hpDisplay =  <p>{props.hp} (Dead)</p> 
       displayStatus = "Defeated (Dead)"
    }
    else{
        displayStatus = props.status ? "Alive" : "Dead"
       
    }

   
    if (props.hp === 0){
       displayDamage = null
       
    }
    else{
        
        displayDamage = <p>Damage: {props.damage}</p>
    }
   
    
    return(
        


            <div className="cards">

               
                <img className="card-image" src={props.image} alt={props.name}></img>

                <h2>Name: {props.name}</h2>

                <h1>{props.isBoss ? "BOSS" : null}</h1>

                <p>Type: {props.type}</p>

                <p>Level: {props.level}</p>

                <p>HP: {hpDisplay}</p>
                
                {displayDamage}

                <p>Status: {displayStatus}</p>

            </div>
    
            
    );  
}
CharacterCard.propTypes = {
    name: propTypes.string,
    hp: propTypes.number,
    type: propTypes.string,
    level:propTypes.number,
    status:propTypes.bool,
    image:propTypes.string,
    damage:propTypes.number

}


export default CharacterCard
