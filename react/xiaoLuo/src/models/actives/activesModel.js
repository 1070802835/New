/**
 * Created by MFChen on 26/12/2016.
 */
import { create, remove, update, query } from '../../services/activeServices'
import { parse } from 'qs'

export default {

  namespace: 'actives',

  state: {
    list: [],
    loading: false,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    pagination:{
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current:1,
      total:null,
      size:'default'
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/main/actives') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      // const data = yield call(query, parse(payload))
      const data = {
        data: [
          {
            id: 1,
            name: "Cc",
            nickName: "MFChen",
            phone: "18888888888",
            age: 18,
            address: "cmf",
            isMale: false,
            email: "xf_life@yeah.net",
            createTime: "2003-11-30 20:25:17",
            avatar: 'http://aaa'
          }
        ],
        page: {
          total: 1,
          current: 1
        }
      }
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination:{
              total: data.page.total,
              current: data.page.current,
            }
          },
        })
      }
    },
    *'delete'({ payload }, { call, put }) {
      yield put({ type: 'showLoading' })
      const data = yield call(remove, { id: payload })
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination:{
              total: data.page.total,
              current: data.page.current,
            }
          },
        })
      }
    },
    *create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const data = yield call(create, payload)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination:{
              total: data.page.total,
              current: data.page.current,
            }
          },
        })
      }
    },
    *update({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      yield put({ type: 'showLoading' })
      const id = yield select(({ users }) => users.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(update, newUser)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination:{
              total: data.page.total,
              current: data.page.current,
            }
          },
        })
      }
    },
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false }
    },
    showModal(state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },
    hideModal(state) {
      return { ...state, modalVisible: false }
    },
  },

}
