const formateDate = (date) => {
  const today = new Date();
  const newDate = new Date(date);

  if (today.getDate() === newDate.getDate()) {
    const options = { day: 'numeric', month: 'short' };
    const formatedTodayDate = newDate.toLocaleString('en-US', options);

    return 'Today, ' + formatedTodayDate;
  }

  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formatedDate = newDate.toLocaleString('en-US', options);

  return formatedDate;
};

export default formateDate;
