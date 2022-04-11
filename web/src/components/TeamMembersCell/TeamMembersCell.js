import Member from '../Member/Member'

// export const QUERY = gql`
//   query TeamMembersQuery {
//     teamMembers {
//       id
//       name
//       role
//       imageUrl
//       twitterUrl
//       linkedinUrl
//     }
//   }
// `
export const QUERY = gql`
  query FindTeamMembers {
    teamMembers {
      id
      name
      role
      imageUrl
      twitterUrl
      linkedInURL
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teamMembers }) => {
  return (
    <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
      {teamMembers.map((teamMember) => (
        <Member key={teamMember.id} teamMember={teamMember} />
      ))}
    </ul>
  )
}
