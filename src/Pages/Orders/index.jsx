import {  Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getOrders } from '../../API/Index';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false)
    });
  }, []);

  return (
    <Space
      size={20}
      direction='vertical'
    >
      <Typography.Text>Orders</Typography.Text>
      <Table
      loading={loading}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render:(value)=><span>${value}</span>
          },
          {
            title: 'Discount',
            dataIndex: 'discountedPrice',
            render:(value)=><span>${value}</span>
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },

          {
            title: 'Total',
            dataIndex: 'total',
            render:(value)=><span>${value}</span>
          },
          
        ]}
        dataSource={dataSource}
        pagination={{ 
          pageSize:7,
         }}
      ></Table>
    </Space>
  );
}

export default Orders;
