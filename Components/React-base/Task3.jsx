export default function Task3(props) {

    const red = '#A61C3C';
    const blue = '#020887';

    let textColor;
    if (props.color === '1') {
        textColor = blue
    } else if (props.color === '2') {
        textColor = red
    } else {
        textColor = '#707070';
    }

    return (
        <>
            <div style={{ color: textColor }}>
                <h1>Zebrai ir Bebrai</h1>
            </div>
        </>
    )
}