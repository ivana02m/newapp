/*import React from 'react';

function DeleteList(props) {
    const modalIdentifier = 'delete'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getList(e,props.elementId)}>Delete</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Delete List</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        
              <div className="modal-body">
                            <input type="Number"
                                placeholder="id"
                                name="id"
                                value={props.singledata.id}
                                disabled={true}>

                            </input><br></br>

                            <input type="name"
                                placeholder="name"
                                name="name"
                                value={props.singledata.name}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="surname"
                                name="surname"
                                value={props.singledata.surname}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="userType"
                                name="userType"
                                value={props.singledata.userType}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="createdDate"
                                name="createdDate"
                                value={props.singledata.createdDate}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="city"
                                name="city"
                                value={props.singledata.city}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="address"
                                name="address"
                                value={props.singledata.address}
                                disabled={true}>
                            </input><br></br>

                        </div>







              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.deleteList(event,props.elementId)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default DeleteList;




/*</React.Fragment>onClick={(e)=>props.getList(e,props.elementId)}>Delete</button>*/





 /* <div className="modal-body">
                            <input type="text"
                                placeholder="id"
                                name="id"
                                value={props.singledata.id}
                                disabled={true}>

                            </input><br></br>

                            <input type="name"
                                placeholder="name"
                                name="name"
                                value={props.singledata.name}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="surname"
                                name="surname"
                                value={props.singledata.surname}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="userType"
                                name="userType"
                                value={props.singledata.userType}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="createdDate"
                                name="createdDate"
                                value={props.singledata.createdDate}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="city"
                                name="city"
                                value={props.singledata.city}
                                disabled={true}>
                          
                            </input><br></br>


                            <input type="text"
                                placeholder="address"
                                name="address"
                                value={props.singledata.address}
                                disabled={true}>
                            </input><br></br>

                        </div>*/