import { atom, useAtom } from 'jotai'

type ChartType = 'bar' | 'pie'

const chartTypeAtom = atom<ChartType>('bar')

export const useChartType = () => useAtom(chartTypeAtom)
