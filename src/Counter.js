import React, { useEffect, useState } from 'react'
import moment from 'moment'

const Counter = () => {
  const openDate = moment()
    .year(moment().format('YYYY'))
    .month(7)
    .startOf('month')
    .day('Friday')
    .hour(11)
    .minutes(0)
    .seconds(0)

  const closeDate = openDate
    .clone()
    .add(3, 'days')
    .hour(6)
    .minutes(0)
    .seconds(0)

  const calculateCounter = () => {
    const date = moment()
    const diff = openDate.diff(date, 'seconds')
    if (date > openDate && date < closeDate) {
      return `la buvette fermera dans ${getDateDiffStr(date, closeDate)}`
    } else if (date > closeDate) {
      const openDateNextYear = moment()
        .year(parseInt(moment().format('YYYY')) + 1)
        .month(7)
        .startOf('month')
        .day('Friday')
        .hour(11)
        .minutes(0)
        .seconds(0)
      return `la buvette ouvrira dans ${getDateDiffStr(date, openDateNextYear)}`
    }
    return `La buvette ouvrira dans ${getDateDiffStr(date, openDate)}`
  }

  const getDateDiffStr = (startDate, endDate) => {
    const months = endDate.diff(startDate, 'months')
    const datePlusMonths = startDate.add(months, 'months')
    const days = endDate.diff(datePlusMonths, 'days')
    const datePlusDays = datePlusMonths.add(days, 'days')
    const hours = endDate.diff(datePlusDays, 'hours')
    const datePlusHours = datePlusDays.add(hours, 'hours')
    const minutes = endDate.diff(datePlusHours, 'minutes')
    const datePlusMinutes = datePlusDays.add(minutes, 'minutes')
    const seconds = endDate.diff(datePlusMinutes, 'seconds')

    return `${months > 0 ? `${months} mois` : ''} ${
      days > 0 ? `${days} jours` : ''
    } ${hours > 0 ? `${hours} heures` : ''}  ${
      minutes > 0 ? `${minutes} minutes` : ''
    } ${seconds} secondes`
  }

  const [counter, setCounter] = useState(calculateCounter())

  useEffect(() => {
    setInterval(() => {
      setCounter(calculateCounter())
    }, 1000)
  })

  return <div className="counter"> {counter}</div>
}

export default Counter
