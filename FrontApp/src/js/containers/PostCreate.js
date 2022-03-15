import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../actions";
import { BASEURL, PROFILE, POSTS } from "../constants";
import axios from "axios";
import { Field, Form, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export const PostCreate = ({ }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { data, loaded } = useSelector((state) => state.profileReducer);
 
  useEffect(async () => {
    console.log('requests')
    if (!loaded) await request(dispatch, PROFILE)
    return null
  }, []);

  const formik = useFormik({
    initialValues: { author: '', title: '' },
    validationSchema: SignupSchema,
    onSubmit: async (values, actions) => {
      try {
        console.log('Submit = ', values)
        let result = await axios.post(BASEURL + "posts", values)
        await request(dispatch, POSTS)
        navigate('/post')
      } catch (e) {
        alert('fail')
      }
    }
  });

  return (
    <React.Fragment>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>

          <h1>Create post.</h1>
          <span>Title:</span>
          <input name="title" value={formik.values.title} onChange={formik.handleChange} />
          <br />
          {formik.errors.title ? <div style={{ color: 'red' }}>{formik.errors.title}</div> : null}
          <br />

          <span>Author:</span>

          <Field as="select" name="author">
            <option value="">Не выбрано</option>
            {data && data.map(x => (<option key={x.id} value={x.name}>{x.name}</option>))}
          </Field>
          <br />
          {formik.errors.author ? <div style={{ color: 'red' }}>{formik.errors.author}</div> : null}
          <br />
          <button type="submit">Create</button>
        </Form>
      </FormikProvider>
    </React.Fragment>)
}
