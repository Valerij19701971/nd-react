// import DogSquare from './DogSquare';

// // Dog data lives here
// const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

// export default function DogList1() {
//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {dogs.map((dog, i) => (
//                 <DogSquare key={i} dog={dog} />
//             ))}
//         </div>
//     );
// }
import './DogSquare.css';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList1() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dogs.map((dog, index) => (
                <div key={index} className="dog-square">
                    {dog}
                </div>
            ))}
        </div>
    );
}

