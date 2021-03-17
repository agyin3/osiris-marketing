const formatPhoneNum = (num, data) => {
  num = removeNonNums(num);
  if (num.length < data.phone.length) {
    return num.length === 1 ? "" : num;
  } else if (num.length === 1) {
    num = "(" + num;
  } else if (num.length === 4) {
    num += ")";
  } else if (num.length === 5) {
    num = num.slice(0, 4) + ")";
  } else if (num.length === 8) {
    num += "-";
  } else if (num.length === 9) {
    num = num.slice(0, 8) + "-";
  }
  return num;
};
const removeNonNums = (num) => {
  if (Number.isNaN(parseInt(num[num.length - 1])))
    num = num.slice(0, num.length - 1);

  return num;
};

export default formatPhoneNum;
