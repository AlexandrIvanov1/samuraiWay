import React from 'react';
import c from './Post.module.css'
import {PostType} from '../../../../redux/profile-reducer';


export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={c.post}>
            <img src="https://avatars.mds.yandex.net/i?id=85396d2aea45615e98718158618597eb-5906238-images-thumbs&n=13"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}