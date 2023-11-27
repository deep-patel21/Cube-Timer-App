'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Chart from 'chart.js'

const ChartComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        <canvas id="solveChart" width="400" height="200"></canvas>
    </div>
  );
};

export default ChartComponent;
