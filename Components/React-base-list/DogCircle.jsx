export default function DogCircle({ dog, number }) {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid black',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div>{number}</div>
            <div>{dog}</div>
        </div>
    );
}