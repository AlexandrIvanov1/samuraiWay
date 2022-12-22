import {ActionsTypes, SidebarType} from './store';

const initialState: Array<SidebarType> = [
    {
        id: '1',
        name: 'Kirill',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
    },
    {
        id: '2',
        name: 'Denis',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
    },
    {
        id: '3',
        name: 'Sergey',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
    }
]

const sidebarReducer = (state = initialState, action: ActionsTypes) => {
    return state
}
export default sidebarReducer;