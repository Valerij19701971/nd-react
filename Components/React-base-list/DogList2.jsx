import DogCircle from './DogCircle';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList2() {
    const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedDogs.map((dog, i) => (
                <DogCircle key={i} dog={dog} number={i + 1} />
            ))}
        </div>
    );
}