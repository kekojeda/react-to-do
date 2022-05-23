import React from 'react';
import './TodoIcon.css';
import { ReactComponent as IconoComplete } from './complete.svg'
import { ReactComponent as IconoDelete } from './trash.svg'




function TodoIcon({type, color = 'gray ',onClick}){
    const iconTypes = {
        "check": color => (
            <IconoComplete className='Icon-svg Icon-svg--check' fill={color}/>
        ),
        "delete": color => (
            <IconoDelete className='Icon-svg Icon-svg--delete' fill={color}/>
        )
      
    }

    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
            >
                {iconTypes[type](color)}


            </span>
    )

}

export { TodoIcon }