// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AllUser() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);
//   return (
//     <div>
//       <h1>Registered Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             <strong>Name:</strong> {user.fullName}, <strong>Email:</strong>{" "}
//             {user.emailAddress}
//             <strong>Service City:</strong> {user.ourServiceCity},{" "}
//             <strong>Zone:</strong> {user.zone}, <strong>Toli Chapter:</strong>{" "}
//             {user.toliChapter}
//             <br />
//             <strong>Register Through Reference Number:</strong>{" "}
//             {user.registerThroughReferenceNumber},{" "}
//             <strong>Your Reference Number:</strong> {user.yourReferenceNumber}
//             <br />
//             <strong>Email Address:</strong> {user.emailAddress},{" "}
//             <strong>Password:</strong> {user.password},{" "}
//             <strong>Full Name:</strong> {user.fullName}
//             <br />
//             <strong>Phone Number:</strong> {user.phoneNumber},{" "}
//             <strong>Alternative Phone Number:</strong>{" "}
//             {user.alternativePhoneNumber}, <strong>Gender:</strong>{" "}
//             {user.gender}
//             <br />
//             <strong>Blood Group:</strong> {user.bloodGroup},{" "}
//             <strong>Date of Birth (DDMM):</strong> {user.dateOfBirthDDMM},{" "}
//             <strong>Date of Anniversary (DDMM):</strong>{" "}
//             {user.dateOfAnniversaryDDMM}
//             <br />
//             <strong>Country:</strong> {user.country}, <strong>State/UT:</strong>{" "}
//             {user.stateUT}, <strong>City:</strong> {user.city},{" "}
//             <strong>Postal Pin Code:</strong> {user.postalPinCode}
//             <br />
//             <strong>Organization Name:</strong> {user.organizationName},{" "}
//             <strong>Business Category:</strong> {user.businessCategory},{" "}
//             <strong>Business Description:</strong> {user.businessDescription}
//             <br />
//             <strong>Office Address:</strong> {user.officeAddress},{" "}
//             <strong>Website:</strong> {user.website},{" "}
//             <strong>Google Map Link:</strong> {user.googleMapLink}
//             <br />
//             <strong>Facebook Link:</strong> {user.facebookLink},{" "}
//             <strong>Instagram Link:</strong> {user.instagramLink},{" "}
//             <strong>LinkedIn Link:</strong> {user.linkedinLink}
//             <br />
//             <strong>Twitter Link:</strong> {user.twitterLink},{" "}
//             <strong>Leadership:</strong> {user.leaderShip},{" "}
//             <strong>Committee:</strong> {user.committee}
//             <br />
//             <strong>Others:</strong> {user.others},{" "}
//             <strong>Years in Current Business:</strong>{" "}
//             {user.yearsInCurrentBusiness},{" "}
//             <strong>Current Business Since:</strong> {user.currentBusinessSince}
//             <br />
//             <strong>Branches If Any:</strong> {user.branchesIfAny},{" "}
//             <strong>Major Products/Services:</strong>{" "}
//             {user.majorProductsServices}, <strong>Major Brands:</strong>{" "}
//             {user.majorBrands}
//             <br />
//             <strong>Major Achievements:</strong> {user.majorAchievements},{" "}
//             <strong>Major Clients:</strong> {user.majorClients},{" "}
//             <strong>Connected with Any Trade Body:</strong>{" "}
//             {user.connectedWithAnyTradeBody}
//             <br />
//             <strong>
//               Associated with Any Business/Social Networking Groups:
//             </strong>{" "}
//             {user.associatedwithanyBusinessSocialNetworkingGroups}
//             <br />
//             <strong>User Photo:</strong>
//             <img className="images" src={user.userPhoto} alt="" /> , <strong>Company Logo:</strong>{" "} <img className="images" src={user.companyLogo} alt="" />
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AllUser;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./alluser.css"

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data); // Assuming response.data is an array of user objects
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <table>
        <tbody>
          {users.map((user) => (
          user.fullName !== "Not required" ? (
            <div style={{borderBottom: "20px solid gray"}}>
              <tr>
        <td><strong>Name:</strong></td>
        <td>{user.fullName}</td>
        <td><strong>Email:</strong></td>
        <td>{user.emailAddress}</td>
    </tr>
    <tr>
        <td><strong>Service City:</strong></td>
        <td>{user.ourServiceCity}</td>
        <td><strong>Zone:</strong></td>
        <td>{user.zone}</td>
    </tr>
    <tr>
        <td><strong>Toli Chapter:</strong></td>
        <td>{user.toliChapter}</td>
        <td><strong>Register Through Reference Number:</strong></td>
        <td>{user.registerThroughReferenceNumber}</td>
    </tr>
    <tr>
        <td><strong>Your Reference Number:</strong></td>
        <td>{user.yourReferenceNumber}</td>
        <td><strong>Email Address:</strong></td>
        <td>{user.emailAddress}</td>
    </tr>
    <tr>
        <td><strong>Alternative Phone Number:</strong></td>
        <td>{user.alternativePhoneNumber}</td>
        <td><strong>Gender:</strong></td>
        <td>{user.gender}</td>
    </tr>
    <tr>
        <td><strong>Blood Group:</strong></td>
        <td>{user.bloodGroup}</td>
        <td><strong>Date of Birth (DDMM):</strong></td>
        <td>{user.dateOfBirthDDMM}</td>
    </tr>
    <tr>
        <td><strong>Date of Anniversary (DDMM):</strong></td>
        <td>{user.dateOfAnniversaryDDMM}</td>
        <td><strong>Country:</strong></td>
        <td>{user.country}</td>
    </tr>
    <tr>
        <td><strong>State/UT:</strong></td>
        <td>{user.stateUT}</td>
        <td><strong>City:</strong></td>
        <td>{user.city}</td>
    </tr>
    <tr>
        <td><strong>Postal Pin Code:</strong></td>
        <td>{user.postalPinCode}</td>
        <td><strong>Organization Name:</strong></td>
        <td>{user.organizationName}</td>
    </tr>
    <tr>
        <td><strong>Business Category:</strong></td>
        <td>{user.businessCategory}</td>
        <td><strong>Business Description:</strong></td>
        <td>{user.businessDescription}</td>
    </tr>
    <tr>
        <td><strong>Office Address:</strong></td>
        <td>{user.officeAddress}</td>
        <td><strong>Website:</strong></td>
        <td>{user.website}</td>
    </tr>
    <tr>
        <td><strong>Google Map Link:</strong></td>
        <td>{user.googleMapLink}</td>
        <td><strong>Facebook Link:</strong></td>
        <td>{user.facebookLink}</td>
    </tr>
    <tr>
        <td><strong>Instagram Link:</strong></td>
        <td>{user.instagramLink}</td>
        <td><strong>LinkedIn Link:</strong></td>
        <td>{user.linkedinLink}</td>
    </tr>
    <tr>
        <td><strong>Twitter Link:</strong></td>
        <td>{user.twitterLink}</td>
        <td><strong>Leadership:</strong></td>
        <td>{user.leaderShip}</td>
    </tr>
    <tr>
        <td><strong>Committee:</strong></td>
        <td>{user.committee}</td>
        <td><strong>Others:</strong></td>
        <td>{user.others}</td>
    </tr>
    <tr>
        <td><strong>Years in Current Business:</strong></td>
        <td>{user.yearsInCurrentBusiness}</td>
        <td><strong>Current Business Since:</strong></td>
        <td>{user.currentBusinessSince}</td>
    </tr>
    <tr>
        <td><strong>Branches If Any:</strong></td>
        <td>{user.branchesIfAny}</td>
        <td><strong>Major Products/Services:</strong></td>
        <td>{user.majorProductsServices}</td>
    </tr>
    <tr>
        <td><strong>Major Brands:</strong></td>
        <td>{user.majorBrands}</td>
        <td><strong>Major Achievements:</strong></td>
        <td>{user.majorAchievements}</td>
    </tr>
    <tr>
        <td><strong>Major Clients:</strong></td>
        <td>{user.majorClients}</td>
        <td><strong>Connected with Any Trade Body:</strong></td>
        <td>{user.connectedWithAnyTradeBody}</td>
    </tr>
    <tr>
        <td><strong>Associated with Any Business/Social Networking Groups:</strong></td>
        <td>{user.associatedwithanyBusinessSocialNetworkingGroups}</td>
        <td><strong>User Photo:</strong></td>
        <td><img class="images" src={user.userPhoto} alt="" /></td>
    </tr>
    <tr>
        <td><strong>Company Logo:</strong></td>
        <td><img class="images" src={user.companyLogo} alt="" /></td>
        <td></td>
        <td></td>
    </tr>
            </div>
          ):""))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;

