const DATE_UNITS = {
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
}

const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

export function getTimeAgo(timestamp) {
  const rtf = new Intl.RelativeTimeFormat('es-ES', {
    numeric: 'auto',
    style: 'long',
  })

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUnitAndValueDate(secondsElapsed)

  return rtf.format(value, unit)
}
