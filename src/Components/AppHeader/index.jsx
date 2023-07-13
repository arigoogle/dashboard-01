import { Badge, Image, Space, Typography } from "antd"
import { BellFilled, MailOutlined} from '@ant-design/icons';

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={40} src='https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/12836/5f3d02e6bc8b2416109647.jpg'></Image>
      <Typography.Title>Vite with Ant</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }}/>
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }}/>
        </Badge>
      </Space>
    </div>
  )
}

export default AppHeader