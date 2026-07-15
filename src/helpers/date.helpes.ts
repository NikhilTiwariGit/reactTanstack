export function getYearsDifference(date1: string | Date, date2: string | Date): number {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  let years = d2.getFullYear() - d1.getFullYear();
  const months = d2.getMonth() - d1.getMonth();
  const days = d2.getDate() - d1.getDate();

  // Adjust if the anniversary hasn't occurred yet in the later year
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  return years;
}