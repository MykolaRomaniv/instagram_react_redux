import { IPost } from "App/components/Posts/Post";

export default (arr: IPost[], id: number) => arr.filter((item) => item.id !== id)
