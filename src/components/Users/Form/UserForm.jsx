// import React from "react";


// const UserForm = (
//   { 
//     userFirstName, 
//     userLastName, 
//     userNumber, 
//     handleChange, 
//     handleSubmit,
//     buttonText
//   }) => {

//   return (
//     <div className="container">
//     <input
//       className="userinput"
//       onChange={handleChange}
//       value={userFirstName}
//       type="text"
//       placeholder="First Name"
//       name="userFirstName"
//       required
//     />
//     <input
//       className="userinput"
//       onChange={handleChange}
//       value={userLastName}
//       type="text"
//       placeholder="Last Name"
//       name="userLastName"
//       required
//     />
//     <input
//       className="userinput"
//       onChange={handleChange}
//       value={userNumber}
//       type="number"
//       placeholder="Contact Number"
//       name="userNumber"
//       required
//       />
//       <button
//         onClick={handleSubmit}
//         >
//           {buttonText}
//       </button>
//     </div>
    
//   );
// }

// export default UserForm;

import React from 'react';
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import * as Styled from "../Form/UserForm.styles"

 
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
        <div>
            <h1>User Details</h1>
        </div>
        <Styled.Container>
            
            <form onSubmit={handleSubmit}>
                <Styled.InputDiv>
                    <label htmlFor="userFirstName">First Name</label>
                    <input
                      id="userFirstName"
                      name="userFirstName"
                      type="userFirstName"
                      onChange={handleChange}
                      value={userFirstName}
                    />
                </Styled.InputDiv>

                <Styled.InputDiv>
                <label htmlFor="userLastName">First Name</label>
                    <input
                      id="userLastName"
                      name="userLastName"
                      type="userLastName"
                      onChange={handleChange}
                      value={userLastName}
                    />
                </Styled.InputDiv>
                
                <Styled.InputDiv>
                  <label htmlFor="userNumber">First Name</label>
                      <input
                        id="userNumber"
                        name="userNumber"
                        type="userNumber"
                        onChange={handleChange}
                        value={userNumber}
                      />
                </Styled.InputDiv>
            
                <button type="submit">{buttonText}</button>
            </form>
        </Styled.Container>
        </>
    )
};

export default UserForm;

