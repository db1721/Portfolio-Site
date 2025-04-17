export function getDuration(start, end) {
    const startDate = new Date(start)
    const endDate = end.toLowerCase() === 'present'
        ? new Date()
        : new Date(end)

    let years = endDate.getFullYear() - startDate.getFullYear()
    let months = endDate.getMonth() - startDate.getMonth()

    // if we’re “before” the anniversary this year, subtract one year
    if (months < 0) {
        years--
        months += 12
    }

    const parts = []
    if (years > 0) {
        parts.push(`${years} yr${years > 1 ? 's' : ''}`)
    }
    if (months > 0) {
        parts.push(`${months} mo${months > 1 ? 's' : ''}`)
    }

    return parts.join(' ')
}
