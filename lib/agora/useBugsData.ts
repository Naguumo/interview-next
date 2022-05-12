import axios from 'axios'
import useSWR, { useSWRConfig } from 'swr'

export type BugsDataRow = {
  Id: number
  Title: string
  Created: string // Date String
  Severity: 1 | 2 | 3 | 4 | 5 // 1 is highest, 5 is lowest
  Priority: 'LOW' | 'MEDIUM' | 'HIGH'
}

export type BugsDataType = BugsDataRow[]

const fetchBugsData = async (url: string) =>
  axios.get<BugsDataType>(url).then((res) => res.data)

export const useBugsData = () => {
  const url = '/api/agora/bugs'

  const { data, error } = useSWR(url, fetchBugsData)
  const { mutate } = useSWRConfig()

  const refetch = () => {
    mutate(url)
  }

  const uploadBugsData = (file: File) => {
    axios
      .post(url, file, { headers: { 'Content-Type': 'text/csv' } })
      .then(() => {
        refetch()
      })
  }

  return { bugs: data ?? [], error, refetch, uploadBugsData }
}
