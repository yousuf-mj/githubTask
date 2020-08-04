import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Button from "../Button";

import "./Form.scss";

interface IValidationErrors {
    username?: string;
}
interface ISubmitValues {
    username?: string;
    results?: any;
}
const validate = (values: any) => {
    const errors: IValidationErrors = {};

    if (!values.username) {
        errors.username = "Username is required";
    }

    return errors;
};

const handleOnSubmit = (values: ISubmitValues, actions: any) => {
    const username = values.username || "";

    const url = process.env.REACT_APP_API_URL + `/api/user`;
    axios
        .post(url, { username })
        .then((response) => {
            actions.setSubmitting(false);
            return response.data;
        })
        .catch((error) => {
            actions.setSubmitting(false);
            alert(error.response.data.error);
        });
};

const SimpleForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        validate,
        onSubmit: handleOnSubmit,
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username *</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? (
                    <div className="form-error">{formik.errors.username}</div>
                ) : null}
                <Button />
            </form>
        </div>
    );
};

export default SimpleForm;
