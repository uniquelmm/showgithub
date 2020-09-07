const replaceLine = (data: string) =>
  data.replace(/_(\w)/g, (all: string, letter: string) => letter.toUpperCase());

// eslint-disable-next-line
export const transform = (data: any) => {
  // 属性值是对象的话
  if (data && data.constructor === Object) {
    // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数
    Object.keys(data).forEach((key) => {
      // 属性名如果有下划线
      if (/_/g.test(key)) {
        data[replaceLine(key)] = data[key];
        delete data[key];
      }

      data[replaceLine(key)] = transform(data[replaceLine(key)]);
    });
  }

  // 属性值是数组的话
  if (data instanceof Array) {
    data = data.map((item) => transform(item));
  }

  return data;
};
