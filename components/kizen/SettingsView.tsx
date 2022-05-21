import {
  Button,
  ButtonGroup,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useForceUpdate,
} from '@chakra-ui/react'
import { useChartType } from '@lib/kizen/useChartType'
import { useUserData } from '@lib/kizen/useUserData'
import React, { useState } from 'react'

const ChartTypeSettings = () => {
  const [chartType, setChartType] = useChartType()
  return (
    <ButtonGroup>
      <Button
        isActive={chartType === 'bar'}
        colorScheme='green'
        onClick={() => {
          setChartType('bar')
        }}>
        Bar Chart
      </Button>
      <Button
        isActive={chartType === 'pie'}
        colorScheme='green'
        onClick={() => {
          setChartType('pie')
        }}>
        Pie Chart
      </Button>
    </ButtonGroup>
  )
}

const DataSettings = () => {
  const { userData, addRow, deleteRow } = useUserData()
  const forceRefresh = useForceUpdate()
  const [addInput, setAddInput] = useState({
    name: '',
    value: 0,
  })

  return (
    <Table size='sm' colorScheme='cyan'>
      <Thead>
        <Tr>
          <Th textAlign='center'>Name</Th>
          <Th textAlign='center'>Value</Th>
          <Th textAlign='center'>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {userData.map((row, index) => (
          <Tr key={row.name + index}>
            <Td textAlign='center'>{row.name}</Td>
            <Td textAlign='center'>{row.value}</Td>
            <Td textAlign='center'>
              <Button
                colorScheme='yellow'
                variant='solid'
                isFullWidth
                onClick={() => {
                  deleteRow(index)
                  forceRefresh()
                }}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Td textAlign='center'>
            <Input
              value={addInput.name}
              onChange={(e) => {
                setAddInput((prev) => ({
                  ...prev,
                  name: (e.target as HTMLInputElement).value,
                }))
              }}
            />
          </Td>
          <Td textAlign='center'>
            <Input
              type='number'
              value={addInput.value}
              onChange={(e) => {
                setAddInput((prev) => ({
                  ...prev,
                  value: parseInt((e.target as HTMLInputElement).value, 10),
                }))
              }}
            />
          </Td>
          <Td textAlign='center'>
            <Button
              colorScheme='blue'
              variant='solid'
              isFullWidth
              onClick={() => {
                if (addInput.name !== '' && addInput.value > 0) {
                  addRow(addInput)
                  setAddInput({ name: '', value: 0 })
                }
              }}>
              Add
            </Button>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  )
}

export const SettingsView = () => {
  return (
    <>
      <Heading margin={5}>Chart Type</Heading>
      <ChartTypeSettings />
      <Heading margin={5}>User Data</Heading>
      <DataSettings />
    </>
  )
}

export default SettingsView
