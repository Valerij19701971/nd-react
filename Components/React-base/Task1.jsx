// import './Task1.css'
// export default function Task1() {
//     return (
//         <>
//             <div style={
//                 {
//                     fontSize: '24px',
//                     fontFamily: 'monospace',
//                     color: '#FF00AE',
//                     marginBottom: '10px',
//                     textTransform: 'uppercase'
//                 }
//             }>
//                 <p>Labas, zuiki!</p>
//             </div>
//         </>
//     )

//     return (
//         <div className='labas_zuiki'>
//             Labas, zuiki!
//         </div>
//     )
// }
// export default function Task1(props) {

//     return(
//         <div className='labas_zuiki'>
//             {props.message}
//         </div>
//     )

// }
// export default function Task1({ message }) {
//     return (
//         <div className="labas_zuiki">
//             {message}
//         </div>
//     );
// }
export default function Task1({ message, className }) {
    return (
        <div className={className}>
            {message}
        </div>
    );
}