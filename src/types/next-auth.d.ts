import NextAuth from 'next-auth/next';

declare module 'next-auth'{
	interface Session{
		user:{
			id: number,
			role: "S_ADMIN" | "ADMIN",
			fname: string,
			name: string,
			lname: string
			accessToken: strings
			refreshToken: string
		}
	}
}