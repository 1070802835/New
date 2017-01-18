/**
 * Created by MFChen on 22/12/2016.
 */
import React from 'react'
import {Icon} from 'antd'
import styles from './styles/error.less'

const Error = () => <div className="content-inner">
  <div className={styles.error}>
    <Icon type="frown-o"/>
    <h1>404 Not Found</h1>
  </div>
</div>

export default Error
