import Image from 'next/image';
import chat from '../assets/icon-chat.png';
import money from '../assets/icon-money.png';
import security from '../assets/icon-security.png';

export default function page() {
	return (
		<main className='flex-1'>
			<div className="bg-[url('/bank-tree.jpeg')] bg-cover h-[300px] bg-[0_-50px] bg-no-repeat relative lg:h-[400px] lg:bg-[0%_33%]">
				<section className='relative m-[0_auto] top-[2rem] w-[264px] p-8 bg-white lg:absolute lg:top-[50px] lg:right-[50px] lg:w-[364px] lg:m-8'>
					<p className='lg:text-2xl font-bold'>No fees.</p>
					<p className='lg:text-2xl font-bold'>No minimum deposit.</p>
					<p className='lg:text-2xl font-bold'>High interest rates.</p>
					<p className='text-[0.9rem] mt-[14px] lg:mt-[19px] lg:text-xl'>
						Open a savings account with Argent Bank today!
					</p>
				</section>
			</div>
			<section className='flex flex-col lg:flex-row lg:mt-10'>
				<div className='flex flex-col items-center flex-1 text-center p-10'>
					<Image
						className='w-[152px] p-4 rounded-full border-[10px] border-[#52bc77]'
						src={chat}
						alt='Icone message'
					/>
					<h3 className='text-[#222] text-xl mt-[20px] mb-[22px] font-bold'>You are our #1 priority</h3>
					<p>
						Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone
						call in less than 5 minutes.
					</p>
				</div>
				<div className='flex flex-col items-center flex-1 text-center p-10'>
					<Image
						className='w-[152px] p-4 rounded-full border-[10px] border-[#52bc77]'
						src={money}
						alt='Icone message'
					/>
					<h3 className='text-[#222] text-xl mt-[20px] mb-[22px] font-bold'>
						More savings means higher rates
					</h3>
					<p>The more you save with us, the higher your interest rate will be!</p>
				</div>
				<div className='flex flex-col items-center flex-1 text-center p-10'>
					<Image
						className='w-[152px] p-4 rounded-full border-[10px] border-[#00bc77]'
						src={security}
						alt='Icone message'
					/>
					<h3 className='text-[#222] text-xl mt-[20px] mb-[22px] font-bold'>Security you can trust</h3>
					<p>We use top of the line encryption to make sure your data and money is always safe.</p>
				</div>
			</section>
		</main>
	);
}
