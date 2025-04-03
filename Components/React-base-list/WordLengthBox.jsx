export default function WordLengthBox({ length, redColor, greenColor, color }) {

    const bgColor = length > 6 ? greenColor : redColor;

    return (
        <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '10px',
            backgroundColor: bgColor,
            color: color ||'black',
            fontSize: '20px',
            fontWeight: '600',
            margin: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {length}
        </div>
    );
}