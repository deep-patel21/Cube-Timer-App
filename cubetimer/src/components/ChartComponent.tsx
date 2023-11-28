'use client';
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { SolveDataPoint } from '@/types';

interface ChartComponentProps {
  solvesData: SolveDataPoint[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ solvesData }) => {
  useEffect(() => {
    const data = {
      datasets: [
        {
          label: 'Cube Solves',
          data: solvesData,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: false,
        },
      ],
    };

    const options = {
      scales: {
        x: [
          {
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Number of Cube Solves',
            },
          },
        ],
        y: [
          {
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Time (seconds)',
            },
          },
        ],
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context: { dataset: { data: { [x: string]: any; }; }; dataIndex: number; }) {
              const dataPoint = context.dataset.data[context.dataIndex];
              return `Solve ${context.dataIndex + 1}: ${dataPoint.y.toFixed(2)} seconds`;
            },
          },
        },
      },
    };

    const canvasElement = document.getElementById('solveChart') as HTMLCanvasElement | null;

    if (canvasElement) {
      const solveChart = new Chart(canvasElement, {
        type: 'line',
        data: data,
        options: options
      });

      return () => {
        solveChart.destroy();
      };
    }
  }, [solvesData]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <canvas id="solveChart" width="800" height="450"></canvas>
    </div>
  );
};

export default ChartComponent;