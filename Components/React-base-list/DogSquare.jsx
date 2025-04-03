export default function DogSquare({dog, number, color}) {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color ||' #f9b0e7',
            color: '#333',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px',
            borderRadius:'10%',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
        }}>
            {number} {dog} 
        </div>
    );
}
