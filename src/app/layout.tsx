import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Provider } from 'react-redux';
import { store } from './store';

export const metadata: Metadata = {
	title: 'ArgentBank - Home Page',
	description: 'La banque du futur',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body>
				<Provider store={store}>
					<header>
						<Header />
					</header>
					{children}
					<footer className='flex justify-center border-t-2 border-[#ccc] py-8'>
						<Footer />
					</footer>
				</Provider>
			</body>
		</html>
	);
}
