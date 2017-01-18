
/**
 * Created by MFChen on 20/12/2016.
 * 活动登录入口
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {Input, Button, Checkbox} from 'antd';
import styles from './styles/login.less';

const Login = (props) => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <div className={styles.loginHeader}></div>
        <Input className='login-input-customer' type='text'
               placeholder='请输入账户' size='large'
               onPressEnter={() => {
                 props.dispatch({
                   type: 'login/login',
                 });
               }}
               onChange={(event) => {
                 props.dispatch({
                   type: 'login/updateState',
                   payload: {
                     loginAccount: event.target.value
                   }
                 })
               }} defaultValue={props.loginAccount}/>

        <Input className='login-input-customer' type='password'
               placeholder='请输入密码' size='large'
               onPressEnter={() => {
                 props.dispatch({
                   type: 'login/login',
                 });
               }}
               onChange={(event) => {
                 props.dispatch({
                   type: 'login/updateState',
                   payload: {
                     loginPassword: event.target.value
                   }
                 })
               }} defaultValue={props.loginPassword}/>
        <div className={styles.loginCheckbox}>
          <Checkbox checked={props.login.checkStatus} className='login-checkbox-customer'
                    onChange={(event) => {
                      props.dispatch({
                        type: 'login/updateState',
                        payload: {
                          checkStatus: event.target.checked
                        }
                      })
                    }}>保持登录状态</Checkbox>
          <span className={styles.forgot}
                onClick={() => {
                  props.dispatch({
                    type: 'login/showMessage'
                  })
                }}>忘记密码？</span>
        </div>
        <Button className='login-button-customer'
                type='primary' loading={props.login.loading}
                onClick={() => {
                  props.dispatch({
                    type: 'login/login',
                  });
                }}>{props.login.loading ? '登录中' : '登录'}</Button>
        <Button className='login-button-customer-sign' type='ghost'
                onClick={() => {
                  props.dispatch({
                    type: 'login/showMessage'
                  })
                }}>注册</Button>
      </div>
    </div>
  );

};

function mapStateToProps(login) {
  return login;
}

export default connect(mapStateToProps)(Login);

