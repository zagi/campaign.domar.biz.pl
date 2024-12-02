import { env } from '$env/dynamic/public';

export const useCompanyCity = () => {
	return env.PUBLIC_COMPANY_CITY || 'City';
};
