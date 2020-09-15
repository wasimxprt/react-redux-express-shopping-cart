class AuthService {
    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    isAuthenticated() {
        if (
            localStorage.getItem("user") &&
            Object.keys(localStorage.getItem("user")).length > 0
        )
            return true;
        return false;
    }
}

export default new AuthService();
