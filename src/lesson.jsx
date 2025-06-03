// import './App.css';

// function ListItem(props) {
//     return <li>{props.animal}</li>
// }

// function List(props) {
//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return animal.startsWith('L') && <li key={animal}>{animal}</li>;
//             })}
//         </ul>
//     );
// }

// function App() {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

// function List(props) {
//     if (!props.animals) {
//         return <div>Loading...</div>;
//     }

//     if (props.animals.length === 0) {
//         return <div>There are no animals in the list!</div>;
//     }

//     return (
//         <ul>
//             {props.animals.map((animal) => {
//                 return <li key={animal}>{animal}</li>;
//             })}
//         </ul>
//     );
// }

// function App() {
//     const animals = [];

//     return (
//         <div>
//             <h1>Animals: </h1>
//             <List animals={animals} />
//         </div>
//     );
// }

// function Button(props) {
//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     };
//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     );
// }

// export default function App() {
//     return (
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12} />
//             <Button text="Don't Click Me!" color="red" fontSize={12} />
//             <Button text="Click Me!" color="blue" fontSize={20} />
//         </div>
//     );
// }

// import React, { useState } from "react";

// const COLORS = ["pink", "green", "blue", "yellow", "purple"];

// export default function ChangeBackground() {
//     const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
//     const [timesChanged, setTimesChanged] = useState(0);
//     const onButtonClick = (color)  => () => {
//         setBackgroundColor(color);
//         setTimesChanged(timesChanged + 1);
//     }
//     return (
//         <div
//         className="App"
//         style={{
//             backgroundColor,
//         }}
//         >
//         {COLORS.map((color) => (
//             <button
//             type="button"
//             key={color}
//             onClick={onButtonClick(color)}
//             className={backgroundColor === color ? "selected" : ""}
//             >
//             {color}
//             </button>
//         ))}
//         <div style={{color:"white", background:"black"}}>Times changed: {timesChanged}</div>
//         </div>
//     )
// }

import React, { useState } from "react";

export default function Person() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function handleChangeFirst(e) {
        setFirstName(e.target.value)
    }

    function handleChangeLast(e) {
        setLastName(e.target.value)
    }

    return (
        <div>
            <p>first name:</p>
            <Input value={firstName} onChange={handleChangeFirst}/>
            <br />
            <p>last name:</p>
            <Input value={lastName} onChange={handleChangeLast}/>
            <p>full name:</p>
            <p>{fullName}</p>
        </div>
    )
}

function Input({value, onChange}) {
    return (
        <input type="text" value={value} onChange={onChange} />
    )
}