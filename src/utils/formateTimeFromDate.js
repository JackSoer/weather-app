const formateTimeFromDate = (date, withoutLetters = false) => {
  const newTime = date.split(' ')[1];

  const newTimeNumber = Number(newTime.split(':')[0]);

  if (withoutLetters) {
    return newTimeNumber;
  }

  if (newTimeNumber < 12) {
    return newTime + ' A.M.';
  } else {
    return newTime + ' P.M.';
  }
};

export default formateTimeFromDate;
