import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

ReactDOM.render(
    <React.StrictMode>
        <Toast message={"Test"} position={{xPosition: "left", yPosition: "up"}}/>
    </React.StrictMode>,
    document.getElementById('root')
);


//export function add(a: number, b: number): number {
//    return a + b;
//}

//TODO so die einzelnen Komponenten exportieren
//export {default as Toast} from './Toast';

//console.log(add(3, 5)); //output: 8