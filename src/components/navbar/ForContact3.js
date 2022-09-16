import React from 'react'
//import './user.css'

const User = ({id,name,surname,userType,createdDate,city,address, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
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
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User