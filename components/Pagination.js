import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import IconButton from './ui/IconButton';
import Colors from '../constants/colors';

function Pagination({ itemsPerPage, totalNumItems, page, setPage }) {
	const numOfPages = Math.ceil(totalNumItems / itemsPerPage);
	const pickerItemArr = [];

	for (let i = 0; i < numOfPages; i++) {
		if (i !== numOfPages - 1) {
			pickerItemArr.push({
				label: `${i * itemsPerPage + 1} - ${(i + 1) * itemsPerPage}`,
				value: i + 1
			});
		} else {
			pickerItemArr.push({
				label: `${i * itemsPerPage + 1} - ${totalNumItems}`,
				value: i + 1
			});
		}
	}

	function arrowBtnHandler(mode) {
		if (mode === 'next') setPage(curPage => curPage + 1);
		else if (mode === 'previous') setPage(curPage => curPage - 1);
	}

	return (
		<View style={styles.pagination}>
			<IconButton
				name='caret-back-sharp'
				size={30}
				color={Colors.black}
				rippleColor={Colors.gray500}
				onPress={() => arrowBtnHandler('previous')}
				isDisabled={page === 1}
			/>

			<Picker
				mode='dropdown'
				style={styles.picker}
				selectedValue={page}
				onValueChange={itemValue => setPage(itemValue)}
				enabled={numOfPages > 1}
			>
				{pickerItemArr.map(i => (
					<Picker.Item
						style={styles.pickerItem}
						key={i.value}
						label={i.label}
						value={i.value}
					/>
				))}
			</Picker>

			<View style={styles.totalContainer}>
				<Text style={styles.totalText}>of {totalNumItems}</Text>
			</View>

			<IconButton
				name='caret-forward-sharp'
				size={30}
				color={Colors.black}
				rippleColor={Colors.gray500}
				onPress={() => arrowBtnHandler('next')}
				isDisabled={page === numOfPages}
			/>
		</View>
	);
}

export default Pagination;

const styles = StyleSheet.create({
	pagination: {
		flexDirection: 'row'
	},
	picker: {
		backgroundColor: 'transparent',
		flex: 2
	},
	pickerItem: {
		fontSize: 18
	},
	totalContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	totalText: {
		fontFamily: 'roboto-bold-italic',
		fontSize: 20,
		textAlign: 'left'
	},
	arrowBtnDisabled: {
		color: Colors.gray500
	}
});
