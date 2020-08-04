import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import Button from "../Button";

import "./Form.scss";

interface IValidationErrors {
    username?: string;
}
const validate = (values: any) => {
    const errors: IValidationErrors = {};

    if (!values.username) {
        errors.username = "Username is required";
    }

    return errors;
};

const SimpleForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
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
    );
};

export default SimpleForm;
