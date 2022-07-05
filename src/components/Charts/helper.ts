export const formatNumber = (number: number) => {
  return Number(number.toFixed(2));
};

export const commarize = (num: number) => {
  const min = 1e3;
  // Alter numbers larger than 1k
  if (num >= min) {
    var units = ["k", "M", "B", "T"];

    var order = Math.floor(Math.log(num) / Math.log(1000));

    var unitname = units[order - 1];
    var num = Math.floor(num / 1000 ** order);

    // output number remainder + unitname
    return num + unitname;
  }

  // return formatted original number
  return num.toLocaleString();
};

export const formatDate = (tick: string) => {
  const tickDate = new Date(tick);
  return tickDate.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
  });
};
