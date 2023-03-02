import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Button({
	children,
	onPress,
	mode,
	containerStyle,
	textStyle,
	rippleColor
}) {
	return (
		<View
			style={[
				styles.container,
				mode !== 'flat' && styles.elevation,
				containerStyle
			]}
		>
			<Pressable
				android_ripple={{ color: rippleColor, foreground: true }}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, mode === 'flat' && styles.flat]}>
					<Text
						style={[
							styles.buttonText,
							textStyle,
							mode === 'flat' && styles.flatText
						]}
					>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default Button;

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		overflow: 'hidden'
	},
	elevation: {
		elevation: 6
	},
	innerContainer: {
		padding: 8,
		backgroundColor: Colors.primary400,
		borderRadius: 5
	},
	flat: {
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: Colors.primary400
	},
	buttonText: {
		color: Colors.secondary800,
		fontFamily: 'roboto-bold',
		textAlign: 'center'
	},
	flatText: {
		color: Colors.primary400
	}
});
