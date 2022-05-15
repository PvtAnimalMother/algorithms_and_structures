const quickSort = (array) => {
  if (array.length <= 1) {
    // если длина массива 1 или меньше, то возвращаем массив
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2); // индекс опорного элемента
  let pivot = array[pivotIndex]; // опорный элемент
  let less = []; // массив чисел меньше опорного
  let greater = []; // массив чисел больше опорного
  for (let i = 0; i < array.length; i++) {
    // если индекс итерации = индексу опорной точки - пропускаем итерацию
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      // если значение меньше опорного - добавляем  less
      less.push(array[i]);
    } else {
      greater.push(array[i]); // обратный случай
    }
  }
  // рекурсивно разворачиваем массивы и возвращаем
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
