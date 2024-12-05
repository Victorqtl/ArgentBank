'use client';
import { usePathname } from 'next/navigation';
import { useFetchUserProfileQuery } from '@/lib/features/authAPI';
import { useUpdateUsernameMutation } from '@/lib/features/authAPI';
import { useState } from 'react';

export default function Page(): JSX.Element {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [showForm, setShowForm] = useState(false);
	const [updateUsername] = useUpdateUsernameMutation();

	const pathname = usePathname();
	const { data } = useFetchUserProfileQuery();

	const pathSegments = pathname.split('/');
	const userIdUrl = pathSegments[pathSegments.length - 1];

	if (userIdUrl !== data?.body.id || !data) {
		return <div>Erreur</div>;
	}

	const handleSubmit = async () => {
		try {
			await updateUsername({
				firstName: firstName,
				lastName: lastName,
			}).unwrap();
			setShowForm(false);
			setFirstName('');
			setLastName('');
		} catch (err) {
			console.error(err);
		}
	};

	const handleCancel = () => {
		setFirstName('');
		setLastName('');
		setShowForm(false);
	};

	return (
		<>
			<div className='flex flex-col items-center mb-8 text-white'>
				<h1 className='mt-8 text-center text-[32px] font-bold'>Welcome back</h1>
				<div className={`${showForm ? 'hidden' : 'block'} mb-5 flex gap-2 text-[32px] font-bold`}>
					<span>{data?.body.firstName}</span>
					<span>{data?.body.lastName}</span>
				</div>
				<form
					onSubmit={handleSubmit}
					className={`${
						showForm ? 'flex' : 'hidden'
					} flex-col gap-5 items-center justify-center mt-1  text-[#2C3E50] font-bold`}>
					<div className='flex justify-center gap-5'>
						<input
							className='w-5/12 p-2 text-2xl'
							type='text'
							placeholder={data?.body.firstName}
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<input
							className='w-5/12 p-2 text-2xl'
							type='text'
							placeholder={data?.body.lastName}
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<div className='flex justify-center gap-5'>
						<button
							type='submit'
							className='w-32 py-2 bg-white'>
							Submit
						</button>
						<button
							onClick={handleCancel}
							type='button'
							className='w-32 py-2 bg-white'>
							Cancel
						</button>
					</div>
				</form>
				<button
					onClick={() => setShowForm(!showForm)}
					className={`${showForm ? 'hidden' : 'block'} p-[10px] font-bold bg-[#00BC77]`}>
					Edit Name
				</button>
			</div>
			<section className='flex flex-col justify-between gap-4 w-4/5 m-[0_auto] mb-8 p-6 border-[1px] border-black bg-white lg:flex-row lg:items-center'>
				<div>
					<h3>Argent Bank Checking (x8349)</h3>
					<p className='text-[2.5rem] font-bold'>$2,082.79</p>
					<p>Available Balance</p>
				</div>
				<div>
					<button className='w-full p-2 text-[1.1rem] bg-[#00BC77] text-white font-bold lg:w-[200px]'>
						View transactions
					</button>
				</div>
			</section>
			<section className='flex flex-col justify-between gap-4 w-4/5 m-[0_auto] mb-8 p-6 border-[1px] border-black bg-white lg:flex-row lg:items-center'>
				<div>
					<h3>Argent Bank Savings (x6712)</h3>
					<p className='text-[2.5rem] font-bold'>$10,928.42</p>
					<p>Available Balance</p>
				</div>
				<div>
					<button className='w-full p-2 text-[1.1rem] bg-[#00BC77] text-white font-bold lg:w-[200px]'>
						View transactions
					</button>
				</div>
			</section>
			<section className='flex flex-col justify-between gap-4 w-4/5 m-[0_auto] mb-8 p-6 border-[1px] border-black bg-white lg:flex-row lg:items-center'>
				<div>
					<h3>Argent Bank Credit Card (x8349)</h3>
					<p className='text-[2.5rem] font-bold'>$184.30</p>
					<p>Available Balance</p>
				</div>
				<div>
					<button className='w-full p-2 text-[1.1rem] bg-[#00BC77] text-white font-bold lg:w-[200px]'>
						View transactions
					</button>
				</div>
			</section>
		</>
	);
}
