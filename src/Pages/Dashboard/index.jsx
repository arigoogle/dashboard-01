import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getCustomers, getInventory, getOrders} from '../../API/Index';
import ChartDashboard from '../../Components/ChartDashboard';

function Dashboard() {
  const [orders, setOrders] = useState(0)
  const [inventory, setInventory] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [revenue, setRevenue] = useState(0)

  useEffect(() => {
      getOrders().then(res=>{
        setOrders(res.total)
        setRevenue(res.discountedTotal)
      })
      getInventory().then(res=>{
        setInventory(res.total)
      })
      getCustomers().then(res=>{
        setCustomers(res.total)
      })
  }, [])
  

  return (
    <div className='custom-dashboard'>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard icon={<ShoppingCartOutlined/>} title={"Orders"} value={orders}/>
          <DashboardCard icon={<ShoppingOutlined/>} title={"Inventory"} value={inventory}/>
          <DashboardCard icon={<UserOutlined/>} title={"Customers"} value={customers}/>
          <DashboardCard icon={<DollarCircleOutlined/>} title={"Revenue"} value={revenue}/>
        </Space>
        <Space>
          <RecentOrders/>
          <Card style={{ width:500, height:250 }}>
            <ChartDashboard/>
          </Card>
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
