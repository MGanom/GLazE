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
    firebaseDatabase.ref(`${userId}/info/`).set(data);
  }
}

export default Database;
