import React from 'react';
import './TodosLoading.css'

function TodosLoading(){
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p>Todo Esta bajo control, estamos cargando la lista</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>

    



    );
    
}

export {TodosLoading}