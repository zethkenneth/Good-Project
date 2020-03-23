import React, { Component } from 'react';
import { Container, Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// https://jaredpalmer.com/formik/docs/tutorial


const initialValues = {
    text: '',
    email: '',
    password: ''
};

class Test extends Component {
    render() {
        return (
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={
                        object({
                            text: string().required().min(2).max(100),
                            email: string().email().required(),
                            password: string().required().min(8).max(40)
                        })
                    }
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form>
                            <FormGroup>
                                <Label for="text">Text</Label>
                                <Field  id="text" name="text" as={Input} placeholder="Text" type="text" />
                                <FormFeedback>{<ErrorMessage name="text" />}</FormFeedback>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Field invalid={touched.email && Boolean(errors.email)} id="email" name="email" as={Input} placeholder="Email" type="email" />
                                <FormFeedback>{<ErrorMessage name="email" />}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Password</Label>
                                <Field invalid={touched.password && Boolean(errors.password)} id="password" name="password" as={Input} placeholder="Password" type="password" />
                                <FormFeedback>{<ErrorMessage name="password" />}</FormFeedback>
                            </FormGroup>
                        
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>

                        <pre>{JSON.stringify(errors, null, 4)}</pre>
                        <pre>{JSON.stringify(values, null, 4)}</pre>

                        </Form>
                    )}
                </Formik>

                {/* <Form>
                    <FormGroup>
                        <Label for="exampleText">Text</Label>
                        <Input type="text" name="textName" id="exampleText" placeholder="Text placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="emailName" id="exampleEmail" placeholder="Email placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="passwordName" id="examplePassword" placeholder="Password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option two can be something else and selecting it will deselect option one
                        </Label>
                        </FormGroup>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form> */}
            </Container>
        );
    }
}

export default Test;