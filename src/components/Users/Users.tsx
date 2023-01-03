import React, {useEffect} from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'

export const Users: React.FC<UsersType> = (props) => {

    const {users, setUsers, follow, unfollow} = props

    useEffect(() => {
        setUsers([
            {
                id: '1',
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
                followed: true,
                fullName: 'Alex',
                status: 'Hello everyone',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: '2',
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
                followed: false,
                fullName: 'Steve',
                status: 'Hello everyone',
                location: {country: 'USA', city: 'Boston'}
            },
            {
                id: '3',
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
                followed: true,
                fullName: 'Bob',
                status: 'Hello everyone',
                location: {country: 'Germany', city: 'Hamburg'}
            }
        ])
    }, [])

    return (
        <div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.avatar} src={u.avatarUrl} alt={'avatar'}/>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unfollow(u.id)}>Unfollowed</button>
                                        : <button onClick={() => follow(u.id)}>Followed</button>}
                                </div>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}