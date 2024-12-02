import { env } from '$env/dynamic/public';

export const useCompanyName = () => {
	return env.PUBLIC_COMPANY_NAME || 'Your Company Name';
};
