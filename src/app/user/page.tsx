export default function page() {
	return (
		<>
			<div className='flex flex-col items-center mb-8 text-white'>
				<h1 className='my-8 text-center text-[32px] font-bold'>
					Welcome back <br />
					Tony Jarvis!
				</h1>
				<button className='p-[10px] font-bold bg-[#00BC77]'>Edit Name</button>
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
