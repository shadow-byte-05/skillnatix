import { dbConnect } from '@/lib/dbConnect'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'
import { UserModel } from '@/models/user.model'

export const authOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
            await dbConnect()

            try {
            const user = await UserModel.findOne({
                $or: [
                { username: credentials?.email },
                { email: credentials?.email },
                ],
            })

            if (!user) return null

            const isPasswordValid = await bcrypt.compare(
                credentials?.password || '',
                user.password
            )

            if (!isPasswordValid) return null

            return {
                id: user._id.toString(),
                username: user.username,
                email: user.email,
            }
            } catch (error) {
            console.log(error)
            return null
            }
        },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
        if (user) {
            token.id = user.id
            token.username = user.username
            token.email = user.email
        }
        return token
        },

        async session({ session, token }) {
        if (token) {
            session.user.id = token.id
            session.user.username = token.username
            session.user.email = token.email
        }
        return session
        },

        async signIn({ user, account }) {
        await dbConnect()

        if (account?.provider === 'google') {
            const userRegistered = await UserModel.findOne({ email: user.email })

            if (!userRegistered) {
            await UserModel.create({
                username: user.email.split('@')[0],
                email: user.email,
                image: user.image,
                provider: 'google',
                password: '', // No password for Google users
            })
            }
        }

        return true
        },
    },

    session: {
        strategy: 'jwt',
    },

    pages: {
        signIn: '/sign-up',
    },

    secret: process.env.NEXTAUTH_SECRET,
}
