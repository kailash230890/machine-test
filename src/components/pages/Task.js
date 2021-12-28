import React from 'react'

const Task = ({id,title,compeleted}) => {

    console.log(id,title,compeleted);

    return (
        <div>
            Task List
            <span>{id}</span>
            <span>{title}</span>
            <span>{compeleted}</span>
            
        </div>
    )
}

export default Task
