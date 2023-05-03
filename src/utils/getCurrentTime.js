const getCurrentTime = () => {
  const currentTime = new Date().toLocaleTimeString('ru-RU').split(':')[0];

  return currentTime;
};

export default getCurrentTime;
