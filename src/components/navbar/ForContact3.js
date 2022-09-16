import React from 'react'
//import './user.css'

const User = ({id,name,surname,userType,createdDate,city,address, onDelete, onEdit}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    const handleEdit = (event,id)=>  {
        onEdit(id);
    }

    return (
        <div className='list'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{userType}</span>
            <span>{createdDate}</span>
            <span>{city}</span>
            <span>{address}</span>

            <span>
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User