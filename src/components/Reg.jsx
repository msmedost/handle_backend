// // src/components/Reg.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const Reg = () => {
//   const [userPhoto, setUserPhoto] = useState(null);
//   const [companyLogo, setCompanyLogo] = useState(null);

//   const handleUserPhotoChange = (event) => {
//     setUserPhoto(event.currentTarget.files[0]);
//   };

//   const handleCompanyLogoChange = (event) => {
//     setCompanyLogo(event.currentTarget.files[0]);
//   };

//   const initialValues = {
//     ourServiceCity: "Kolkata",
//     zone: "North",
//     toliChapter: "Kolkata",
//     registerThroughReferenceNumber: "Not required",
//     yourReferenceNumber: "93311775951",
//     emailAddress: "john.doe@example.com",
//     password: "Password123",
//     fullName: "John Doe",
//     phoneNumber: "9876543210",
//     alternativePhoneNumber: "9876543211",
//     gender: "Male",
//     bloodGroup: "O+",
//     dateOfBirthDDMM: "01/01/1990",
//     dateOfAnniversaryDDMM: "05/10",
//     country: "India",
//     stateUT: "West Bengal",
//     city: "Kolkata",
//     postalPinCode: "700001",
//     organizationName: "ABC Corporation",
//     businessCategory: "Technology",
//     businessDescription: "We specialize in software development.",
//     officeAddress: "123, Park Street, Kolkata",
//     website: "https://example.com",
//     googleMapLink: "https://maps.google.com",
//     facebookLink: "https://facebook.com/example",
//     instagramLink: "https://instagram.com/example",
//     linkedinLink: "https://linkedin.com/company/example",
//     twitterLink: "https://twitter.com/example",
//     leaderShip: "CEO",
//     committee: "Marketing",
//     others: "Other information",
//     yearsInCurrentBusiness: "5 years",
//     currentBusinessSince: "2015",
//     branchesIfAny: "Branch A, Branch B",
//     majorProductsServices: "Software, Consulting",
//     majorBrands: "Brand X, Brand Y",
//     majorAchievements: "Award 1, Award 2",
//     majorClients: "Client A, Client B",
//     connectedWithAnyTradeBody: "Yes",
//     associatedwithanyBusinessSocialNetworkingGroups: "No",
//     userPhoto: "", // Leave empty as it will be uploaded
//     companyLogo: "", // Leave empty as it will be uploaded
//   };
  

//   const onSubmit = async (values, { setSubmitting }) => {
//     try {
//       const formData = new FormData();
//       formData.append('fullName', values.fullName);
//       formData.append('emailAddress', values.emailAddress);
//       formData.append('phoneNumber', values.phoneNumber);
//       formData.append('city', values.city);
//       formData.append('postalPinCode', values.postalPinCode);
//       formData.append('organizationName', values.organizationName);
//       formData.append('businessCategory', values.businessCategory);
//       formData.append('businessDescription', values.businessDescription);
//       formData.append('officeAddress', values.officeAddress);
//       formData.append('userPhoto', userPhoto);
//       if (companyLogo) {
//         formData.append('companyLogo', companyLogo);
//       }

//       const response = await axios.post('http://localhost:8000/api/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert(response.data.message);
//       // Optionally reset form values
//       // resetForm();
//     } catch (error) {
//       console.error('Registration Error:', error.message);
//       alert('Registration failed. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="fullName" placeholder="Full Name" />
//             <ErrorMessage name="fullName" component="div" />

//             <Field type="email" name="emailAddress" placeholder="Email Address" />
//             <ErrorMessage name="emailAddress" component="div" />

//             <Field type="tel" name="phoneNumber" placeholder="Phone Number" />
//             <ErrorMessage name="phoneNumber" component="div" />

//             <Field type="text" name="city" placeholder="City" />
//             <ErrorMessage name="city" component="div" />

//             <Field type="text" name="postalPinCode" placeholder="Postal Pin Code" />
//             <ErrorMessage name="postalPinCode" component="div" />

//             <Field type="text" name="organizationName" placeholder="Organization Name" />
//             <ErrorMessage name="organizationName" component="div" />

//             <Field type="text" name="businessCategory" placeholder="Business Category" />
//             <ErrorMessage name="businessCategory" component="div" />

//             <Field as="textarea" name="businessDescription" placeholder="Business Description" />
//             <ErrorMessage name="businessDescription" component="div" />

//             <Field as="textarea" name="officeAddress" placeholder="Office Address" />
//             <ErrorMessage name="officeAddress" component="div" />

//             <input type="file" name="userPhoto" onChange={handleUserPhotoChange} accept="image/*" />
//             <ErrorMessage name="userPhoto" component="div" />

//             <input type="file" name="companyLogo" onChange={handleCompanyLogoChange} accept="image/*" />
//             <ErrorMessage name="companyLogo" component="div" />

//             <button type="submit" disabled={isSubmitting}>
//               Register
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Reg;



import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Reg = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleUserPhotoChange = (event) => {
    setUserPhoto(event.currentTarget.files[0]);
  };

  const handleCompanyLogoChange = (event) => {
    setCompanyLogo(event.currentTarget.files[0]);
  };

  const initialValues = {
    ourServiceCity: "Kolkata",
    zone: "North",
    toliChapter: "Kolkata",
    registerThroughReferenceNumber: "Not required",
    yourReferenceNumber: "93311775951",
    emailAddress: "john.doe@example.com",
    password: "Password123",
    fullName: "John Doe",
    phoneNumber: "9876543210",
    alternativePhoneNumber: "9876543211",
    gender: "Male",
    bloodGroup: "O+",
    dateOfBirthDDMM: "01/01/1990",
    dateOfAnniversaryDDMM: "05/10",
    country: "India",
    stateUT: "West Bengal",
    city: "Kolkata",
    postalPinCode: "700001",
    organizationName: "ABC Corporation",
    businessCategory: "Technology",
    businessDescription: "We specialize in software development.",
    officeAddress: "123, Park Street, Kolkata",
    website: "https://example.com",
    googleMapLink: "https://maps.google.com",
    facebookLink: "https://facebook.com/example",
    instagramLink: "https://instagram.com/example",
    linkedinLink: "https://linkedin.com/company/example",
    twitterLink: "https://twitter.com/example",
    leaderShip: "CEO",
    committee: "Marketing",
    others: "Other information",
    yearsInCurrentBusiness: "5 years",
    currentBusinessSince: "2015",
    branchesIfAny: "Branch A, Branch B",
    majorProductsServices: "Software, Consulting",
    majorBrands: "Brand X, Brand Y",
    majorAchievements: "Award 1, Award 2",
    majorClients: "Client A, Client B",
    connectedWithAnyTradeBody: "Yes",
    associatedwithanyBusinessSocialNetworkingGroups: "No",
    userPhoto: "", // Leave empty as it will be uploaded
    companyLogo: "", // Leave empty as it will be uploaded
  };

//   const onSubmit = async (values, { setSubmitting }) => {
//     try {
//       const formData = new FormData();
//       Object.entries(values).forEach(([key, value]) => {
//         if (key === 'userPhoto' && userPhoto) {
//           formData.append('userPhoto', userPhoto);
//         } else if (key === 'companyLogo' && companyLogo) {
//           formData.append('companyLogo', companyLogo);
//         } else {
//           formData.append(key, value);
//         }
//       });

//       const response = await axios.post('http://localhost:8000/api/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert(response.data.message);
//       return response
//       // Optionally reset form values
//       // resetForm();
//     } catch (error) {
//       console.error('Registration Error:', error.response.data.message);
//       alert(response);
//     } finally {
//       setSubmitting(false);
//     }
//   };
const onSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'userPhoto' && userPhoto) {
          formData.append('userPhoto', userPhoto);
        } else if (key === 'companyLogo' && companyLogo) {
          formData.append('companyLogo', companyLogo);
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post('http://localhost:8000/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);
      // Optionally reset form values
      // resetForm();
    } catch (error) {
      console.error('Registration Error:', error.response.data.message);
      alert('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
        
      <h1>User Registration</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>

<div>
  <label htmlFor="ourServiceCity">Our Service City</label>
  <Field type="text" id="ourServiceCity" name="ourServiceCity" placeholder="Our Service City" />
  <ErrorMessage name="ourServiceCity" component="div" />
</div>

<div>
  <label htmlFor="zone">Zone</label>
  <Field type="text" id="zone" name="zone" placeholder="Zone" />
  <ErrorMessage name="zone" component="div" />
</div>

<div>
  <label htmlFor="toliChapter">Toli Chapter</label>
  <Field type="text" id="toliChapter" name="toliChapter" placeholder="Toli Chapter" />
  <ErrorMessage name="toliChapter" component="div" />
</div>

<div>
  <label htmlFor="registerThroughReferenceNumber">Register Through Reference Number</label>
  <Field type="text" id="registerThroughReferenceNumber" name="registerThroughReferenceNumber" placeholder="Register Through Reference Number" />
  <ErrorMessage name="registerThroughReferenceNumber" component="div" />
</div>

<div>
  <label htmlFor="yourReferenceNumber">Your Reference Number</label>
  <Field type="text" id="yourReferenceNumber" name="yourReferenceNumber" placeholder="Your Reference Number" />
  <ErrorMessage name="yourReferenceNumber" component="div" />
</div>




            <div>
              <label htmlFor="fullName">Full Name</label>
              <Field type="text" id="fullName" name="fullName" placeholder="Full Name" />
              <ErrorMessage name="fullName" component="div" />
            </div>

            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <Field type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" />
              <ErrorMessage name="emailAddress" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>

            <div>
              <label htmlFor="alternativePhoneNumber">Alternative Phone Number</label>
              <Field type="text" id="alternativePhoneNumber" name="alternativePhoneNumber" placeholder="Alternative Phone Number" />
              <ErrorMessage name="alternativePhoneNumber" component="div" />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <Field as="select" id="gender" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" />
            </div>

            <div>
              <label htmlFor="bloodGroup">Blood Group</label>
              <Field type="text" id="bloodGroup" name="bloodGroup" placeholder="Blood Group" />
              <ErrorMessage name="bloodGroup" component="div" />
            </div>

            <div>
              <label htmlFor="dateOfBirthDDMM">Date of Birth (DD/MM)</label>
              <Field type="text" id="dateOfBirthDDMM" name="dateOfBirthDDMM" placeholder="Date of Birth (DD/MM)" />
              <ErrorMessage name="dateOfBirthDDMM" component="div" />
            </div>

            <div>
              <label htmlFor="dateOfAnniversaryDDMM">Date of Anniversary (DD/MM)</label>
              <Field type="text" id="dateOfAnniversaryDDMM" name="dateOfAnniversaryDDMM" placeholder="Date of Anniversary (DD/MM)" />
              <ErrorMessage name="dateOfAnniversaryDDMM" component="div" />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <Field type="text" id="country" name="country" placeholder="Country" />
              <ErrorMessage name="country" component="div" />
            </div>

            <div>
              <label htmlFor="stateUT">State/UT</label>
              <Field type="text" id="stateUT" name="stateUT" placeholder="State/UT" />
              <ErrorMessage name="stateUT" component="div" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <Field type="text" id="city" name="city" placeholder="City" />
              <ErrorMessage name="city" component="div" />
            </div>

            <div>
              <label htmlFor="postalPinCode">Postal Pin Code</label>
              <Field type="text" id="postalPinCode" name="postalPinCode" placeholder="Postal Pin Code" />
              <ErrorMessage name="postalPinCode" component="div" />
            </div>

            <div>
              <label htmlFor="organizationName">Organization Name</label>
              <Field type="text" id="organizationName" name="organizationName" placeholder="Organization Name" />
              <ErrorMessage name="organizationName" component="div" />
            </div>

            <div>
              <label htmlFor="businessCategory">Business Category</label>
              <Field type="text" id="businessCategory" name="businessCategory" placeholder="Business Category" />
              <ErrorMessage name="businessCategory" component="div" />
            </div>

            <div>
              <label htmlFor="businessDescription">Business Description</label>
              <Field as="textarea" id="businessDescription" name="businessDescription" placeholder="Business Description" />
              <ErrorMessage name="businessDescription" component="div" />
            </div>

            <div>
              <label htmlFor="officeAddress">Office Address</label>
              <Field as="textarea" id="officeAddress" name="officeAddress" placeholder="Office Address" />
              <ErrorMessage name="officeAddress" component="div" />
            </div>

            <div>
              <label htmlFor="website">Website</label>
              <Field type="text" id="website" name="website" placeholder="Website" />
              <ErrorMessage name="website" component="div" />
            </div>

            <div>
              <label htmlFor="googleMapLink">Google Map Link</label>
              <Field type="text" id="googleMapLink" name="googleMapLink" placeholder="Google Map Link" />
              <ErrorMessage name="googleMapLink" component="div" />
            </div>

            <div>
              <label htmlFor="facebookLink">Facebook Link</label>
              <Field type="text" id="facebookLink" name="facebookLink" placeholder="Facebook Link" />
              <ErrorMessage name="facebookLink" component="div" />
            </div>

            <div>
              <label htmlFor="instagramLink">Instagram Link</label>
              <Field type="text" id="instagramLink" name="instagramLink" placeholder="Instagram Link" />
              <ErrorMessage name="instagramLink" component="div" />
            </div>

            <div>
              <label htmlFor="linkedinLink">LinkedIn Link</label>
              <Field type="text" id="linkedinLink" name="linkedinLink" placeholder="LinkedIn Link" />
              <ErrorMessage name="linkedinLink" component="div" />
            </div>

            <div>
              <label htmlFor="twitterLink">Twitter Link</label>
              <Field type="text" id="twitterLink" name="twitterLink" placeholder="Twitter Link" />
              <ErrorMessage name="twitterLink" component="div" />
            </div>

            <div>
              <label htmlFor="leaderShip">Leadership</label>
              <Field type="text" id="leaderShip" name="leaderShip" placeholder="Leadership" />
              <ErrorMessage name="leaderShip" component="div" />
            </div>

            <div>
              <label htmlFor="committee">Committee</label>
              <Field type="text" id="committee" name="committee" placeholder="Committee" />
              <ErrorMessage name="committee" component="div" />
            </div>

            <div>
              <label htmlFor="others">Others</label>
              <Field type="text" id="others" name="others" placeholder="Others" />
              <ErrorMessage name="others" component="div" />
            </div>

            <div>
              <label htmlFor="yearsInCurrentBusiness">Years in Current Business</label>
              <Field type="text" id="yearsInCurrentBusiness" name="yearsInCurrentBusiness" placeholder="Years in Current Business" />
              <ErrorMessage name="yearsInCurrentBusiness" component="div" />
            </div>

            <div>
              <label htmlFor="currentBusinessSince">Current Business Since</label>
              <Field type="text" id="currentBusinessSince" name="currentBusinessSince" placeholder="Current Business Since" />
              <ErrorMessage name="currentBusinessSince" component="div" />
            </div>

            <div>
              <label htmlFor="branchesIfAny">Branches If Any</label>
              <Field type="text" id="branchesIfAny" name="branchesIfAny" placeholder="Branches If Any" />
              <ErrorMessage name="branchesIfAny" component="div" />
            </div>

            <div>
              <label htmlFor="majorProductsServices">Major Products/Services</label>
              <Field type="text" id="majorProductsServices" name="majorProductsServices" placeholder="Major Products/Services" />
              <ErrorMessage name="majorProductsServices" component="div" />
            </div>

            <div>
              <label htmlFor="majorBrands">Major Brands</label>
              <Field type="text" id="majorBrands" name="majorBrands" placeholder="Major Brands" />
              <ErrorMessage name="majorBrands" component="div" />
            </div>

            <div>
              <label htmlFor="majorAchievements">Major Achievements</label>
              <Field type="text" id="majorAchievements" name="majorAchievements" placeholder="Major Achievements" />
              <ErrorMessage name="majorAchievements" component="div" />
            </div>

            <div>
              <label htmlFor="majorClients">Major Clients</label>
              <Field type="text" id="majorClients" name="majorClients" placeholder="Major Clients" />
              <ErrorMessage name="majorClients" component="div" />
            </div>

            <div>
              <label htmlFor="connectedWithAnyTradeBody">Connected with any Trade Body</label>
              <Field type="text" id="connectedWithAnyTradeBody" name="connectedWithAnyTradeBody" placeholder="Connected with any Trade Body" />
              <ErrorMessage name="connectedWithAnyTradeBody" component="div" />
            </div>

            <div>
              <label htmlFor="associatedwithanyBusinessSocialNetworkingGroups">Associated with any Business/Social Networking Groups</label>
              <Field type="text" id="associatedwithanyBusinessSocialNetworkingGroups" name="associatedwithanyBusinessSocialNetworkingGroups" placeholder="Associated with any Business/Social Networking Groups" />
              <ErrorMessage name="associatedwithanyBusinessSocialNetworkingGroups" component="div" />
            </div>

            <input type="file" name="userPhoto" onChange={handleUserPhotoChange} accept="image/*" />
            <ErrorMessage name="userPhoto" component="div" />

            <input type="file" name="companyLogo" onChange={handleCompanyLogoChange} accept="image/*" />
            <ErrorMessage name="companyLogo" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Reg;
