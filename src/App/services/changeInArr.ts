import { IPost } from 'App/components/Posts/Post'

export default (arr: IPost[], newItem: IPost) =>
  arr.map((item) => {
    return item.id === newItem.id
      ? {
          ...newItem,
        }
      : item
  })
