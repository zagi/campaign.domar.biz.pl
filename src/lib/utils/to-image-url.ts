export const toImageUrl = (processedImagePath: string) =>
	`${processedImagePath.slice(1).replaceAll('\\', '/')}`;
