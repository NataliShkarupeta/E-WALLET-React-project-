export function formatNumber(number) {
  const formattedNumber = Math.abs(number).toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true});
  const [integerPart, fractionalPart] = formattedNumber.split(",");
  return `${integerPart}.${fractionalPart}`;
}

export function formatNumberSaveMinus(number) {
  const formattedNumber = number.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true});
  const [integerPart, fractionalPart] = formattedNumber.split(",");
  return `${integerPart}.${fractionalPart}`;}

export const formatBalance = (balance) => {
  return `&#8372; ${formatNumberSaveMinus(balance)}`;
};
