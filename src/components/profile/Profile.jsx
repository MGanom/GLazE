import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import Editor from "./Editor";
import "./styles/Profile.scss";

const Profile = ({ database }) => {
  const history = useHistory();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (!history?.location?.state?.id) {
      return;
    }
    const stopSync = database.syncData(history?.location?.state?.id, (info) => {
      setProfile(info);
    });
    return () => stopSync();
  });

  const updateProfile = (info) => {
    setProfile(info);
    database.saveData(history?.location?.state?.id, info);
  };

  return (
    <section className="profile">
      <Card profile={profile} />
      <Editor profile={profile} updateProfile={updateProfile} />
    </section>
  );
};

export default Profile;
