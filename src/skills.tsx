import React from 'react'
import ReactDOM from 'react-dom'

import querystring from 'querystring'

import { SkillsList } from './components'
import { getHighlights } from './highlights'

const skillsList = document.querySelector('.Skills_list')

if (!skillsList) {
  throw new Error('.Skills_list is required')
}

const qs = querystring.parse(location.search.slice(1))

const defaultHighlights =
  [...document.querySelectorAll('.Skill-highlight')]
    .map(node => node.textContent!.trim())

const highlights = getHighlights(qs.h || defaultHighlights)

const skills =
  [...document.querySelectorAll('.Skill')]
    .map(node => node.textContent!.trim())
    .map(name => ({
      highlight: highlights[name] || false,
      name
    }))

ReactDOM.render(
  <SkillsList skills={skills} />,
  skillsList
)
