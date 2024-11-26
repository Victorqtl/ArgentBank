import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/argentBankLogo.png';
import { CircleUserRound } from 'lucide-react';

export default function Header() {
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
				<Link
					className='flex gap-1 mr-2 font-bold'
					href='/sign-in'>
					<CircleUserRound color='#2C3E50' />
					Sign In
				</Link>
			</div>
		</nav>
	);
}
