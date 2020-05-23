const replaceBetween = (rawString, targetString, startIndex, endIndex) => {
  return rawString.substring(0, startIndex) + targetString + rawString.substring(endIndex + 1)
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

const partialHidden = (rawValue = '', start, count) => {
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
}

module.exports = {
  mobile(rawValue = '') {
    if (rawValue.length < 7) {
      return rawValue
    }
    let prefix = ''
    let newValue = ''
    if (rawValue.indexOf('-') !== -1) {
      prefix = rawValue.split('-')[0]
      newValue = rawValue.split('-')[1]
    } else {
      newValue = rawValue
    }

    const privacyValue = replaceBetween(newValue, '****', 3, 6)
    if (prefix) {
      return [prefix, privacyValue].join('-')
    } else {
      return [privacyValue].join('-')
    }
  },
  email(rawEmail = '') {
    if (!rawEmail) return rawEmail
    const userName = rawEmail.split('@')[0]
    const suffix = rawEmail.split('@')[1]
    let holder = '*'.repeat(userName.length)

    if (userName.length > 2) {
      holder = userName.substring(0, 2)
      holder += '*'.repeat(userName.length - 2)
    }
    return `${holder}@${suffix}`
  },
  name(rawName = '') {
    if (!rawName) return rawName
    if (/[a-z]/i.test(rawName)) {
      const nameParts = flatten(rawName.split(' '))
      return nameParts.length === 1 ? '*' : `*${nameParts[nameParts.length - 1]}`
    } else {
      return rawName.length === 1 ? '*' : `*${rawName.slice(-1, 1)}`
    }
  },
  all(rawValue = '') {
    return '*'.repeat(rawValue.length)
  },
  idCard(rawIdCard = '') {
    return partialHidden(partialHidden(rawIdCard, 3, 3), 8, 6)
  },
}
