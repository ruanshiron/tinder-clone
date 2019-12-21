import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Tabs, Icon, Card, Avatar, Divider } from 'antd'
import ASide from './a_side'
import MainContent from './main_content'

const { Header, Content, Footer, Sider } = Layout
const { TabPane } = Tabs
const { Meta } = Card

const App = () => (
    <Layout>
      <ASide />
      <MainContent />
    </Layout>
)


export default App