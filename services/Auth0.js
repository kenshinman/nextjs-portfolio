import auth0 from "auth0-js";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from "axios";

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-qao6ac1b.eu.auth0.com",
      clientID: "auBI0c2ftJs5SfRXac3ZFP909V2iJa9k",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    Cookies.set("user", authResult.idTokenPayload);
    Cookies.set("jwt", authResult.idToken);
    Cookies.set("expiresAt", expiresAt);

    // navigate to the home route
    window.location = "/";
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    Cookies.remove("user");
    Cookies.remove("jwt");
    Cookies.remove("expiresAt");

    this.auth0.logout({
      return_to: "",
      clientID: "auBI0c2ftJs5SfRXac3ZFP909V2iJa9k"
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = Cookies.getJSON("expiresAt");
    return new Date().getTime() < expiresAt;
  }

  async getJWKS() {
    const res = await axios.get(
      `https://dev-qao6ac1b.eu.auth0.com/.well-known/jwks.json`
    );
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });

      if (!decodedToken) {
        return undefined;
      }
      // const expiresAt = decodedToken.exp * 1000;
      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];

      //BUILD VERTIFICATES
      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join("\n");
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert);
          const expiresAt = verifiedToken.exp * 1000;

          return verifiedToken && new Date().getTime() < expiresAt
            ? verifiedToken
            : undefined;
        } catch (error) {
          console.log(error);
          return undefined;
        }
      }
    }

    return undefined;
  }

  async clientAuth() {
    const token = Cookies.getJSON("jwt");

    const verifiedToken = await this.verifyToken(token);
    console.log("verifiedToken => ", verifiedToken);
    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {
      const tokenCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!tokenCookie) return false;
      const token = tokenCookie.split("=")[1];
      const verifiedToken = await this.verifyToken(token);
      console.log("verifiedToken2 => ", verifiedToken);
      return verifiedToken;
    }
  }
}

const auth0Client = new Auth0();

export default auth0Client;
