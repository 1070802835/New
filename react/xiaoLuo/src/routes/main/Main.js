/**
 * 首页
 * Created by MFChen on 22/12/2016.
 */
import React, {PropTypes} from 'react'
import {connect} from 'dva'
import classnames from 'classnames'

import Header from '../../components/layout/Header'
import Bread from '../../components/layout/Bread'
import Footer from '../../components/layout/Footer'
import Sider from '../../components/layout/Sider'


import styles from '../../components/layout/styles/main.less'
import '../../components/layout/styles/common.less'


const Main = (props) => {
  const {userInfo, siderFold, darkTheme} = props.main

  const headerProps = {
    userInfo,
    siderFold,
    logout() {
      props.dispatch({type: 'main/logout'})
    },
    switchSider() {
      props.dispatch({type: 'main/switchSider'})
    }
  }

  const siderProps = {
    siderFold,
    darkTheme,
    location: props.location,
    changeTheme(){
      props.dispatch({type: 'main/changeTheme'})
    }
  }

  return (
      <div className={classnames(styles.layout,{[styles.fold]:siderFold})}>
        <aside  className={classnames(styles.sider,{[styles.light]:!darkTheme})}>
          <Sider {...siderProps}/>
        </aside>
        <div className={styles.main}>
          <Header {...headerProps}/>
          <Bread location={props.location}/>
          <div className={styles.container}>
            <div className={styles.content}>
              {props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
  )
}

function mapStateToProps(main) {
  return main;
}

export default connect(mapStateToProps)(Main);

