// Alternative simpler version without cards
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  imageUrl: string,
  linkedIn: string
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Dr. Biju Jacob',
    role: 'CEO, Co-Founder',
    imageUrl: '/team/biju.png',
    linkedIn: "https://www.linkedin.com/in/biju-jacob-803243a/"
  },
  {
    name: 'Neeraj Kumar',
    role: 'CTO, Co-Founder',
    imageUrl: '/team/neeraj.png',
    linkedIn: "https://www.linkedin.com/in/neeraj-kumar-5960a5115/"
  }
]

export default function LeadershipTeam() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">The Leadership Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leadershipTeam.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4 space-y-2">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <Link
            href={member.linkedIn}
            className="flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/icons/linkedin-white.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="h-6 w-6 md:h-7 md:w-7 mt-2"
            />
          </Link>
          </div>
        ))}
      </div>
    </div>
  )
}