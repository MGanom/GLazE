import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import Editor from "./Editor";
import "./styles/Profile.scss";

const Profile = memo(({ database, imageUploader }) => {
  const history = useHistory();
  const userId = history?.location?.state?.id;
  const [profile, setProfile] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (history?.location?.state?.isGuest) {
      const guestSync = database.syncData("guest", (info) => {
        setProfile(info);
      });
      return () => guestSync();
    }
    const stopSync = database.syncData(userId, (info) => {
      setProfile(info);
    });
    return () => stopSync();
  }, [database, history?.location?.state?.isGuest, userId]);

  const updateProfile = (info) => {
    setProfile(info);
    database.saveData(userId, info);
    database.updateSign(userId, info.name);
  };

  const resetProfile = (e) => {
    e.preventDefault();
    if (window.confirm("프로필을 초기화합니다.")) {
      const info = {
        name: `사용자(${userId.slice(0, 5)})`,
        gender: "　",
        email: "　",
        message: "프로필을 설정해주세요.",
      };
      database.saveData(userId, info);
      database.updateSign(userId, info.name);
    }
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <section className="profile">
      <div className="profileCardContainer">
        <Card profile={profile} />
        {history?.location?.state?.isGuest ? null : (
          <button className="profileEditBtn" onClick={toggleEdit}>
            {!isEdit ? "수정" : "취소"}
          </button>
        )}
      </div>
      <div className="profileEditorContainer">
        {!isEdit ? null : (
          <Editor
            profile={profile}
            updateProfile={updateProfile}
            resetProfile={resetProfile}
            imageUploader={imageUploader}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        )}
      </div>
    </section>
  );
});

export default Profile;
