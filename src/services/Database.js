import { firebaseDatabase } from "./Firebase";

class Database {
  syncData(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/info`);
    ref.on("value", (snapshot) => {
      snapshot.val() && onUpdate(snapshot.val());
    });
    return () => ref.off();
  }

  saveData(userId, data) {
    firebaseDatabase.ref(`${userId}/info`).set(data);
  }
  //
  //
  bookmarkId(userId) {
    const ref = firebaseDatabase.ref(`${userId}/bookmark`);
    let id = 0;
    ref.on("value", (snapshot) => {
      if (snapshot.val()) {
        id = Object.keys(snapshot.val()).length + 1;
      } else {
        id = 1;
      }
    });
    return id;
  }

  syncBookmark(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/bookmark`);
    ref.on("value", (snapshot) => {
      snapshot.val() && onUpdate(snapshot.val());
      !snapshot.val() && onUpdate({});
    });
    return () => ref.off();
  }

  checkBookmark(userId, id, onCheck) {
    const ref = firebaseDatabase.ref(`${userId}/bookmark/${id}`);
    ref.once("value", (snapshot) => {
      if (snapshot.val()) {
        onCheck(true);
      } else {
        onCheck(false);
      }
    });
  }

  saveBookmark(userId, data) {
    firebaseDatabase.ref(`${userId}/bookmark/${data.id}`).set(data);
  }

  removeBookmark(userId, id) {
    firebaseDatabase.ref(`${userId}/bookmark/${id}`).remove();
  }

  reportId() {
    const ref = firebaseDatabase.ref(`report`);
    let id = 0;
    ref.on("value", (snapshot) => {
      if (snapshot.val()) {
        id = Object.keys(snapshot.val()).length + 1;
      } else {
        id = 1;
      }
    });
    return id;
  }

  reporterNick(userId) {
    const ref = firebaseDatabase.ref(`${userId}`);
    ref.on("value", (snapshot) => {
      if (snapshot.val()) {
        return userId;
      }
    });
  }

  saveReport(data) {
    firebaseDatabase.ref("report").set(data);
  }
}

export default Database;
