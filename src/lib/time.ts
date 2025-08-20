export function getTimeOfDay(date: Date = new Date()): 'sunrise' | 'day' | 'sunset' | 'night' {
  const hour = date.getHours();

  if (hour >= 5 && hour < 7) {
    return 'sunrise';
  }
  if (hour >= 7 && hour < 18) {
    return 'day';
  }
  if (hour >= 18 && hour < 20) {
    return 'sunset';
  }
  return 'night';
}
