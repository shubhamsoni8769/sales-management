import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import TextField from "../common-component/TextField";
import CompanyHsnCodeTable from "./companyHsnCodeTable";

const CompanyNameTable = () => {
    const [companyNameList, setComapanyListValue] = useState(['']);

    const appendNameInArray = (newValue: string) => {
        setComapanyListValue(prevArray => [...prevArray, newValue]);
    }
    const itemDeleted = (i: number) => {
        setComapanyListValue((prevArr) => prevArr.filter((element,index) => i !== index ))
    }
    const addCompanyName = (form: { companyName: string; }) => {
        console.log(form);
        appendNameInArray(form.companyName)
    }
    return (
        <>
            <Formik initialValues={{
                companyName: ''
            }}

                onSubmit={(values: any) => addCompanyName(values)}>
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
                            type="submit"
                            variant="contained"
                        > Add Company Name </Button>
                    </Form>
                )}
            </Formik>
            <CompanyHsnCodeTable companyNameList={companyNameList} deleteItemEvent={itemDeleted} />
        </>

    );
};


export default CompanyNameTable;