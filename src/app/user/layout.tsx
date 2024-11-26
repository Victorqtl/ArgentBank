import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Argent Bank - Profile',
};

export default function SignInLayout({ children }: { children: ReactNode }) {
	return <main className='flex-1 bg-[#12002b]'>{children}</main>;
}
