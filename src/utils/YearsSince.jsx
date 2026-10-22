import { useEffect, useState } from 'react';
import { getYearCount } from './getYearCount.mjs';

function YearsSince({ date }) {
    const [today, setToday] = useState(null);

    useEffect(() => {
        let timer;

        const refresh = () => {
            const now = new Date();
            setToday(now);

            const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            window.clearTimeout(timer);
            timer = window.setTimeout(refresh, nextMidnight.getTime() - now.getTime());
        };

        refresh();
        window.addEventListener('focus', refresh);

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('focus', refresh);
        };
    }, []);

    return <span aria-busy={today === null}>{today ? getYearCount(date, today) ?? 'N/A' : '...'}</span>;
}

export default YearsSince;
