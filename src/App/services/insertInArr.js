export default (arr, item, index) => {
  const newArr = arr.slice()
  newArr.splice(index, 0, item)
  return newArr
}
