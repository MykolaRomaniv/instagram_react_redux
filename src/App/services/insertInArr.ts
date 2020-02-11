import { IPost } from "App/components/Posts/Post"

export default (arr: string[] | IPost[], item: string, index: number) => {
  const newArr = arr.slice()
  newArr.splice(index, 0, item)
  return newArr
}
