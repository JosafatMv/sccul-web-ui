export const validateVideoExtension = (fileName) => {
	const allowedExtensions = ['mp4', 'mov', 'avi'];
	const extension = fileName.split('.').pop();
	return allowedExtensions.includes(extension);
};
