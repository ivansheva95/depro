import { doc, getDoc } from "firebase/firestore"
import { db, storage } from "./config"
import { ref, listAll, getDownloadURL } from "firebase/storage"

const getContent = async ( path: string, pathSegments: string) => {
  try {
    const contentRef = doc(db, path, pathSegments)
    const content = await getDoc(contentRef)
    if(!content.exists()) {
      throw new Error('No such document!')
    }
    return content.data()
  } catch (error) {
    console.error((error as Error).message)
  } 
}

const getContentWithImage = async (path: string, pathSegments: string) => {
  const content = await getContent(path, pathSegments)
  const images = await getImages(`${path}/${pathSegments.split('-')?.[0]}`)
  const contentWithImage = content?.cards.map((item: any) => {
    const image = images?.find((image) => image.includes(`${item.id}.`))
    return {
      ...item,
      image
    }
  })
  return contentWithImage
}

const getImages = async (url: string) => {
  try {
    const imagesRef = ref(storage, url)
    const response = await listAll(imagesRef)
    const images = await Promise.all(response.items.map(item => getDownloadURL(item)))
    return images
  } catch (error) {
    console.error((error as Error).message)
  }
}

const getImage = async (url: string) => {
  try {
    const imageRef = ref(storage, url)
    const image = await getDownloadURL(imageRef)
    return image
  } catch (error) {
    console.error((error as Error).message)
  }
}

export const firebaseApi = {
  getContent,
  getContentWithImage,
  getImages
}
