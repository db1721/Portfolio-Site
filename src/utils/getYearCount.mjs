export function getYearCount(date, now = new Date()) {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return null;
  }

  // Date-only strings otherwise parse as UTC and can shift to the previous day.
  const from = new Date(`${date}T00:00:00`);
  const [year, month, day] = date.split('-').map(Number);

  if (
    Number.isNaN(from.getTime()) ||
    Number.isNaN(now.getTime()) ||
    from.getFullYear() !== year ||
    from.getMonth() !== month - 1 ||
    from.getDate() !== day
  ) {
    return null;
  }

  let years = now.getFullYear() - year;
  const monthDiff = now.getMonth() - (month - 1);

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < day)) {
    years += 1;
  }

  return Math.max(0, years);
}
