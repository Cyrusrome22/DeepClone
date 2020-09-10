const deepClone = items => {
  if (items === null) return null
  if (items === undefined) return undefined
  if (Array.isArray(items) && !items.length) return []
  if (typeof items === 'object' && !Object.keys(items).length) return {}
  if (Array.isArray(items)) {
    return items.map(item => deepClone(item))
  }
  if (typeof items === 'object') {
    const newObj = {}
    for (const key in items) {
      newObj[key] = deepClone(items[key])
    }
    return { ...newObj }
  }
  return items
}

module.exports = deepClone
