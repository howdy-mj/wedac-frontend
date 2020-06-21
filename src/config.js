// 공통으로 사용되는 함수
// ex. API 주소, 이미지 url 등

export const SH = `http://10.58.7.3:8000`;
export const YE = `http://10.58.3.138:8000`;

export const addComma = (price) => {
  if (price > 999) {
    return ("" + price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  } else {
    return price;
  }
};
