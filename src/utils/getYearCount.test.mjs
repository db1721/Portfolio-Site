import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getYearCount } from './getYearCount.mjs';

const originalTimeZone = process.env.TZ;

test('counts completed calendar years across time zones', () => {
  try {
    for (const zone of ['UTC', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo']) {
      process.env.TZ = zone;

      for (const [start, today, expected] of [
        ['2011-12-15', '2026-10-22', 14],
        ['2011-12-15', '2026-12-14', 14],
        ['2011-12-15', '2026-12-15', 15],
        ['2021-11-01', '2026-10-22', 4],
        ['2021-11-01', '2026-10-31', 4],
        ['2021-11-01', '2026-11-01', 5],
        ['2021-11-01', '2026-11-02', 5],
        ['2015-01-01', '2026-12-31', 11],
        ['2015-01-01', '2027-01-01', 12],
        ['2020-02-29', '2024-02-28', 3],
        ['2020-02-29', '2024-02-29', 4],
        ['2020-02-29', '2025-02-28', 4],
        ['2020-02-29', '2025-03-01', 5],
      ]) {
        assert.equal(
          getYearCount(start, new Date(`${today}T00:00:00`)),
          expected,
          `${zone}: ${start} to ${today}`,
        );
      }
    }
  } finally {
    if (originalTimeZone === undefined) {
      delete process.env.TZ;
    } else {
      process.env.TZ = originalTimeZone;
    }
  }
});

test('returns zero for dates that have not passed', () => {
  const now = new Date('2026-10-22T12:00:00');

  assert.equal(getYearCount('2026-10-22', now), 0);
  assert.equal(getYearCount('2027-01-01', now), 0);
});

test('rejects invalid or ambiguous dates', () => {
  for (const date of [null, undefined, '', 'invalid', '11/01/2021', '2026-02-29', '2021-13-01']) {
    assert.equal(getYearCount(date), null);
  }

  assert.equal(getYearCount('2021-11-01', new Date('invalid')), null);
});
