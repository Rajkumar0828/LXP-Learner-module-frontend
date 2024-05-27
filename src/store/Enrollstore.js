// store.js
import { createStore, applyMiddleware } from 'redux';

import { enrollMiddleware } from '../middleware/EnrollApi';
import {enrollReducer} from '../reducers/Enrollreducer'




export const store = createStore( enrollReducer, applyMiddleware(enrollMiddleware));
