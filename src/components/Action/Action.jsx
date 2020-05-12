import React, {useRef, useState} from "react";
import styles from './Action.module.css';

const Action = (props) => {
    const [isChosen, setIsChosen] = useState(false);
    const actionRef = useRef(null);

    const toggleChosen = () => {
        setIsChosen(!isChosen);

        !isChosen ? props.onAdd(props.sign) : props.onDelete(props.sign);
    };

    return <div>
        <span className={`${styles.action} ${isChosen && styles.active}`} onClick={toggleChosen}
              ref={actionRef}>{props.sign}</span>
    </div>
};

export default Action;