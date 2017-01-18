import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import styles from './styles/main.less'

const SubMenu = Menu.SubMenu

function Header({  userInfo, logout, switchSider, siderFold }) {
  let handleClickMenu = e => e.key === 'logout' && logout()
  return (
    <div className={styles.header}>
      <div className={styles.siderbutton} onClick={switchSider}>
        <Icon type={siderFold?"menu-unfold":"menu-fold"} />
      </div>
      <Menu className="header-menu" mode="horizontal" onClick={handleClickMenu}>
        <SubMenu style={{ float: 'right' }}
          title={<span><Icon type="user" />{userInfo && userInfo.nickname}</span>}>
          <Menu.Item key="logout">
            <a>注销</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Header
