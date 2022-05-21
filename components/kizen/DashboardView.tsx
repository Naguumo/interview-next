import { Heading, useColorModeValue } from '@chakra-ui/react'
import { useChartType } from '@lib/kizen/useChartType'
import { useUserData } from '@lib/kizen/useUserData'
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from 'recharts'

export const DashboardView = () => {
  const fillColor = useColorModeValue('#111', '#EEE')
  const [chartType] = useChartType()
  const { userData } = useUserData()
  return (
    <>
      <Heading margin={5}>Dashboard</Heading>
      <ResponsiveContainer minHeight={500}>
        {chartType === 'bar' ? (
          <BarChart data={userData}>
            <XAxis dataKey='name' />
            <YAxis />
            <Bar dataKey='value' fill={fillColor} />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              dataKey='value'
              data={userData}
              outerRadius={150}
              fill={fillColor}
              label
            />
          </PieChart>
        )}
      </ResponsiveContainer>
    </>
  )
}

export default DashboardView
