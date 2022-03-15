import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { request, removeProfileWithPosts } from "../actions"
import { POSTS, PROFILE } from "../constants"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const ProfileView = ({ }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    let params = useParams()
    const profile = useSelector((state) => state.profileReducer.data.filter(x => x.id == params.id)[0])
   
    const deleteProfile = async () => {
        let status = await removeProfileWithPosts(dispatch, profile)
        if ( status ) {
        await request(dispatch, POSTS)
        await request(dispatch, PROFILE)
        navigate("/profile")
        }
    }

    if ( !profile ) return ""
    return (
    <React.Fragment>
        <h1>Profile id = {profile.id}.</h1>
        <span>Name:</span><span>{profile.name}</span><br/>
        <button type="button" onClick={deleteProfile}>Delete</button>
    </React.Fragment>)
}
