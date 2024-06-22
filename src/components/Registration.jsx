import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    ourServiceCity: "Dummy City",
    zone: "Dummy Zone",
    toliChapter: "Dummy Chapter",
    yourReferenceNumber: "Dummy Your Ref Number",
    emailAddress: "dummy@example.com",
    fullName: "John Doe",
    phoneNumber: "1234567890",
    alternativePhoneNumber: "9876543210",
    gender: "Male",
    bloodGroup: "O+",
    dateOfBirthDDMM: "01/01/1990",
    dateOfAnniversaryDDMM: "05/10/2010",
    country: "Dummy Country",
    stateUT: "Dummy State",
    city: "Dummy City",
    postalPinCode: "123456",
    organizationName: "Dummy Organization",
    businessCategory: "Dummy Category",
    businessDescription: "Dummy Description",
    officeAddress: "123 Main St, Dummy City",
    website: "https://www.example.com",
    googleMapLink: "https://maps.google.com",
    facebookLink: "https://www.facebook.com",
    instagramLink: "https://www.instagram.com",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://www.twitter.com",
    leaderShip: "Dummy Leadership",
    committee: "Dummy Committee",
    others: "Dummy Others",
    yearsInCurrentBusiness: "5",
    currentBusinessSince: "2015",
    branchesIfAny: "2",
    majorProductsServices: "Dummy Products/Services",
    majorBrands: "Dummy Brands",
    majorAchievements: "Dummy Achievements",
    majorClients: "Dummy Clients",
    connectedWithAnyTradeBody: "Yes",
    associatedwithanyBusinessSocialNetworkingGroups: "Yes",
    userPhoto: "https://dummyimage.com/300x300",
    companyLogo: "https://dummyimage.com/200x200",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Basic validation example
      if (!formData.fullName || !formData.emailAddress) {
        console.error("Please fill in all required fields.");
        return;
      }
  
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Registration Error:", error);
      if (error.response && error.response.data) {
        console.error("Error Message:", error.response.data.message);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="ourServiceCity"
        value={formData.ourServiceCity}
        onChange={handleChange}
      />

      <input
        type="text"
        name="zone"
        value={formData.zone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="toliChapter"
        value={formData.toliChapter}
        onChange={handleChange}
      />

      <input
        type="text"
        name="yourReferenceNumber"
        value={formData.yourReferenceNumber}
        onChange={handleChange}
        placeholder="ref no"
      />

      <input
        type="text"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
      />

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <input
        type="text"
        name="alternativePhoneNumber"
        value={formData.alternativePhoneNumber}
        onChange={handleChange}
      />

      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <input
        type="text"
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
      />

      <input
        type="text"
        name="dateOfBirthDDMM"
        value={formData.dateOfBirthDDMM}
        onChange={handleChange}
      />

      <input
        type="text"
        name="dateOfAnniversaryDDMM"
        value={formData.dateOfAnniversaryDDMM}
        onChange={handleChange}
      />

      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />

      <input
        type="text"
        name="stateUT"
        value={formData.stateUT}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="postalPinCode"
        value={formData.postalPinCode}
        onChange={handleChange}
      />

      <input
        type="text"
        name="organizationName"
        value={formData.organizationName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="businessCategory"
        value={formData.businessCategory}
        onChange={handleChange}
      />

      <input
        type="text"
        name="businessDescription"
        value={formData.businessDescription}
        onChange={handleChange}
      />

      <input
        type="text"
        name="officeAddress"
        value={formData.officeAddress}
        onChange={handleChange}
      />

      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
      />

      <input
        type="text"
        name="googleMapLink"
        value={formData.googleMapLink}
        onChange={handleChange}
      />

      <input
        type="text"
        name="facebookLink"
        value={formData.facebookLink}
        onChange={handleChange}
      />

      <input
        type="text"
        name="instagramLink"
        value={formData.instagramLink}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedinLink"
        value={formData.linkedinLink}
        onChange={handleChange}
      />

      <input
        type="text"
        name="twitterLink"
        value={formData.twitterLink}
        onChange={handleChange}
      />

      <input
        type="text"
        name="leaderShip"
        value={formData.leaderShip}
        onChange={handleChange}
      />

      <input
        type="text"
        name="committee"
        value={formData.committee}
        onChange={handleChange}
      />

      <input
        type="text"
        name="others"
        value={formData.others}
        onChange={handleChange}
      />

      <input
        type="text"
        name="yearsInCurrentBusiness"
        value={formData.yearsInCurrentBusiness}
        onChange={handleChange}
      />

      <input
        type="text"
        name="currentBusinessSince"
        value={formData.currentBusinessSince}
        onChange={handleChange}
      />

      <input
        type="text"
        name="branchesIfAny"
        value={formData.branchesIfAny}
        onChange={handleChange}
      />

      <input
        type="text"
        name="majorProductsServices"
        value={formData.majorProductsServices}
        onChange={handleChange}
      />

      <input
        type="text"
        name="majorBrands"
        value={formData.majorBrands}
        onChange={handleChange}
      />

      <input
        type="text"
        name="majorAchievements"
        value={formData.majorAchievements}
        onChange={handleChange}
      />

      <input
        type="text"
        name="majorClients"
        value={formData.majorClients}
        onChange={handleChange}
      />

      <input
        type="text"
        name="connectedWithAnyTradeBody"
        value={formData.connectedWithAnyTradeBody}
        onChange={handleChange}
      />

      <input
        type="text"
        name="associatedwithanyBusinessSocialNetworkingGroups"
        value={formData.associatedwithanyBusinessSocialNetworkingGroups}
        onChange={handleChange}
      />

      

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
