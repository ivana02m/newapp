import React from 'react';

function UpdateList(props) {
    const modalIdentifier = 'update'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getList(e,props.elementId)}>Update</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Update List</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body">
                            <input type="number"
                                placeholder="id"
                                name="id"
                                value={props.singledata.id}
                                onChange={props.handleChange}>

                            </input><br></br>
                            <input type="text"
                                placeholder="name"
                                name="name"
                                value={props.singledata.name}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="surname"
                                name="surname"
                                value={props.singledata.surname}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="userType"
                                name="userType"
                                value={props.singledata.userType}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="createdDate"
                                name="createdDate"
                                value={props.singledata.createdDate}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="city"
                                name="city"
                                value={props.singledata.city}
                                onChange={props.handleChange}>
                            </input><br></br>

                            <input type="text"
                                placeholder="address"
                                name="address"
                                value={props.singledata.address}
                                onChange={props.handleChange}>
                            </input><br></br>

                        </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.updateList(event,props.elementId)}>Update</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default UpdateList;