import React from 'react'

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
    {skills.map(({ name, logo }) => (
      <div key={name} className="flex flex-col items-center">
        <img src={logo} alt={name} className="h-12 w-12 object-contain" />
        <span className="mt-2 text-sm">{name}</span>
      </div>
    ))}
  </div>
)

export default SkillGrid
