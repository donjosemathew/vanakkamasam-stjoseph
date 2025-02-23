const getDayBasedInt = (day) => {
  // Implement your logic to convert day to an integer between 0 and 7
  return day % 8;
};

export const getImageForToday = () => {
  const today = new Date().getDate();
  const dayBasedInt = getDayBasedInt(today);
  const images = [
    require("../assets/images/1.jpeg"),
    require("../assets/images/2.jpeg"),
    require("../assets/images/3.jpeg"),
    require("../assets/images/4.jpeg"),
    require("../assets/images/5.jpeg"),
    require("../assets/images/6.jpeg"),
    require("../assets/images/7.jpeg"),
    require("../assets/images/8.jpeg"),
  ];
  const img = images[dayBasedInt];
  return img;
};
