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
  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Zimbabwean dollar (ZWL)',
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: 'rgb(43 234 139)',
      backgroundColor: 'rgba(56, 229, 77,0.5)',
    },
  ],
};
type Props = {};

const Chart = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="days" className="w-[400px] flex justify-center flex-col gap-5 ">
        <TabsList className="gap-3 rounded-2xl self-center ">
          <TabsTrigger value="days" className="rounded-xl">
            5 days
          </TabsTrigger>
          <TabsTrigger value="weeks" className="rounded-xl">
            1 Week
          </TabsTrigger>
          <TabsTrigger value="months" className="rounded-xl">
            1 Month
          </TabsTrigger>
        </TabsList>
        <TabsContent value="days">
          <Line datasetIdKey="id" data={data} options={options} />
        </TabsContent>
        <TabsContent value="weeks">
          <Line datasetIdKey="id" data={data} options={options} />
        </TabsContent>
        <TabsContent value="months">
          <Line datasetIdKey="id" data={data} options={options} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chart;
