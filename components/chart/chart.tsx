'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Poppins } from 'next/font/google';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Zimbabwean dollar (ZWL)',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 1,
    },
  ],
};
type Props = {};

const Chart = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="days" className="w-[400px] items-center justify-center">
        <TabsList className="gap-3">
          <TabsTrigger value="days">5 days</TabsTrigger>
          <TabsTrigger value="weeks">1 Week</TabsTrigger>
          <TabsTrigger value="months">1 Month</TabsTrigger>
        </TabsList>
        <TabsContent value="days">
          <Line datasetIdKey="id" data={data} options={options} />
        </TabsContent>
        <TabsContent value="weeks">
          <Line datasetIdKey="id" data={data} options={options} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chart;
