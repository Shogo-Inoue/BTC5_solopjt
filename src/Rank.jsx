import React from 'react';

function Rank(props) {
  const { userInfo } = props;
  return (
    <section className="user_info">
      <h2>User Info</h2>
      <ul>
        <li>ID: {userInfo.id}</li>
        <li>First Name: {userInfo.firstName}</li>
        <li>Last Name: {userInfo.lastName}</li>
        <li>Role: {userInfo.role}</li>
      </ul>
    </section>
  );
}
export default Rank;
