const timeFormat = (time: number) => {
  const date = new Date(time * 1000);
  return date.toLocaleTimeString();
};

export default timeFormat;
