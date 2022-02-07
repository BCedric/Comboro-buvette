import React, { useEffect, useState } from 'react'
import moment from 'moment'
import AfficheurValeur from './AfficheurValeur'
import gif from './giphy.webp'

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

  const [willOpen, setwillOpen] = useState(true)
  const [counter, setCounter] = useState({})
  const [displayGif, setDisplayGif] = useState(false)

  const calculateCounter = () => {
    const date = moment()
    if (openDate.diff(date, 'seconds') === 0) {
      setDisplayGif(true)
    } else {
      if (date > openDate && date < closeDate) {
        setwillOpen(false)
        setCounter(getDateDiffStr(date, closeDate))
      } else if (date > closeDate) {
        const openDateNextYear = moment()
          .year(parseInt(moment().format('YYYY')) + 1)
          .month(7)
          .startOf('month')
          .day('Friday')
          .hour(11)
          .minutes(0)
          .seconds(0)
        setwillOpen(true)
        setCounter(getDateDiffStr(date, openDateNextYear))
      } else {
        setwillOpen(true)
        setCounter(getDateDiffStr(date, openDate))
      }
    }
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

    return {
      mois: months,
      jours: days,
      heures: hours,
      minutes: minutes,
      secondes: seconds
    }
  }

  useEffect(() => {
    calculateCounter()
    setInterval(() => {
      calculateCounter()
    }, 1000)
  }, [])

  return (
    <div className="counter">
      {displayGif ? (
        <img src={gif} alt="gif" />
      ) : (
        <>
          <span className="will-open-label">
            {willOpen ? 'La buvette ouvrira dans' : 'La buvette fermera dans'}
          </span>
          <div className="count-area">
            {Object.keys(counter).map(
              (key) =>
                (key === 'secondes' ||
                  key === 'minutes' ||
                  counter[key] > 0) && (
                  <AfficheurValeur
                    key={key}
                    valeur={counter[key]}
                    unite={key}
                  />
                )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Counter
