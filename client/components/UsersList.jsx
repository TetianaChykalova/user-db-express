import React from 'react';

const UsersList = ({users}) => {

    return (<div>
        {users.map(user => (
        <div key={user.id}>
            <h5>{user.name}</h5>
            <div>
                <Link to={`${user.id}/posts`}>See posts</Link>
                <Link to={`${user.id}/albums`}>See albums</Link>
            </div>
            <div>
                <span>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </span>
                <span>
                    <a target='_blanc' href={`https://${user.website}`}>{user.website}</a>
                </span>
            </div>
        </div>
        ))}
    </div>)
}

export default UsersList