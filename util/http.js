import { stringMd5 } from 'react-native-quick-md5';

import { PRIVATE_KEY, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export function md5Hash() {
	return stringMd5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
}
