const monthLookup = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
};

const parseMonthYear = (value) => {
    if (value instanceof Date) return value;

    const [month, year] = String(value).trim().split(/\s+/);
    const monthIndex = monthLookup[month.slice(0, 3).toLowerCase()];

    if (monthIndex === undefined || !year) {
        return new Date(value);
    }

    return new Date(Number(year), monthIndex, 1);
};

export function getDuration(start, end) {
    const startDate = parseMonthYear(start);
    const endDate = String(end).toLowerCase() === 'present'
        ? new Date()
        : parseMonthYear(end);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const parts = [];
    if (years > 0) {
        parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    }
    if (months > 0) {
        parts.push(`${months} mo${months > 1 ? 's' : ''}`);
    }

    return parts.join(' ') || 'Less than 1 mo';
}
