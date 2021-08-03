import { emailProvider, firebaseAuth, googleProvider } from "./Firebase";

class Auth {
  login(provider) {
    const authProvider = this.getProvider(provider);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChange) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  getProvider(provider) {
    switch (provider) {
      case "Email":
        return emailProvider;
      case "Google":
        return googleProvider;
      default:
        throw new Error(`Unknown provider: ${provider}`);
    }
  }
}

export default Auth;
