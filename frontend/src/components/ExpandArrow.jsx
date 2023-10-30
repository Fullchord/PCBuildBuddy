import { useEffect, useState } from "react";
import "./ExpandArrow.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ExpandArrow = ({size, onExpand, isExpanded}) => {
    if (isExpanded == undefined) isExpanded = true;

    const [isExpand, setIsExpand] = useState(isExpanded);

    const onClick = () => {
        setIsExpand(!isExpand);
        onExpand(isExpand);
    }

    const arrowProps = {
        onClick: onClick,
        size: size,
    };

    return (
        <div className="expand-arrow"> 
            { isExpand ? <IoIosArrowDown {...arrowProps}/> : <IoIosArrowUp {...arrowProps}/>}
        </div> 
    );
}

export default ExpandArrow;