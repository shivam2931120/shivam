import React, { useState, useEffect } from "react";

const LeetCodeProfile = ({ username }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching LeetCode profile:", error));
  }, [username]);

  return (
    <div className="leetcode-card">
      <h3>LeetCode Profile</h3>
      {profile ? (
        <div className="profile-details">
          <img src={"l.png"} alt="LeetCode Avatar" className="leetcode-avatar" />
          <div className="profile-info">
            <p><strong>Username:</strong> Shivam2931120</p>
            <p><strong>Ranking:</strong> {profile.ranking}</p>
            <p><strong>Total Solved:</strong> {profile.totalSolved}</p>
            <p><strong>Easy:</strong> {profile.easySolved} / {profile.totalEasy}</p>
            <p><strong>Medium:</strong> {profile.mediumSolved} / {profile.totalMedium}</p>
            <p><strong>Hard:</strong> {profile.hardSolved} / {profile.totalHard}</p>
          </div>
        </div>
      ) : (
        <p className="loading-text">Fetching LeetCode data...</p>
      )}
    </div>
  );
};

export default LeetCodeProfile;
