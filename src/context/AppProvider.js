import { AuthContextProvider } from './auth/AuthContextProvider';

export const AppProvider = ({ children }) => {
	return (
		<>
			<AuthContextProvider>{children}</AuthContextProvider>
		</>
	);
};
