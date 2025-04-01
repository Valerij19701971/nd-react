import DogSquare from './DogSquare';
import DogCircle from './DogCircle';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList3() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dogs.map((dog, i) => (
                i % 2 === 0
                    ? <DogSquare key={i} dog={dog} />
                    : <DogCircle key={i} dog={dog} number={i + 1} />
            ))}
        </div>
    );
}