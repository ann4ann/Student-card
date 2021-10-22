export function ageEnding(age) {
  const numEnding = age % 10;
  if (numEnding === 1) {
    return "год";
  } else if (numEnding < 5 && numEnding > 1) {
    return "года";
  } else {
    return "лет";
  }
}
