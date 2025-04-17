import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders the number of full years since the given date.
 *
 * @param {{ date: string|Date }} props
 */
function YearsSince({ date }) {
    const from = new Date(date)
    const now = new Date()

    // Start with simple year difference…
    let years = now.getFullYear() - from.getFullYear()

    // …then subtract 1 if today's month/day is before the anniversary
    const monthDiff = now.getMonth() - from.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < from.getDate())) {
        years--
    }

    return <span>{years}</span>
}

YearsSince.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string
    ]).isRequired
}

export default YearsSince
