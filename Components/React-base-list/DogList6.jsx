import DogCircle from "./DogCircle"

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList6() {
    
    const filterSortDogs = dogs
        .filter(dog => dog[0] === dog[0].toLowerCase())
        .sort((a, b) => b.length - a.length);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filterSortDogs.map((dog, index) => (
                    <DogCircle key={index} dog = {dog} number = {index + 1} color = '#FF8A50'/>
                ))}
            </div>
        </>
    )
}