import { Set, Router, Route, Private } from '@redwoodjs/router'
import TeamMembersLayout from 'src/layouts/Admin/TeamMembersLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="team">
        <Set wrap={TeamMembersLayout}>
          <Route path="/admin/team-members/new" page={AdminTeamMemberNewTeamMemberPage} name="adminNewTeamMember" />
          <Route path="/admin/team-members/{id:Int}/edit" page={AdminTeamMemberEditTeamMemberPage} name="adminEditTeamMember" />
          <Route path="/admin/team-members/{id:Int}" page={AdminTeamMemberTeamMemberPage} name="adminTeamMember" />
          <Route path="/admin/team-members" page={AdminTeamMemberTeamMembersPage} name="adminTeamMembers" />
        </Set>
      </Private>

      <Route path="/team" page={TeamPage} name="team" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
