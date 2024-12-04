'use client';
import { useRouter } from 'next/navigation';
import { useFetchUserProfileQuery } from '@/lib/features/authAPI';
import { useEffect } from 'react';

export default function Page(): JSX.Element {
	const router = useRouter();
	const { data, error, isLoading } = useFetchUserProfileQuery();
	console.log(data);

	useEffect(() => {
		if (data?.body.id) {
			router.push(`/dashboard/${data.body.id}`);
		}
	}, [data, router]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return <div></div>;
}
