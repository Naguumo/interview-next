import { atom, useAtom } from 'jotai'

export type UserDataType = {
  name: string
  value: number
}

const userDataAtom = atom<UserDataType[]>([
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
  { name: 'E', value: 150 },
  { name: 'F', value: 700 },
])

export const useUserData = () => {
  const [userData, setUserData] = useAtom(userDataAtom)

  const addRow = (data: UserDataType) => {
    setUserData((prev) => {
      prev.push(data)
      return prev
    })
  }

  const deleteRow = (row: number) => {
    setUserData((prev) => {
      prev.splice(row, 1)
      return prev
    })
  }

  return { userData, addRow, deleteRow }
}
