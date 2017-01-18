/**
 * Created by MFChen on 22/12/2016.
 */
import {routerRedux} from 'dva/router'
import kits from '../../utils/kits'

export default {
  namespace: 'main',
  state: {
    collapse: false, // 弹出窗的显示状态
    userInfo: JSON.parse(kits.getCookies('__userInfo__') || '{}'),
    siderFold: localStorage.getItem("antdAdminSiderFold") === "true" ? true : false,
    darkTheme: localStorage.getItem("antdAdminDarkTheme") === "false" ? false : true,
  },
  effects: {
    *login({
      payload
    }, {call, put}) {
      yield put({type: 'showLoginButtonLoading'})
      const data = yield call(login, parse(payload))
      if (data.success) {
        yield put({
          type: 'loginSuccess', payload: {
            data
          }
        })
      } else {
        yield put({
          type: 'loginFail', payload: {
            data
          }
        })
      }
    },
    *queryUser({
      payload
    }, {call, put}) {
      yield put({type: 'showLoading'})
      const data = yield call(userInfo, parse(payload))
      if (data.success) {
        yield put({
          type: 'loginSuccess',
          payload: {
            user: {
              name: data.username
            }
          }
        })
      } else {
        yield put({type: 'hideLoading'})
      }
    },
    *logout({}, {put}) {
      yield kits.setCookies('tf-token','')
      yield kits.setCookies('tf-uid','')
      yield kits.setCookies('__userInfo__',JSON.parse('{}'))
      yield put(routerRedux.push('/login'))
    },
    *switchSider({
      payload
    }, {put}) {
      console.log("switchSider");
      yield put({
        type: 'handleSwitchSider'
      })
    },
    *changeTheme({
      payload
    }, {put}) {
      console.log("changeTheme");
      yield put({
        type: 'handleChangeTheme'
      })
    },
  },
  reducers: {
    //更新处理 state 值,由传进来的参数决定
    updateState(state, {payload}){
      return {...state, ...payload}
    },
    loginSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
        login: true,
        loginButtonLoading: false
      }
    },
    logoutSuccess(state){
      return {
        ...state,
        login: false
      }
    },
    loginFail(state) {
      return {
        ...state,
        login: false,
        loginButtonLoading: false
      }
    },
    showLoginButtonLoading(state) {
      return {
        ...state,
        loginButtonLoading: true
      }
    },
    showLoading(state) {
      return {
        ...state,
        loading: true
      }
    },
    hideLoading(state) {
      return {
        ...state,
        loading: false
      }
    },
    handleSwitchSider(state) {
      localStorage.setItem("antdAdminSiderFold", !state.darkTheme)
      return {
        ...state,
        siderFold: !state.siderFold
      }
    },
    handleChangeTheme(state) {
      localStorage.setItem("antdAdminDarkTheme", !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    },
  }
}