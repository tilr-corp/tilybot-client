export default [
	'TILR_WELCOME',
	'JOB_FAMILY',
	'OCCUPATIONS',
	'WORK_TYPE',
	'DISTANCE',
	'TRANSPORTATION',
	'DISCOVERY',
	'APP_OVERVIEW',
	'BACKGROUND',
	'PAYROLL',
	'TILR_CLOSING',
].map((elem) => {
	return { eventName: elem, params: {} };
});