import Swal from 'sweetalert2';

export const showSimpleAlert = (title, text, icon) => {
	Swal.fire({
		title,
		text,
		icon,
		confirmButtonText: 'Ok',
	});
};

export const showConfirmDialog = (
	title,
	text,
	confirmButtonText,
	cancelButtonText,
	confirmCallback
) => {
	Swal.fire({
		title: title,
		text: text,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: confirmButtonText,
		cancelButtonText: cancelButtonText,
	}).then((result) => {
		if (result.isConfirmed) {
			confirmCallback();
		}
	});
};
