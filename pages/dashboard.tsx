import Link from 'next/link'
import Nav from '../components/Nav'
import styled from 'styled-components'
import HtmlHead from '../components/Head'
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Todo } from '../src/app/todo'
import TodoUseCase, { TodoSearchForm } from '../provider/todo'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns'

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`

// const Pidata = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({ cx,
//                                  cy,
//                                  midAngle,
//                                  innerRadius,
//                                  outerRadius,
//                                  percent,
//                                  index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };


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

const today = new Date();

export default function Dashboard() {
  const [piData, setPiData] = useState<Todo[]>([])

  const query = useQuery("searchTodoList", async (): Promise<Todo[]> => {
    const year = format(today, 'Y')
    const month = format(today, 'MM')
    const day = format(today, 'dd')

    const form = new TodoSearchForm(year, month, null);
    return await TodoUseCase.search(form)
  });

  useEffect(() => {
    if (!query.isLoading && query.data) {
      if (query.data.length > 0) {
        const tmp: { [key: string]: number } = {}
        for(const datum of query.data) {
          if(!tmp[datum.title]) {
            tmp[datum.title] = 0
          }
          tmp[datum.title] += datum.elapsedTime
        }

        const result: Todo[] = Object.entries(tmp).map((entry) => {
          return {title: entry[0], isDone: true, elapsedTime: entry[1]}
        })

        console.log(result)
        setPiData(result)
      }
    }
  }, [query.isLoading, query.data])



  if(query.isLoading) return (<>Loading...</>)

  return (
    <Container>
      <Main>
        <HtmlHead title={'Timer TODO'} />

        <Nav>
          <li><Link href="/todoList">Todoリスト</Link></li>
        </Nav>

        <Title>{format(today, 'Y/MM')}<hr /></Title>
        <p>前月へ</p>
        <p>次月へ</p>
        <br />
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

        <PieChart width={400} height={400}>
          <Pie
            data={piData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={180}
            fill="#8884d8"
            dataKey="elapsedTime"
          >

            {piData.map((entry, index) => (
              <>
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              </>
            ))}
          </Pie>
        </PieChart>
      </Main>
    </Container>
  )
}