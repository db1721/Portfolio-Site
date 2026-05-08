const getYearCount = (date) => {
    const from = new Date(date);
    const now = new Date();

    let years = now.getFullYear() - from.getFullYear();
    const monthDiff = now.getMonth() - from.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < from.getDate())) {
        years -= 1;
    }

    return years;
};

function YearsSince({ date }) {
    return <span suppressHydrationWarning>{getYearCount(date)}</span>;
}

export default YearsSince;
