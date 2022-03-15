import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeEntities } from "../actions";
import { POSTS } from "../constants"
import { Field, Form, useFormik, FormikProvider } from 'formik';

export const PostList = ({ }) => {
  const { data } = useSelector((state) => state.postsReducer)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { },
  });

  const deleteEntity = () => {
    removeEntities(dispatch, POSTS, formik.values.list.map(x => parseInt(x)))
  }

  return (
    <React.Fragment>
      <h1>Posts.</h1>

      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          {data.map((x, i) => 
            <React.Fragment key={i}>
                <Field type="checkbox" name={"list"} value={""+x.id} /><Link to={"/post/" + x.id} key={i}><span>{x.title}</span></Link><br/>
            </React.Fragment>
          )}
        </Form>
      </FormikProvider>

      <br />
      <Link to="create"><button type="button">Create</button></Link>&nbsp;
      <button type="button" onClick={deleteEntity}>Delete</button>

    </React.Fragment>)
}
