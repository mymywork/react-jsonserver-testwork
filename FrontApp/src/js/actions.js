import axios from "axios"
import { BASEURL, POSTS, PROFILE } from "./constants"

export const request = async (dispatch, entity) => {
  dispatch({
    type: entity.MESSAGE,
    processingMessage: "Loading data..."
  })
  try {
    let name = (entity == POSTS ? 'posts' : 'profile')

    const json = await axios.get(BASEURL + name)
    console.log(json)
    dispatch({
      type: entity.LOAD_SUCCESS,
      data: json.data,
      isError: false,
    })
  } catch (e) {
    dispatch({
      type: entity.MESSAGE,
      data: [],
      processingMessage: "Failed load posts.",
    })
  }
}

export const removeEntities = async (dispatch, entity, listId) => {
  dispatch({
    type: entity.MESSAGE,
    processingMessage: "Deleting posts...wait"
  })
  try {
    let name = (entity == POSTS ? 'posts' : 'profile')

    for (let i in listId) await axios.delete(BASEURL + name + "/" + listId[i])

    dispatch({
      type: entity.REMOVE,
      ids: listId,
    })

  } catch (e) {
    dispatch({
      type: entity.MESSAGE,
      processingMessage: "Error deleting message"
    })
  }
}

export const removeProfileWithPosts = async (dispatch, profile) => {
  dispatch({
    type: PROFILE.MESSAGE,
    processingMessage: "Deleting profile with posts....wait"
  })
  try {

    let json = await axios.get(BASEURL + "posts?author=" + profile.name)

    for (let i in json.data) await axios.delete(BASEURL + "posts/" + json.data[i].id)

    json = await axios.delete(BASEURL + "profile/" + profile.id)

    return true
  } catch (e) {
    dispatch({
      type: PROFILE.MESSAGE,
      processingMessage: "Error deleting message"
    })
    return false
  }
}