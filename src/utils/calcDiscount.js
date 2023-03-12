export const calcDiscount = (price, discount) => {
	return price - (price * discount) / 100;
};
