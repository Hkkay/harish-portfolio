import React from 'react'

const ExperienceCard = ({ role, company, period, location, bullets }) => (
  <div className="border-l-4 border-green-400 pl-4 mb-8">
    <h3 className="text-xl font-semibold">{role} · {company}</h3>
    <p className="text-sm text-gray-400">{location} | {period}</p>
    <ul className="list-disc ml-5 mt-2 space-y-1">
      {bullets.map((b, idx) => <li key={idx}>{b}</li>)}
    </ul>
  </div>
)

export default ExperienceCard
