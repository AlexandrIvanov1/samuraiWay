import React from 'react';
import {UsersType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

type OwnPropsType = {
    getUsers: () => void
}

type UsersPropsType = UsersType

export class Users extends React.Component<UsersPropsType, OwnPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id} className={s.wrapper}>
                            <div className={s.photoWrapper}>
                                <img
                                    className={s.avatar}
                                    alt={'avatar'}
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                />
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollowed</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Followed</button>}
                            </div>
                            <div className={s.information}>
                                <div className={s.leftColumn}>
                                    <div>{u.name}</div>
                                    <div>{u.status ? u.status : 'Hello everyone'}</div>
                                </div>
                                <div className={s.rightColumn}>
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
}