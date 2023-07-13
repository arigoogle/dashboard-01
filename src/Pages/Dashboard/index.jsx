import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Typography } from 'antd';

function Dashboard() {
  return (
    <div className='custom-dashboard'>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard icon={<ShoppingCartOutlined/>} title={"Orders"} value={1234}/>
        <DashboardCard icon={<ShoppingOutlined/>} title={"Inventory"} value={12002}/>
        <DashboardCard icon={<UserOutlined/>} title={"Customers"} value={199}/>
        <DashboardCard icon={<DollarCircleOutlined/>} title={"Revenue"} value={921092}/>
      </Space>
    </div>
  );
}


// eslint-disable-next-line react/prop-types
function DashboardCard({title, value, icon}) {
  return (
    <Card>
      <Space direction='horizontal' >
        {icon}
        <Statistic
          title={title}
          value={value}
        />
      </Space>
    </Card>
  );
}


export default Dashboard;
