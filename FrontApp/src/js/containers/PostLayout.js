import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../actions";
import { POSTS } from "../constants";
import { Outlet } from "react-router-dom";


export const PostLayout = ({ }) => {

    const { processingMessage, data } = useSelector((state) => state.postsReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        console.log('PostLayout - request post data')
        await request(dispatch, POSTS)
        return null
    }, []);

    return processingMessage != null ? (<div>{processingMessage}</div>) : (<Outlet />)
}
