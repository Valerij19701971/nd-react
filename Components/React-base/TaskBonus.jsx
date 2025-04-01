export default function TaskBonus({ text, fontSize, bgColor }) {
    return (
        <div style={{
            backgroundColor: bgColor,
            fontSize: fontSize,
            padding: '20px',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
            margin: '20px'
        }}>
            {text}
        </div>
    );
}
