import { useState } from 'react';

import Box from './components/Box';
import Column from './components/Column';
import classes from './App.module.scss';

const __INITIAL_BOXES = [
    { id: 'box-1', name: 'Box 1', color: '#402fff', column: 1 },
    { id: 'box-2', name: 'Box 2', color: '#de3a8c', column: 1 },
    { id: 'box-3', name: 'Box 3', color: '#2fed58', column: 1 },
    { id: 'box-4', name: 'Box 4', color: '#feb24f', column: 1 },
];

function App() {
    const [boxes, setBoxes] = useState(__INITIAL_BOXES);

    function onDropBox(id, column) {
        const updatedBoxes = [...boxes];
        const boxIdx = boxes.findIndex(b => b.id === id);
        if (boxIdx > -1) {
            updatedBoxes[boxIdx].column = column;
            setBoxes(updatedBoxes);
        }
    }

    return (
        <div className={classes.App}>
            <div className={classes.Hero}>React Drag-N-Drop Demo</div>
            <div className={classes.Container}>
                <Column
                    id={1}
                    backgroundColor='rgba(116, 121, 217, 0.15)'
                    onDropBox={onDropBox}>
                    {boxes
                        .filter(b => b.column === 1)
                        .map(box => (
                            <Box
                                key={box.id}
                                id={box.id}
                                name={box.name}
                                color={box.color}
                            />
                        ))}
                </Column>
                <Column
                    id={2}
                    backgroundColor='#77cd7a49'
                    onDropBox={onDropBox}>
                    {boxes
                        .filter(b => b.column === 2)
                        .map(box => (
                            <Box
                                key={box.id}
                                id={box.id}
                                name={box.name}
                                color={box.color}
                            />
                        ))}
                </Column>
            </div>
        </div>
    );
}

export default App;
