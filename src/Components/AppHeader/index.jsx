import { Badge, Drawer, Image, List, Space, Typography } from "antd"
import { BellFilled, MailOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API/Index";

function AppHeader() {

  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([])
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [notificationOpen , setNotificationOpen] = useState(false)

  useEffect(() => {
    getComments().then(res=>{
      setComments(res.comments)
    })
    getOrders().then(res=>{
      setOrders(res.products)
    })
  }, [])
  
  


  return (
    <div className="AppHeader">
      <Image width={40} src='https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/12836/5f3d02e6bc8b2416109647.jpg'></Image>
      <Typography.Title>Vite with Ant</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined style={{ fontSize: 24 }} onClick={()=>{
            setCommentsOpen(true)
          }}/>
        </Badge>
        <Badge count={orders.length}>
          <BellFilled style={{ fontSize: 24 }} onClick={() => {
            setNotificationOpen(true)
          }}/>
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={()=>{
        setCommentsOpen(false)
      }}>
        <List dataSource={comments} renderItem={(item)=>{
         return <List.Item>{item.body}</List.Item>
        }}></List>

      </Drawer>
      <Drawer title="Notification" open={notificationOpen} onClose={() => {
        setNotificationOpen(false)
      }}>
         <List dataSource={orders} renderItem={(item)=>{
         return <List.Item>{item.title}</List.Item>
        }}></List>

      </Drawer>
    </div>
  )
}

export default AppHeader