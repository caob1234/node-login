/**
 * Created by linyuhua on 2017/5/15.
 */
import React from 'react'
import { Layout, Form, Icon, Input, Checkbox, Button, Message } from 'antd'
const { Header, Content, Footer } = Layout
const FormItem = Form.Item;

class LoginTab extends React.Component {
    // async handleSubmit(e) {
    //     e.preventDefault();
    //
    //     let values = await this.getFormValues();
    //     // let values = this.props.form.validateFields();
    //     if (values) {
    //         console.log(values);
    //     }
    // }
    handleSubmit = async(e) => {
        e.preventDefault();

        let values = await this.getFormValues();
        // let values = this.props.form.validateFields();
        if (values) {
            console.log(values);
        }
    }
    getFormValues() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.props.form.validateFields((err, values) => {
                if (!err) {
                    resolve( values );
                } else {
                    reject( false );
                }
            })
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{ width: "280px", margin: "0 auto" }}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请您输入账号名称！' }],
                        })(
                            <Input addonBefore={<Icon type="user" />} placeholder="请您输入用户名称！" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请您输入账号密码！' }],
                        })(
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请您输入账号密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a  href="" style={{float: 'right'}}>Forgot password</a>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}} >
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(LoginTab);