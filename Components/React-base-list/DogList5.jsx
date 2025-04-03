import WordLengthBox from './WordLengthBox';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

dogs.forEach(dog => {
    console.log(`${dog} – ${dog.length}`);
});

const lengths = dogs.map(dog => {
    console.log(`${dog} – ${dog.length}`);
    return `${dog}, ${dog.length}, ${dog.length * 2}`;
});

console.log(lengths);



export default function DogList5() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dogs.map((dog, i) => (
                <WordLengthBox key={i} length={dog.length} greenColor="#5DE94A" redColor="#DB5A78" color="darkBlue"/>
            ))}
        </div>
    );
}