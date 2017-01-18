import React, { PropTypes } from 'react'
import { Form, Input, Button, Radio, Modal, DatePicker, Upload, Select, Icon} from 'antd'
const FormItem = Form.Item
const RangePicker = DatePicker.RangePicker;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
}

const ActivesModal = ({
  visible,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: item.name ? '修改活动' : '添加活动',
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='活动名称：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '活动名称未填写',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label='活动时间' {...formItemLayout}>
          {getFieldDecorator('activesTime', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '活动时间未填写',
              },
            ]
          })(<RangePicker format='YYYY-MM-DD' />)}
        </FormItem>
        <FormItem label='投票开始时间：' {...formItemLayout}>
          {getFieldDecorator('voteBeginTime', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '活动时间未填写',
              },
            ]
          })(<DatePicker format='YYYY-MM-DD' />)}
        </FormItem>
        <FormItem label='可投票数：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('number', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '可投票数未填写',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label='重复投票' hasFeedback {...formItemLayout}>
          {getFieldDecorator('isRepeat', {
            initialValue: '',
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '请选择投票',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label='关注二维码'  extra='log'  {...formItemLayout}>
          {getFieldDecorator('upload1', {
            valuePropName: 'fileList1',
            normalize: '',
          })(
            <Upload name='logo' listType='picture' onChange=''>
              <Button type='ghost'>
                <Icon type='upload' /> 点击上传
              </Button>
            </Upload>
          )}
        </FormItem>
        <FormItem label='appId：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
          })(<Input />)}
        </FormItem>
        <FormItem label='appSecret：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
          })(<Input />)}
        </FormItem>
        <FormItem label='广告图片' extra='con' {...formItemLayout}>
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            normalize: '',
          })(
            <Upload name='logo' action='/upload.do' listType='picture' onChange=''>
              <Button type='ghost'>
                <Icon type='upload' /> 点击上传
              </Button>
            </Upload>
          )}
        </FormItem>
        <FormItem label='跳转链接：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            initialValue: item.address,
          })(<Input />)}
        </FormItem>
        <FormItem label='显示位置' hasFeedback {...formItemLayout}>
          {getFieldDecorator('isRepeat', {
            initialValue: '',
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '请选择投票',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>顶部</Radio>
              <Radio value={false}>底部</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label='获奖公布时间：' {...formItemLayout}>
          {getFieldDecorator('voteBeginTime', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: '活动时间未填写',
              },
            ]
          })(<DatePicker format='YYYY-MM-DD' />)}
        </FormItem>
      </Form>
    </Modal>
  )
}


export default Form.create()(ActivesModal)
