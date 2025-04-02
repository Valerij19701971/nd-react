// import DogSquare from './DogSquare';
// import DogCircle from './DogCircle';

// const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
// console.log(dogs);

// export default function DogList3() {
//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {dogs.map((dog, i) => (
//                 i % 2 === 0
//                     ? <DogSquare key={i} dog={dog} number={i + 1}/>
//                     : <DogCircle key={i} dog={dog} number={i + 1} />
//             ))}
//         </div>
//     );
// }
import DogSquare from './DogSquare';
import DogCircle from './DogCircle';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

console.log(dogs);

export default function DogList3() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dogs.map((dog, index) =>
                index % 2 === 0 ? (
                    <DogSquare key={index} dog={dog} number={index} />
                ) : (
                    <DogCircle key={index} dog={dog} number={index} />
                )
            )}
        </div>
    );
}
