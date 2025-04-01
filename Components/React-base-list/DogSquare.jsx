export default function DogSquare(props) {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            border: '2px solid black',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {props.dog}
        </div>
    );
}
