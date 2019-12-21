import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Tabs, Icon, Card, Avatar, Divider } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { TabPane } = Tabs
const { Meta } = Card

const App = () => (
  <React.Fragment>
    {/* <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a> */}

    <Layout>
      <Sider
        width={400}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          background: '#fff'
        }}
      >
        <Card bordered={false} style={{ height: '100%' }}>
          <Card hoverable bordered={false}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Nguyễn Thế Vinh"
            />
          </Card>

          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <Icon type="heart" theme="filled" />
                  Kết đôi
                </span>
              }
              key="1"
            >
              Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="message" />
                  Tin nhắn
                </span>
              }
              key="2"
            >
              Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  Thông tin cá nhân
                </span>
              }
              key="3"
            >
              <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a> 
            </TabPane>
          </Tabs>
        </Card>
      </Sider>
      <Layout style={{ marginLeft: '400px' }}>
        <Content style={{ margin: '24px 16px 0', minHeight: '100vh', minWidth: '400px'}}>
          <Card
            hoverable
            style={{ width: 400 , margin: 'auto'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[
              <Icon type="step-forward" />,
              <Icon type="info-circle" theme="twoTone" />,
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"/>
            ]}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>,
        </Content>
      </Layout>
    </Layout>
  </React.Fragment>
)

App.defaultProps = {
}

App.propTypes = {
}

export default App