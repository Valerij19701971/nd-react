//This will be almost the same as DogList2.jsx,
//  but instead of inline <div>,
//  you’ll use your new <DogCircle /> component.

//Replace the inline <div> inside .map() with this:
// {sortedDogs.map((dog, index) => (
//     <DogCircle key={index} dog={dog} number={index + 1} />
// ))}
//✅ That’s it — now you're using a reusable component with props, just like a React pro.

//Import the new component at the top:

import DogCircle from "./DogCircle"; 

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

export default function DogList21() {
    const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sortedDogs.map((dog, index) => (
                <DogCircle key={index} dog={dog} number={index + 1} />
            ))}
        </div>
    );
}
//✅ Now you’re using DogCircle as a reusable UI component!