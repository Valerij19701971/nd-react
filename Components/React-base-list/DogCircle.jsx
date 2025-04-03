// 🧠 This is like a mini React component that receives props:
// dog → the name of the dog 🐕
// number → the order in the list (1, 2, 3...)

export default function DogCircle({ dog, number, color }) {
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: color ||'#C59D2E',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'center'
            }}
        >
            {number} {dog}
        </div>
    );
}


