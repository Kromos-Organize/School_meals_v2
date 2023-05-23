import NextAuth from 'next-auth/next';

declare module 'next-auth'{
	interface Session{
		user:{
			id: number,
			school_id: number | null
			email: string
			role: "S_ADMIN" | "ADMIN",
			fname: string,
			name: string,
			lname: string
			accessToken: string
			refreshToken: string
		}
	}
}