import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ name, size, color, rippleColor, onPress, isDisabled }) {
	return (
		<Pressable
			style={styles.pressable}
			android_ripple={{ color: rippleColor }}
			onPress={onPress}
			disabled={isDisabled}
		>
			<Ionicons
				name={name}
				size={size}
				color={isDisabled ? rippleColor : color}
			/>
		</Pressable>
	);
}

export default IconButton;

const styles = StyleSheet.create({
	pressable: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	}
});
