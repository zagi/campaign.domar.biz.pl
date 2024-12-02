import { env } from '$env/dynamic/public';

export const usePhoneNumber = () => {
	return env.PUBLIC_PHONE_NUMBER || '+ 123 456 789';
};
