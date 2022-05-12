import { BugsDataRow, BugsDataType } from '@lib/agora/useBugsData'
import { useEffect, useMemo, useState } from 'react'
import { SortButton } from './SortButton'

type BugsDisplayProps = {
  bugs: BugsDataType
}

const sortFunctions: {
  [key: string]: (a: BugsDataRow, b: BugsDataRow) => number
} = {
  Id: (a, b) => a.Id - b.Id,
  Title: (a, b) => a.Title.localeCompare(b.Title),
  Created: (a, b) =>
    new Date(a.Created).valueOf() - new Date(b.Created).valueOf(),
  Severity: (a, b) => a.Severity - b.Severity,
  Priority: (a, b) => {
    const priorityVals = {
      LOW: 1,
      MEDIUM: 2,
      HIGH: 3,
    }
    return priorityVals[a.Priority] - priorityVals[b.Priority]
  },
}

export const BugsDisplay: React.FC<BugsDisplayProps> = ({ bugs }) => {
  const [sortType, setSortType] = useState<string>()
  const [reverse, setReverse] = useState(false)

  const internalBugList = useMemo<BugsDataType>(() => {
    if (!sortType) return bugs
    const sorted = bugs.sort(sortFunctions[sortType])
    return reverse ? sorted.reverse() : sorted
  }, [sortType, reverse, bugs])

  // Resets reverse every time sortType is changed
  useEffect(() => {
    setReverse(false)
  }, [sortType])

  return (
    <table>
      <thead>
        <tr>
          <SortButton
            onClick={() => {
              setSortType('Id')
              setReverse((r) => !r)
            }}
            active={sortType === 'Id'}>
            Id
          </SortButton>
          <SortButton
            onClick={() => {
              setSortType('Title')
              setReverse((r) => !r)
            }}
            active={sortType === 'Title'}>
            Title
          </SortButton>
          <SortButton
            onClick={() => {
              setSortType('Created')
              setReverse((r) => !r)
            }}
            active={sortType === 'Created'}>
            Created
          </SortButton>
          <SortButton
            onClick={() => {
              setSortType('Severity')
              setReverse((r) => !r)
            }}
            active={sortType === 'Severity'}>
            Severity
          </SortButton>
          <SortButton
            onClick={() => {
              setSortType('Priority')
              setReverse((r) => !r)
            }}
            active={sortType === 'Priority'}>
            Priority
          </SortButton>
        </tr>
      </thead>
      <tbody>
        {internalBugList.map((bug) => (
          <tr key={bug.Id}>
            <td>{bug.Id}</td>
            <td>{bug.Title}</td>
            <td>{new Date(bug.Created).toLocaleDateString()}</td>
            <td>{'★'.repeat(bug.Severity)}</td>
            <td>{bug.Priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
