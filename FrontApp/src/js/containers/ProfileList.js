import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

export const ProfileList = ({ }) => {
    const { data } = useSelector((state) => state.profileReducer);

    console.log("ProfileList data = ",data)
    return (
    <React.Fragment>
        <h1>Profile.</h1>
        { data.map((x,i) => <Link to={"/profile/"+x.id} key={i}><div>{x.name}</div></Link> )}
    </React.Fragment>)
}
