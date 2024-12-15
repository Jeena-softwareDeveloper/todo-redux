import {configureStore} from '@reduxjs/toolkit'

import yuse from './todoredux'

export const store = configureStore({
    reducer:{
        todo:yuse,
    }
})