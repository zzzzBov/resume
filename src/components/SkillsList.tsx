import React from 'react'

interface ISkill {
  highlight: boolean
  name: string
}

interface ISkillsList {
  skills: ISkill[]
}

export const SkillsList: React.SFC<ISkillsList> = ({
  skills
}) => (
  <>
    {skills.map(skill => (
      <li
        className={`
          Skill
          ${skill.highlight ? 'Skill-highlight' : ''}
        `}
        key={skill.name}>
        {skill.name}
      </li>
    ))}
  </>
)
