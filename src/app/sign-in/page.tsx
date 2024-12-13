'use client';

import { CircleUserRound } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '@/redux/features/auth/authAPI';
import { setToken } from '@/redux/features/auth/authSlice';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Link from 'next/link';

interface ProfileState {
	body: {
		id: string;
	};
}

interface RootState {
	profile: ProfileState;
}

export default function Page(): JSX.Element {
	const dispatch = useDispatch();
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);

	const [login, { isLoading }] = useLoginMutation();

	const { body } = useSelector((state: RootState) => state.profile);

	useEffect(() => {
		if (body) {
			router.push(`/dashboard/${body.id}`);
		}
	}, [body, router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (!email || !password) {
				setErrorMessage(true);
				return;
			}
			setErrorMessage(false);
			const response = await login({ email, password }).unwrap();
			dispatch(setToken(response.body.token));
			router.push('/dashboard');
		} catch (err) {
			console.error('Login failed', err);
			setErrorMessage(true);
		}
	};

	return (
		<section className='w-[332px] m-[0_auto] mt-12 p-8 bg-white'>
			<CircleUserRound
				color='#2C3E50'
				className='m-[0_auto]'
			/>
			<h1 className='my-5 text-center font-bold text-2xl'>Sign In</h1>
			<form
				onSubmit={handleSubmit}
				className='mb-4'>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='username'
						className='font-bold'>
						Username
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type='text'
						id='username'
						placeholder='employee@test.tld'
						className='p-[5px] outline-none border-[1px] border-black rounded-sm'
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='password'
						className='font-bold'>
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type='password'
						id='password'
						placeholder='••••••••'
						className='p-[5px] outline-none border-[1px] border-black rounded-sm'
					/>
				</div>
				<div className='flex gap-1'>
					<input
						type='checkbox'
						id='checkbox'
					/>
					<label htmlFor='checkbox'>Remember me</label>
				</div>
				<button
					type='submit'
					disabled={isLoading}
					className='w-full mt-4 mb-1 p-2 text-[18px] font-bold bg-[#00BC77] text-white underline'>
					Sign In
				</button>
				{errorMessage && <p className='text-red-700'>Incorect email or password</p>}
			</form>
			<Link
				href='/sign-up'
				className='underline'>
				No account ? Sign Up
			</Link>
		</section>
	);
}
