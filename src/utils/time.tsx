import TimeZone from 'react-native-timezone';

const getTimeZone = async () => {
	const timeZone = await TimeZone.getTimeZone().then(zone => zone);
	return timeZone;
};

export const secondsInPeriod = {
	year: 365 * 24 * 60 * 60,
	month: 31 * 24 * 60 * 60,
	day: 24 * 60 * 60,
	minute: 60 * 60,
	second: 60,
};

export const timeZone = getTimeZone();

export const timeSince = (date: string) => {
	const seconds = Math.floor(
		(new Date().getTime() - new Date(date).getTime()) / 1000
	);

	const getTimeAgo = interval => {
		const timeAgo = Math.floor(interval);
		return timeAgo;
	};

	let interval = seconds / 31536000;

	if (interval > 1) {
		if (getTimeAgo(interval) === 1) {
			return getTimeAgo(interval) + ' year ago';
		}
		return getTimeAgo(interval) + ' years ago';
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		if (getTimeAgo(interval) === 1) {
			return getTimeAgo(interval) + ' month ago';
		}
		return getTimeAgo(interval) + ' months ago';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		if (getTimeAgo(interval) === 1) {
			return getTimeAgo(interval) + ' day ago';
		}
		return getTimeAgo(interval) + ' days ago';
	}
	interval = seconds / 3600;

	if (interval > 1) {
		if (getTimeAgo(interval) === 1) {
			return getTimeAgo(interval) + ' hour ago';
		}
		return getTimeAgo(interval) + ' hours ago';
	}
	interval = seconds / 60;
	if (interval > 1) {
		if (getTimeAgo(interval) === 1) {
			return getTimeAgo(interval) + ' minute ago';
		}
		return getTimeAgo(interval) + ' minutes ago';
	}
	if (getTimeAgo(interval) === 1) {
		return getTimeAgo(interval) + ' second ago';
	}
	return getTimeAgo(seconds) + ' seconds ago';
};

const MONTH_NAMES = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
	const day = date.getDate();
	const month = MONTH_NAMES[date.getMonth()];
	const year = date.getFullYear();
	const hours = date.getHours();
	let minutes = date.getMinutes();

	if (minutes < 10) {
		// Adding leading zero to minutes
		minutes = `0${minutes}`;
	}

	if (prefomattedDate) {
		// Today at 10:20
		// Yesterday at 10:20
		return `${prefomattedDate} at ${hours}:${minutes}`;
	}

	if (hideYear) {
		// 10. January at 10:20
		return `${day}. ${month} at ${hours}:${minutes}`;
	}

	// 10. January 2017. at 10:20
	return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
}

// --- Main function
export function timeAgo(dateParam) {
	if (!dateParam) {
		return null;
	}

	const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
	const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
	const today = new Date();
	const yesterday = new Date(today - DAY_IN_MS);
	const seconds = Math.round((today - date) / 1000);
	const minutes = Math.round(seconds / 60);
	const isToday = today.toDateString() === date.toDateString();
	const isYesterday = yesterday.toDateString() === date.toDateString();
	const isThisYear = today.getFullYear() === date.getFullYear();

	if (seconds < 5) {
		return 'now';
	} else if (seconds < 60) {
		return `${seconds} seconds ago`;
	} else if (seconds < 90) {
		return 'about a minute ago';
	} else if (minutes < 60) {
		return `${minutes} minutes ago`;
	} else if (isToday) {
		return getFormattedDate(date, 'Today'); // Today at 10:20
	} else if (isYesterday) {
		return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
	} else if (isThisYear) {
		return getFormattedDate(date, false, true); // 10. January at 10:20
	}

	return getFormattedDate(date); // 10. January 2017. at 10:20
}
