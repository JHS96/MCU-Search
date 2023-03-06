import { View, Text, StyleSheet } from 'react-native';

import ScreenTemplate from './hoc/ScreenTemplate';
import Colors from '../constants/colors';
import globalStyles from '../constants/globalStyles';

function ErrorDisplay() {
	return (
		<ScreenTemplate>
			<View style={styles.contaier}>
				<Text style={[globalStyles.headingText, styles.headingText]}>
					Error...
				</Text>
				<Text style={styles.errorText}>Looks like something went wrong...</Text>
			</View>
		</ScreenTemplate>
	);
}

export default ErrorDisplay;

const styles = StyleSheet.create({
	contaier: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headingText: {
		color: Colors.danger
	},
	errorText: {
		fontFamily: 'roboto-bold-italic',
		fontSize: 28,
		color: Colors.danger
	}
});
