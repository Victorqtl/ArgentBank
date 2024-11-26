import { CircleUserRound } from 'lucide-react';

export default function page() {
	return (
		<section className='w-[332px] m-[0_auto] mt-12 p-8 bg-white'>
			<CircleUserRound
				color='#2C3E50'
				className='m-[0_auto]'
			/>
			<h1 className='my-5 text-center font-bold text-2xl'>Sign In</h1>
			<form>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='username'
						className='font-bold'>
						Username
					</label>
					<input
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
					className='w-full mt-4 p-2 text-[18px] font-bold bg-[#00BC77] text-white underline'>
					Sign In
				</button>
			</form>
		</section>
	);
}
