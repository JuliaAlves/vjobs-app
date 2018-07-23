import React from 'react'

const collapse = (props) => (
    <div>
        <div className="row mt-3">
            <div className="col-2">
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={ '#' + props.collapseID} aria-expanded="false" aria-controls={props.collapseID}>{props.innerText}</button>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="collapse multi-collapse" id={props.collapseID}>
                    <div className="card">
                        <div className="card-body">
                            { props.children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default collapse;
