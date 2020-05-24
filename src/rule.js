module.exports = {
  //  get fragment from raw string
  fragment(rawString, targetString, startIndex, endIndex) {
    return rawString.substring(0, startIndex) + targetString + rawString.substring(endIndex + 1)
  },

  // rules.partialHolder(rawValue = '', start, count)
  partialHolder(rawValue = '', start, count) {
    let targetString = ''
    const rawLength = rawValue.length
    let endIndex = null
    if (start && count) {
      endIndex = start + count
    }
    Array.from(rawValue).forEach((char, index) => {
      let shouldKeep = endIndex
        ? index < start || index >= endIndex
        : index === rawLength - 1 || index === rawLength - 2 || (rawLength >= 5 && index === 0)
      targetString += shouldKeep ? char : '*'
    })

    return targetString
  },
}
