import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Tabs, Icon, Card, Avatar, Divider } from 'antd'

const { Meta } = Card

const UserCard = ({user}) => {
  return (
    <Card hoverable bordered={false}>
      <Meta
        avatar={
          <Avatar src={user.img} />
        }
        title={user.name}
      />
    </Card>
  )
}

UserCard.defaultProps = {
  user: {
    name: "Nguyễn Thế Vinh",
    img: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  }
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string
  })
}

export default UserCard