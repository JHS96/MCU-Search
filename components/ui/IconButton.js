import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ name, size, color, rippleColor }) {
	return (
		<Pressable style={styles.pressable} android_ripple={{ color: rippleColor }}>
			<Ionicons name={name} size={size} color={color} />
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
