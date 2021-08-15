import Link from 'next/link'
import Nav from '../components/Nav'
import styled from 'styled-components'
import HtmlHead from '../components/Head'
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Todo, TodoChartData } from '../src/app/todo'
import TodoUseCase, { TodoSearchForm } from '../provider/todo'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieLabel, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { format, addMonths } from 'date-fns'
import Footer from '../components/Footer'

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
`

const YearMonthControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
`

const YearMonthButton = styled.span`
`

const ChartWrapper = styled.div`
  display: flex;
`

export default function Dashboard() {
  const [piData, setPiData] = useState<TodoChartData[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const query = useQuery("searchTodoList", async (): Promise<TodoChartData[]> => {
    const year = format(currentDate, 'Y')
    const month = format(currentDate, 'MM')
    const form = new TodoSearchForm(year, month);
    return await TodoUseCase.searchChartData(form)
  });

  useEffect(() => {
    if (!query.isLoading && query.data) {
      if (query.data.length > 0) {
        setPiData(query.data)
        return;
      }
      setPiData([])
    }
  }, [query.isLoading, query.data])

  useEffect(() => {
    query.refetch();
  }, [currentDate])

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text key={index} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${piData[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if(query.isLoading) return (<>Loading...</>)

  return (
    <Container>
      <Main>
        <HtmlHead title={'Timer TODO'} />
        <Nav>
          <li><Link href="/todoList">Todoリスト</Link></li>
        </Nav>
        <Title>{format(currentDate, 'Y/MM')}<hr /></Title>
        <YearMonthControl>
          <YearMonthButton className='pure-button' onClick={() => setCurrentDate(addMonths(currentDate, -1))}>前月へ</YearMonthButton>
          <YearMonthButton className='pure-button' onClick={() => setCurrentDate(addMonths(currentDate, 1))}>次月へ</YearMonthButton>
        </YearMonthControl>

        {piData.length === 0 ? (<p>データがありません。</p>) : (
        <ChartWrapper>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>

          <PieChart width={500} height={400}>
            <Pie
              data={piData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {piData.map((entry, index) =>
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              )}
            </Pie>
            <Tooltip />
          </PieChart>
        </ChartWrapper>
        ) }
      </Main>
      <Footer />
    </Container>
  )
}