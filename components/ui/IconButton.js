import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ name, size, color, rippleColor }) {
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.pressable}
				android_ripple={{ color: rippleColor }}
			>
				<Ionicons name={name} size={size} color={color} />
			</Pressable>
		</View>
	);
}

export default IconButton;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: 65
	},
	pressable: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
