/**
 * Created by MFChen on 26/12/2016.
 */
import React, {PropTypes} from 'react'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
// import styles from './styles/actives.less'
import {
  ActivesList,
  ActivesModal,
  ActivesSearch
} from '../../components/'

const Actives = ({location, dispatch, actives}) => {
  const {
    loading, list, pagination,
    currentItem, modalVisible, modalType,
  } = actives

  const {field, keyword} = location.query

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `actives/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'actives/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/actives',
        query: {
          page: page.current,
          pageSize: page.pageSize
        },
      }))
    },
    onDeleteItem(id) {
      dispatch({
        type: 'actives/delete',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'actives/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
  }

  const searchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'actives/query',
        payload: fieldsValue,
      })
    },
    onAdd() {
      dispatch({
        type: 'actives/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  const ActivesModalGen = () =>
    <ActivesModal {...modalProps} />

  return (
    <div className="content-inner">
      <ActivesSearch {...searchProps} />
      <ActivesList {...listProps} />
      <ActivesModalGen />
    </div>
  )
}

function mapStateToProps({actives}) {
  return {actives}
}

export default connect(mapStateToProps)(Actives)
