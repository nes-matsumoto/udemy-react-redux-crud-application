

//combineReducers：全てのreducerを一つにまとめる（結合）関数
//index.jsにおいて結合する

import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({count})