// import DogCircle from './DogCircle';

// const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

// export default function DogList2() {
//     const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);

//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {sortedDogs.map((dog, i) => (
//                 <DogCircle key={i} dog={dog} number={i + 1} />
//             ))}
//         </div>
//     );
// }
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList2() {
    const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);
    console.log(sortedDogs);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedDogs.map((dog, index) => (
                <div
                    key={index}
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: '#A0C4FF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}
                >
                    {index + 1}. {dog}
                </div>
            ))}
        </div>
    );
    
}

const animals = ['cat', 'giraffe', 'elephant', 'dog'];

// Goal: show each animal's name and its length
const result = animals.map((animal, index) => {
    return `${index + 1}. ${animal} (${animal.length} letters)`;
});

console.log(result);