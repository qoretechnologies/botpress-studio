import { DatasetIssue, IssueComputationSpeed, LintingState } from '@botpress/nlu-client'
import { NluClient } from '../client'
import { issueGuard } from '../issues/guard'
import { poll } from '../polling'

interface Props {
  intent: string
  api: NluClient
  contentLang: string
}

const realtimeIssueSpeed: IssueComputationSpeed = 'fastest'

export const fetchIssues = async (props: Props) => {
  const modelId = await props.api.startLinting(props.contentLang, realtimeIssueSpeed)
  return poll<DatasetIssue<'E_000'>[]>(async () => {
    const linting: LintingState = await props.api.getLinting(modelId, realtimeIssueSpeed)
    if (linting.status !== 'linting' && linting.status !== 'linting-pending') {
      const relevantIssues = linting.issues.filter(issueGuard('E_000')).filter((i) => i.data.intent === props.intent)
      return { status: 'leave', data: relevantIssues }
    }
    return { status: 'stay' }
  }, 100)
}
