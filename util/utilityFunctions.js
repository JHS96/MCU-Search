import { stringMd5 } from 'react-native-quick-md5';

import { PRIVATE_KEY, PUBLIC_KEY } from '@env';

export function md5Hash(timeStamp) {
	return stringMd5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
}

export function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function extractedAttributionURL(attributionString) {
	// Below returns array with html string separated out so that url can be extracted
	// The actual url will be the 2nd element in the array i.e index [1]
	const splitAttrString = attributionString.split('"');
	const extractedURL = splitAttrString[1];
	return extractedURL;
}
