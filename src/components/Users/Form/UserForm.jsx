import React from 'react';
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import * as Styled from "../Form/UserForm.styles";
import Button from "../../Button/Button";
 
const UserForm = ({ 
      userFirstName, 
      userLastName, 
      userNumber, 
      handleChange, 
      handleSubmit,
      buttonText}) => {
    const formik = useFormik({
        initialValues: {
            userFirstName:'',
            userLastName:'',
            userNumber:'',
        },
        validationSchema: Yup.object({
            userFirstName: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
            userLastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            userNumber: Yup.number().required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
        <Styled.Container>
            <Styled.Title>User Details</Styled.Title>
        </Styled.Container>

        <Styled.Container>       
            <form onSubmit={handleSubmit}>
                <Styled.InputDiv>
                    <Styled.Label htmlFor="userFirstName">First Name</Styled.Label>
                    <Styled.Input
                      id="userFirstName"
                      name="userFirstName"
                      type="userFirstName"
                      onChange={handleChange}
                      value={userFirstName}
                    />
                </Styled.InputDiv>

                <Styled.InputDiv>
                <Styled.Label htmlFor="userLastName">First Name</Styled.Label>
                    <Styled.Input
                      id="userLastName"
                      name="userLastName"
                      type="userLastName"
                      onChange={handleChange}
                      value={userLastName}
                    />
                </Styled.InputDiv>
                
                <Styled.InputDiv>
                  <Styled.Label htmlFor="userNumber">First Name</Styled.Label>
                      <Styled.Input
                        id="userNumber"
                        name="userNumber"
                        type="userNumber"
                        onChange={handleChange}
                        value={userNumber}
                      />
                </Styled.InputDiv>
            
                <Button 
                  buttonColor="red"
                  type="submit" 
                  buttonText="Submit"
                />
            </form>
        </Styled.Container>
        </>
    )
};

export default UserForm;

