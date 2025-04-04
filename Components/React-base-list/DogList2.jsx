
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

