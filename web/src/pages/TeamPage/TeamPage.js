import TeamMembersCell from 'src/components/TeamMembersCell/TeamMembersCell'
import { MetaTags } from '@redwoodjs/web'

const TeamPage = () => {
  return (
    <>
      <MetaTags title="Team" description="Team page" />

      <div className="bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-300">
                Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
                lectus sit pretium egestas vel mattis neque.
              </p>
            </div>
            <TeamMembersCell />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
