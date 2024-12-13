'use client';

import { CircleUserRound } from 'lucide-react';
import { useSignupMutation } from '@/redux/features/auth/authAPI';
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [validation, setValidation] = useState(false);

	const [signup, { isLoading }] = useSignupMutation();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await signup({ email, firstName, lastName, password }).unwrap();
			if (res !== null) {
				setValidation(true);
			}
		} catch (err) {
			console.error('Signup Failed', err);
		}
	};
	return (
		<section className='w-[332px] m-[0_auto] mt-12 p-8 bg-white'>
			{validation ? (
				<div className='flex flex-col items-center'>
					<p className='text-center text-2xl  font-bold'>Account Created !</p>
					<Link
						href='/sign-in'
						className='w-full mt-4 mb-1 p-2 text-[18px] text-center font-bold bg-[#00BC77] text-white underline'>
						Sign In
					</Link>
				</div>
			) : (
				<div>
					<CircleUserRound
						color='#2C3E50'
						className='m-[0_auto]'
					/>
					<h1 className='my-5 text-center font-bold text-2xl'>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<div className='flex flex-col mb-4'>
							<label
								htmlFor='firstName'
								className='font-bold'>
								First Name
							</label>
							<input
								onChange={e => setFirstName(e.target.value)}
								type='text'
								id='firstName'
								placeholder='Tony'
								className='p-[5px] outline-none border-[1px] border-black rounded-sm'
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label
								htmlFor='lastName'
								className='font-bold'>
								Last Name
							</label>
							<input
								onChange={e => setLastName(e.target.value)}
								type='text'
								id='lastName'
								placeholder='Stark'
								className='p-[5px] outline-none border-[1px] border-black rounded-sm'
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<label
								htmlFor='email'
								className='font-bold'>
								Email
							</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type='email'
								id='email'
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
						<button
							type='submit'
							disabled={isLoading}
							className='w-full mt-4 mb-4 p-2 text-[18px] font-bold bg-[#00BC77] text-white underline'>
							Sign Up
						</button>
					</form>
				</div>
			)}
		</section>
	);
}
