import React from 'react'

const AddTodo = (onAdd) => {

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.title.value,e.target.completed.value);
        e.target.name.value = "";
        e.target.completed.value = "";

    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add A Todo</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input  type="text" className="form-control form-control-lg" placeholder='Enter id' name='id' />
                    </div>

                    <div className='form-group'>
                        <input  type="text" className="form-control form-control-lg" placeholder='Enter title' name='title' />
                    </div>

                    <div className='form-group'>
                        <input  type="text" className="form-control form-control-lg" placeholder='Enter completed' name='completed' />
                    </div>
                    <button  type="button" className="btn-lg btn-secondary mt-4">Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default AddTodo
