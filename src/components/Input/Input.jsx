import React from 'react'

const Input = (props) => {

    // console.log(props);
    // let [state, setstate] = useState('');

    let changeInput = (e) => {
        // console.log(e.target.value);
        // console.log(state);
        props.setState(e.target.value);

    }

    let submitInput = () => {

        if (props.state === "") {
            alert("Field should not be blank")
        } else {

            props.updateTaskItems((prev) => [...prev, props.state])

        }

    }

   

    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-5 mx-auto">
                    <div class="my-card mt-5">


                        <div class="mb-3">
                            <label class="form-label">Task</label>
                            <input value={props.state} onChange={changeInput} type="text" class="form-control" id="task" placeholder="Enter The Task"
                                aria-describedby="emailHelp" />
                        </div>

                        {/* <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Completed
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="Completed">
                                    <li><a class="dropdown-item" href="#">Yes</a></li>
                                    <li><a class="dropdown-item" href="#">No</a></li>
                                </ul>
                            </div> */}

                        <div class="mt-3">
                            <button onClick={submitInput} type="submit" class="btn btn-primary">Submit</button>
                        </div>





                    </div>
                </div>
            </div>
        </div>

    )
}

export default Input