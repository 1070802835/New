/**
 * 登录modal
 * Created by MFChen on 20/12/2016.
 */
import { routerRedux } from 'dva/router';
import {message} from 'antd'
import Base64 from 'base-64'
import kits from '../../utils/kits'
import * as loginService from '../../services/loginServices'


//登录前校验
function loginVerify(state) {
  //验证账户名
  if (state.loginAccount.trim()) {
    if (state.loginAccount.trim().length > 18 || state.loginAccount.trim().length < 3) {
      message.error('账户或者密码填写错误', 3)
      return false;
    }
  } else {
    message.error('账户不能为空', 3)
    return false;
  }
  if (state.loginPassword.trim()) {
    if (state.loginPassword.trim().length < 6) {
      message.error('账户或者密码填写错误', 3)
      return false;
    }
  } else {
    message.error('密码不能为空', 3)
    return false;
  }
}

function loginSuccess(data,state){
  message.success('登录成功')
  kits.setCookies('__userInfo__',JSON.stringify(data.userInfo))
  if(state.checkStatus){
    kits.setCookies('tf-token',data.token)
    kits.setCookies('tf-uid',data.userInfo.uid)
  }
}

export default {
  namespace: 'login',
  state: {
    loginAccount: '',
    loginPassword: '',
    checkStatus: true,//保持登录勾选状态
    loading: false, // 控制加载状态
  },
  effects: {
    *login(action, {select, put, call}){
      const state = yield select(state => state.login)
      yield loginVerify(state)
      yield put({type: 'updateLoading'})
      const result = yield call(loginService.login, {
        account: state.loginAccount,
        password: Base64.encode(state.loginPassword),
        f: '',
        type: 0
      }, 1000)
      debugger
      if (~'000'.indexOf(result.code)) {
        yield loginSuccess(result.data,state)
        yield put(routerRedux.replace({pathname: '/main'}))
      } else {
        message.error( result.msg , 3);
      }
      yield put({type: 'updateLoading'})
    },
  },
  reducers: {
    // 控制加载状态的 reducer
    updateLoading(state){
      return {...state, loading: !state.loading}
    },
    showMessage(){
      message.info('此功能暂未开发，敬请期待！', 1.5)
    }, // 控制 Modal 显示状态的 reducer
    //更新处理 state 值,由传进来的参数决定
    updateState(state, {payload}){
      return {...state, ...payload}
    },
  },
}
