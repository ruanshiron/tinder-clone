import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Tabs, Icon, Card, Avatar, Divider } from 'antd'


const { Header, Content, Footer, Sider } = Layout
const { TabPane } = Tabs
const { Meta } = Card


const MainContent = () => {
  return (
    <Layout style={{ marginLeft: '400px' }}>
      <Content style={{ margin: '24px 16px 0', minHeight: '100vh', minWidth: '400px' }}>
        <Card
          hoverable
          style={{ width: 400, margin: 'auto' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          actions={[
            <Icon type="step-forward" />,
            <Icon type="info-circle" theme="twoTone" />,
            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          ]}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Content>
    </Layout>
  )
}


MainContent.defaultProps = {
}

MainContent.propTypes = {
}

export default MainContent