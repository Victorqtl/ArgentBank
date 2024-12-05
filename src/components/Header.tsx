'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/argentBankLogo.png';
import { CircleUserRound } from 'lucide-react';
import { authApi } from '@/lib/features/authAPI';
import { useDispatch } from 'react-redux';
import { clearToken } from '@/lib/features/authSlice';
import { useFetchUserProfileQuery } from '@/lib/features/authAPI';
import { useRouter } from 'next/navigation';

export default function Header() {
	const dispatch = useDispatch();
	const { data } = useFetchUserProfileQuery();
	const router = useRouter();
	console.log(data);

	const handleLogout = () => {
		dispatch(authApi.util.resetApiState());
		dispatch(clearToken());
		router.push('/');
	};

	return (
		<nav className='flex justify-between items-center py-[5px] px-[20px]'>
			<Link href='/'>
				<Image
					className='w-[200px]'
					src={logo}
					alt='Argent Bank Logo'
				/>
			</Link>
			<div>
				{!data ? (
					<Link
						className='flex gap-1 mr-2 font-bold'
						href='/sign-in'>
						<CircleUserRound color='#2C3E50' />
						Sign In
					</Link>
				) : (
					<button
						className='flex gap-1 mr-2 font-bold'
						onClick={handleLogout}>
						<CircleUserRound color='#2C3E50' />
						Sign Out
					</button>
				)}
			</div>
		</nav>
	);
}
