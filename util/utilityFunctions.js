import { stringMd5 } from 'react-native-quick-md5';

import { PRIVATE_KEY, PUBLIC_KEY } from '@env';

export function md5Hash(timeStamp) {
	return stringMd5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
}

export function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
