import { Space, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getCustomers } from "../../API/Index"

function Customers() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false)
    })
  })

  return (
    <Space>
        <Typography.Title level={4}>Customers</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title:"Name",
              dataIndex:"firstName"
            },
            {
              title:"Age",
              dataIndex:"age"
            },
            {
              title:"Gender",
              dataIndex:"gender"
            },
            {
              title:"Email",
              dataIndex:"email"
            },
          ]}
        dataSource={dataSource}
        pagination={{ 
          pageSize:7,
         }}
        
        ></Table>

    </Space>
  )
}

export default Customers