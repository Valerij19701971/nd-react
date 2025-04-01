import WordLengthBox from './WordLengthBox';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList5() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dogs.map((dog, i) => (
                <WordLengthBox key={i} length={dog.length} />
            ))}
        </div>
    );
}