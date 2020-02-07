export default (arr, newItem) =>
  arr.map((item) => {
    return item.id === newItem.id
      ? {
          ...newItem,
        }
      : item
  })
