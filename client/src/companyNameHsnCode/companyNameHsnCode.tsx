import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import TextField from "../common-component/TextField";

const CompanyNameTable = () => {
    return (
        <Formik initialValues={{
            companyName: ''
        }}

            onSubmit={(values: any) => { }}>
            {({ values, setFieldValue, touched }) => (
                <Form>
                    <Field
                        name={'companyName'}
                        component={TextField}
                        label="Company Name"
                        index="0"
                        id="companyName"
                    />
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => addCompanyName(values)}
                    > Add Company Name </Button>
                </Form>
            )}
        </Formik>
    );
};

const addCompanyName = (form: { companyName: string; }) => {
    console.log(form);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: form.companyName,
            body: form,
            userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export default CompanyNameTable;