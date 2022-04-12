import React from 'react'
import TaskItems from './TaskItems'

const Task = (props) => {

    let clearAll = (props) => {


        props.taskItems.clearAll();

    }


    return (
        <div class="container" style={{ width: '35rem' }}>
            <div class="card mt-5">

                <div class="card-body">
                    <h5 class="card-title">Task</h5>
                    <ul id="myUl">
                        {/* <TaskItems /> */}
                        {props.taskItems.map((task) => <TaskItems task={task} key={task} />)}

                    </ul>

                </div>
            </div>
            <div class="mt-3">
                <button onClick={clearAll} type="reset" class="btn btn-secondary">Reset
                </button>
            </div>
        </div>

    )
}

export default Task