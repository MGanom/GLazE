import { githubProvider, firebaseAuth, googleProvider } from "./Firebase";

class Auth {
  login(provider) {
    const authProvider = this.getProvider(provider);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  guestLogin() {
    return firebaseAuth.signInAnonymously();
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
      case "Github":
        return githubProvider;
      case "Google":
        return googleProvider;
      default:
        throw new Error(`Unknown provider: ${provider}`);
    }
  }
}

export default Auth;
