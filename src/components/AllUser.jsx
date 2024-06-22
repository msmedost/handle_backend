import React, { useEffect, useState } from "react";
import axios from "axios";

function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Registered Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.fullName}, <strong>Email:</strong>{" "}
            {user.emailAddress}
            <strong>Service City:</strong> {user.ourServiceCity},{" "}
            <strong>Zone:</strong> {user.zone}, <strong>Toli Chapter:</strong>{" "}
            {user.toliChapter}
            <br />
            <strong>Register Through Reference Number:</strong>{" "}
            {user.registerThroughReferenceNumber},{" "}
            <strong>Your Reference Number:</strong> {user.yourReferenceNumber}
            <br />
            <strong>Email Address:</strong> {user.emailAddress},{" "}
            <strong>Password:</strong> {user.password},{" "}
            <strong>Full Name:</strong> {user.fullName}
            <br />
            <strong>Phone Number:</strong> {user.phoneNumber},{" "}
            <strong>Alternative Phone Number:</strong>{" "}
            {user.alternativePhoneNumber}, <strong>Gender:</strong>{" "}
            {user.gender}
            <br />
            <strong>Blood Group:</strong> {user.bloodGroup},{" "}
            <strong>Date of Birth (DDMM):</strong> {user.dateOfBirthDDMM},{" "}
            <strong>Date of Anniversary (DDMM):</strong>{" "}
            {user.dateOfAnniversaryDDMM}
            <br />
            <strong>Country:</strong> {user.country}, <strong>State/UT:</strong>{" "}
            {user.stateUT}, <strong>City:</strong> {user.city},{" "}
            <strong>Postal Pin Code:</strong> {user.postalPinCode}
            <br />
            <strong>Organization Name:</strong> {user.organizationName},{" "}
            <strong>Business Category:</strong> {user.businessCategory},{" "}
            <strong>Business Description:</strong> {user.businessDescription}
            <br />
            <strong>Office Address:</strong> {user.officeAddress},{" "}
            <strong>Website:</strong> {user.website},{" "}
            <strong>Google Map Link:</strong> {user.googleMapLink}
            <br />
            <strong>Facebook Link:</strong> {user.facebookLink},{" "}
            <strong>Instagram Link:</strong> {user.instagramLink},{" "}
            <strong>LinkedIn Link:</strong> {user.linkedinLink}
            <br />
            <strong>Twitter Link:</strong> {user.twitterLink},{" "}
            <strong>Leadership:</strong> {user.leaderShip},{" "}
            <strong>Committee:</strong> {user.committee}
            <br />
            <strong>Others:</strong> {user.others},{" "}
            <strong>Years in Current Business:</strong>{" "}
            {user.yearsInCurrentBusiness},{" "}
            <strong>Current Business Since:</strong> {user.currentBusinessSince}
            <br />
            <strong>Branches If Any:</strong> {user.branchesIfAny},{" "}
            <strong>Major Products/Services:</strong>{" "}
            {user.majorProductsServices}, <strong>Major Brands:</strong>{" "}
            {user.majorBrands}
            <br />
            <strong>Major Achievements:</strong> {user.majorAchievements},{" "}
            <strong>Major Clients:</strong> {user.majorClients},{" "}
            <strong>Connected with Any Trade Body:</strong>{" "}
            {user.connectedWithAnyTradeBody}
            <br />
            <strong>
              Associated with Any Business/Social Networking Groups:
            </strong>{" "}
            {user.associatedwithanyBusinessSocialNetworkingGroups}
            <br />
            <strong>User Photo:</strong>
            <img className="images" src={user.userPhoto} alt="" /> , <strong>Company Logo:</strong>{" "} <img className="images" src={user.companyLogo} alt="" />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUser;
