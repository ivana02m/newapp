/*import React from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

function Lists(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.surname}</td>
            <td>{element.userType}</td>
            <td>{element.createdDate}</td>
            <td>{element.city}</td>
            <td>{element.address}</td>
            <td><UpdateList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                updateList={props.updateList}
                handleChange={props.handleChange}></UpdateList></td>
            <td>
                <DeleteList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                deleteList={props.deleteList}></DeleteList>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>User Type</th>
                  <th>Created Date</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default Lists;*/