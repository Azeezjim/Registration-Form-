import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
var axios = require('axios');
var FormData = require('form-data');

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
       
        
        var data = new FormData();
        data.append('email', credentials.email);
        data.append('password', credentials.password);
        data.append('login_by', 'manual');
        data.append('device_token', '123456');
        data.append('device_type', 'web');
        
        var config = {
          method: 'post',
          url: 'https://cms.onlyally.com/api/user/login',
          headers: { 
            ...data.getHeaders()
          },
          data : data
        };
        
       const res = await axios(config)
       

        const user = await res.data.data;

        // If no error and we have user data, return it

        if (res.data.success && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: 'jhsggsjfjsdgf7ueshgfsjfhgj',
  //   callbacks: {
  //     async signIn({ user, account, profile, email, credentials }) {
  //       return true
  //     },
  //     async redirect({ url, baseUrl }) {
  //       return baseUrl
  //     },
  //     async session({ session, user, token }) {
  //       return session
  //     },
  //     async jwt({ token, user, account, profile, isNewUser }) {
  //       return token
  //     }
  // },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
