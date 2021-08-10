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

  syncBookmark(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/bookmark`);
    ref.on("value", (snapshot) => {
      snapshot.val() && onUpdate(snapshot.val());
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
}

export default Database;
