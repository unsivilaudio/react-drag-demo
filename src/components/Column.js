import { useDrop } from 'react-dnd';
import classes from './Column.module.scss';

export default function Column({ children, backgroundColor, onDropBox, id }) {
    const [{ isOver }, dropRef] = useDrop(
        () => ({
            accept: 'Box',
            collect: monitor => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
            drop: item => {
                console.log(item);
                if (item.id) {
                    onDropBox(item.id, id);
                }
            },
        }),
        []
    );

    return (
        <div
            ref={dropRef}
            // eslint-disable-next-line jsx-a11y/aria-role
            role='Dustbin'
            className={classes.Column}
            style={{ backgroundColor: isOver ? 'red' : backgroundColor }}>
            {children}
        </div>
    );
}
