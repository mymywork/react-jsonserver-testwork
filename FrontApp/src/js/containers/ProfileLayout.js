import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../actions";
import { PROFILE } from "../constants";
import {Outlet} from "react-router-dom";

export const ProfileLayout = ({ }) => {

    const { processingMessage } = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        console.log('requests')
        await request(dispatch, PROFILE)
        return null
    }, []);

    return processingMessage != null ? (<div>{processingMessage}</div>)  : (<Outlet />)
}
