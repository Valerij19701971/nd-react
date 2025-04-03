import DogSquare from './DogSquare';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList4() {
    
    const filteredDogs = dogs.filter(dog => dog[0] !== dog[0].toUpperCase());

    const mapResult = filteredDogs.map((dog, i) => (
        <DogSquare key={i} dog={dog} color="#B6E2A1" />
    ));

    // return (
    //     <div style={{ display: 'flex', flexWrap: 'wrap' }}
    //     >
    //         {filteredDogs.map((dog, i) => (
    //             <DogSquare key={i} dog={dog} color="#B6E2A1" />
    //         ))}

    //     </div>
    // );

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}
        >
            {mapResult}

        </div>
    );
}