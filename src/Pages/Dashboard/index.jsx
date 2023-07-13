import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getOrders } from '../../API/Index';
import ChartDashboard from '../../Components/ChartDashboard';

function Dashboard() {
  return (
    <div className='custom-dashboard'>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard icon={<ShoppingCartOutlined/>} title={"Orders"} value={1234}/>
          <DashboardCard icon={<ShoppingOutlined/>} title={"Inventory"} value={12002}/>
          <DashboardCard icon={<UserOutlined/>} title={"Customers"} value={199}/>
          <DashboardCard icon={<DollarCircleOutlined/>} title={"Revenue"} value={921092}/>
        </Space>
        <Space>
          <RecentOrders/>
          <ChartDashboard/>
        </Space>
      </Space>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction='horizontal'>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      // console.log(res.products);
      setDataSource(res.products.splice(0,3));
      setLoading(false);
    });
  }, []);
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key:'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'discountedPrice',
      key : 'price',
    },
  ];
  return ( 
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={columns}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
        rowKey="id"
      />
    </>
  );
}

export default Dashboard;
