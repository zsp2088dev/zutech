import Fuse from 'fuse.js'

export const getFilteredEntries = (keyword, entries) => {
  if (keyword.length === 0 || keyword === 'ALL') {
    return entries
  }

  const options = {
    threshold: 0.3,
    keys: ['title', 'tags'],
  }
  return new Fuse(entries, options).search(keyword)
}
