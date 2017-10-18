/**
 * Created by linyuhua on 2017/5/17.
 */
import React from 'react'
import { Layout, Menu, } from 'antd'
import 'whatwg-fetch';

const { Header, Content, Footer } = Layout
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgUrl:''};
    }
    handleClick = (item) => {
        const path = item.key;
        location.href = path;
    }
    componentDidMount(){
        var self =this;
        fetch('/main/get-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({username:'test2'})
        }).then(res => {
            res.json().then(res => {
                console.log(res.password);
                console.log('后台传过来的人员头像----------' + res.head_portrait);
                self.setState({
                    imgUrl: res.head_portrait
                });
            })
        })
    }
    render() {
        var imgUrl = this.state.imgUrl;
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        onClick={this.handleClick}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/home">login</Menu.Item>
                        <Menu.Item key="/main">article</Menu.Item>
                        <Menu.Item key="/editor">editor</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <img src={ imgUrl }></img>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Node-Login ©2017 Created by linwalker
                </Footer>
            </Layout>
        )
    }
}

export default App;