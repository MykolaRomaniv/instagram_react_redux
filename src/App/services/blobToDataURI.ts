import { IImageUrl } from '../components/Posts/Post'

export default async (blob: Blob | null): Promise<IImageUrl> => {
  if (!blob) {
    return null
  }
  return new Promise((fulfill, reject) => {
    const reader = new FileReader()
    reader.onerror = (): void => reject(new Error())
    reader.onload = (): void => fulfill(reader.result)
    reader.readAsDataURL(blob)
  })
}
