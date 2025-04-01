export default function WordLengthBox({ length }) {
    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: length > 6 ? 'green' : 'red',
            color: 'white',
            margin: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {length}
        </div>
    );
}