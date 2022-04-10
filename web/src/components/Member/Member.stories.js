import Member from './Member'
import { standard } from '../TeamMembersCell/TeamMembersCell.mock'

export const generated = () => {
  return <Member teamMember={standard().teamMembers[0]} />
}

export default { title: 'Components/Member' }
