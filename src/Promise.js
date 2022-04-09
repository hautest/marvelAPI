const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("에러에러에러");
      resolve([1, 2, 3, 4, 5]);
    }, 500);
  });
};

// 진행중, 완료, 에러

let dataArr = [];
let dataArr2 = [];

const getData = async () => {
  try {
    const arr = await fetchData();

    dataArr = arr;
    dataArr2 = arr.map((v) => v * 2);
  } catch (error) {
    console.log(error);
  }

  return "끝";
};

console.log(getData());
