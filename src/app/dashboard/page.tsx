'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '@/redux/features/profile/profileSlice';
import { useFetchUserProfileQuery } from '@/redux/features/profile/profileAPI';

export default function Page(): JSX.Element {
	const router = useRouter();
	const dispatch = useDispatch();

	const { data } = useFetchUserProfileQuery();
	console.log('data', data);

	useEffect(() => {
		if (data?.body) {
			dispatch(setProfile(data.body));
			router.push(`/dashboard/${data.body.id}`);
		}
	}, [data, dispatch, router]);

	return <div></div>;
}
