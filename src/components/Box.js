import { useDrag } from 'react-dnd';
import classes from './Box.module.scss';

export default function Box(props) {
    const [{ opacity }, boxRef] = useDrag(
        () => ({
            type: 'Box',
            item: { id: props.id },
            collect: monitor => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        }),
        [props.id]
    );

    return (
        <div
            className={classes.Box}
            style={{ backgroundColor: props.color, opacity }}
            ref={boxRef}>
            <h2>{props.name || 'Box'}</h2>
        </div>
    );
}
