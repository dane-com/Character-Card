import CharacterCard from './character-card.jsx'
import Knight from './assets/knight.png'
import Mage from './assets/mage.png'
import Archer from './assets/marksman.png'
import Tank from './assets/tank.png'

function App() {

   const characters = [
      {
        id: 1,
        name: "Oscar",
        type: "Knight",
        level: 1,
        hp: 0,
        damage: 300,
        image: Knight,
        status: true,
        isBoss: true

      },
      {
        id: 2,
        name: "Valentina",
        type: "Knight",
        level: 20,
        hp: 60,
        damage: 2000,
        image: Mage,
        status: true,
        isBoss: false

      },
      {
        id: 3,
        name: "Kardel",
        type: "Marksman",
        level: 50,
        hp: 100,
        damage: 400,
        image: Archer,
        status: true,
        isBoss: false

      },
      {
        id: 4,
        name: "Xenomorph",
        type: "Tank",
        level: 20,
        hp: 1000,
        damage: 3,
        image: Tank,
        status: true,
        isBoss: false

      }
    ]

  return(
    characters.map((character)=> {
      return (
        <CharacterCard 
              key={character.id}
              name={character.name}
              type={character.type}
              level={character.level}
              hp={character.hp}
              damage={character.damage}
              image={character.image}
              status={character.status}
              isBoss={character.isBoss}
        
        />
      );
        

    })
  );
 
}

export default App
