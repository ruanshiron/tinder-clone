import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Tabs, Icon, Card, Avatar, Divider, Col, Row, Slider, Button, Select } from 'antd'
import UserCard from './user_card'


const { Header, Content, Footer, Sider } = Layout
const { TabPane } = Tabs
const { Meta } = Card
const ButtonGroup = Button.Group
const { Option } = Select


const ASide = () => {
  return (
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
        <UserCard />

        <Tabs defaultActiveKey="3">

          <TabPane
            tab={
              <span>
                <Icon type="heart" theme="filled" />
              </span>
            }
            key="1"
          >
          </TabPane>

          <TabPane
            tab={
              <span>
                <Icon type="message" />
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
            <Divider>Cài đặt tìm kiếm</Divider>

            <Divider orientation="left">Phạm vi </Divider>
            <Slider style={{ marginLeft: '2em', marginRight: '2em' }} marks={{ 0: '0km', 100: '100km' }} defaultValue={30}></Slider>

            <Divider orientation="left">Độ tuổi </Divider>
            <Slider style={{ marginLeft: '2em', marginRight: '2em' }} marks={{ 100: 'tuổi' }} range defaultValue={[20, 50]}></Slider>

            <Divider orientation="left">Đối tượng </Divider>

            <Select style={{ marginLeft: '2em', width: '296px' }} >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>

            <Divider><a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a></Divider>
          </TabPane>

        </Tabs>

      </Card>
    </Sider>
  )
}

export default ASide
