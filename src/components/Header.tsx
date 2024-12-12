'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/argentBankLogo.png';
import {LogOut} from 'lucide-react';
import {CircleUserRound} from 'lucide-react';
import {authApi} from '@/redux/features/auth/authAPI';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken} from '@/redux/features/auth/authSlice';
import {useRouter} from 'next/navigation';
import {clearProfile} from '@/redux/features/profile/profileSlice';
import {profileApi} from '@/redux/features/profile/profileAPI';

interface ProfileState {
	body: {
		firstName: string;
		id: string;
	};
}

interface RootState {
	profile: ProfileState;
}

export default function Header() {
	const dispatch = useDispatch();
	const router = useRouter();

	const {body} = useSelector((state: RootState) => state.profile);

	const handleLogout = () => {
		dispatch(authApi.util.resetApiState());
		dispatch(clearToken());
		dispatch(profileApi.util.resetApiState());
		dispatch(clearProfile());
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

			{!body ? (
				<Link
					href='/sign-in'
					className='flex gap-1 mr-2 font-bold'>
					<CircleUserRound color='#2C3E50' />
					Sign In
				</Link>
			) : (
				<div className='flex items-center gap-2 lg:gap-4'>
					<Link
						href={`/dashboard/${body.id}`}
						className='flex gap-1 font-bold lg:gap-2'>
						<CircleUserRound color='#2C3E50' />
						{body.firstName}
					</Link>
					<button
						onClick={handleLogout}
						className='flex gap-1 mr-2 font-bold lg:gap-2'>
						<LogOut />
						Sign Out
					</button>
				</div>
			)}
		</nav>
	);
}
