import { View, ActivityIndicator, StyleSheet } from 'react-native';

import ScreenTemplate from '../hoc/ScreenTemplate';

function LoadingSpinner({ size, color }) {
	return (
		<ScreenTemplate>
			<View style={styles.container}>
				<ActivityIndicator size={size} color={color} />
			</View>
		</ScreenTemplate>
	);
}

export default LoadingSpinner;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});
