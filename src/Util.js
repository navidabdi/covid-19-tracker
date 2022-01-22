export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const HumanTime = (timestamp) => {
  let dateObject = new Date(timestamp);
  const finalDate = `
  ${dateObject.toLocaleString('en-US', {
    month: 'long',
  })} ${dateObject.toLocaleString('en-US', {
    day: 'numeric',
  })}, ${dateObject.toLocaleString('en-US', { year: 'numeric' })}`;
  return finalDate;
};
