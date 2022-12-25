import React from 'react'
import {reduxStore} from './redux/redux-store';

export const StoreContext = React.createContext({} as typeof reduxStore)