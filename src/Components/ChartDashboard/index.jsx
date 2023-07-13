import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getRevenue } from '../../API/Index';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const ChartDashboard = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => `User-${cart.userId}`);
      const data = res.carts.map((cart) => cart.discountedTotal);
      const dataSource = {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data,
            backgroundColor: 'rgba(255, 0, 0, 1)',
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };

  return <Bar options={options} data={revenueData} />;
};

export default ChartDashboard;
