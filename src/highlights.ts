interface IHighlights {
  [key: string]: boolean
}

export const getHighlights = (highlights?: string | string[]): IHighlights => {
  if (!highlights) {
    highlights = []
  }

  if (typeof highlights === 'string') {
    highlights = [highlights]
  }

  return highlights
    .map(list => list.split(','))
    .reduce((acc, list) => acc.concat(list), [])
    .reduce((obj, highlight) => {
      obj[highlight] = true
      return obj
    }, Object.create(null))
}
