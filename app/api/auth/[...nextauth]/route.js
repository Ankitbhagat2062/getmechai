import User from '@/models/Users';
import connectDB from '@/db/connectdb';
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

connectDB();
export const authOptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
     if (account.provider === 'github') {
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split('@')[0],
          });
          await newUser.save();
        }
        return true;
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  }
})

export { authOptions as GET, authOptions as POST }