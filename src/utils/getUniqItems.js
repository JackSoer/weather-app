const getUniqItems = (arr) => {
  const set = new Set();

  arr.forEach((item) => set.add(item.name));

  return Array.from(set);
};

export default getUniqItems;
