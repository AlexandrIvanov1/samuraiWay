import React from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

export const Users: React.FC<UsersType> = (props) => {

    const {users, setUsers, follow, unfollow} = props

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger
            setUsers(response.data.items)
            console.log(response)
        })
    }

    // useEffect(() => {
    //     setUsers([
    //         {
    //             id: '1',
    //             avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
    //             followed: true,
    //             fullName: 'Alex',
    //             status: 'Hello everyone',
    //             location: {country: 'Russia', city: 'Moscow'}
    //         },
    //         {
    //             id: '2',
    //             avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
    //             followed: false,
    //             fullName: 'Steve',
    //             status: 'Hello everyone',
    //             location: {country: 'USA', city: 'Boston'}
    //         },
    //         {
    //             id: '3',
    //             avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU',
    //             followed: true,
    //             fullName: 'Bob',
    //             status: 'Hello everyone',
    //             location: {country: 'Germany', city: 'Hamburg'}
    //         }
    //     ])
    // }, [])

    return (
        <div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <div>
                            <div>
                                <img
                                    className={s.avatar}
                                    alt={'avatar'}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                />
                                <div>
                                    {u.followed
                                        ? <button onClick={() => unfollow(u.id)}>Unfollowed</button>
                                        : <button onClick={() => follow(u.id)}>Followed</button>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}