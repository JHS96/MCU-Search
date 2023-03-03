import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';

import Colors from '../../constants/colors';

function ScreenTemplate({ children, headerPadding }) {
	const headerHeight = useHeaderHeight();

	return (
		<LinearGradient
			style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
			colors={[Colors.primary700, Colors.seconadry500]}
		>
			{children}
		</LinearGradient>
	);
}

export default ScreenTemplate;
