'use server';

import { cookies } from 'next/headers';

export async function setUserCookie(userData: string) {
    const cookieStore = await cookies();
    cookieStore.set('user', userData, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
    });
}

export async function getUserCookie() {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');
    return userCookie ? userCookie.value : null;
}

export async function clearUserCookie() {
    const cookieStore = await cookies();
    cookieStore.delete('user');
}