import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: THEME.COLORS.OVERLAY, justifyContent: 'center', alignItems: 'center' },
	content: { width: 311, backgroundColor: THEME.COLORS.SHAPE, alignItems: 'center', justifyContent: 'center' },
	closeIcon: { alignSelf: 'flex-end', margin: 16 },
	heading: { alignItems: 'center', marginTop: 24 },
	label: {
		color: THEME.COLORS.TEXT,
		fontSize: THEME.FONT_SIZE.MD,
		fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
		marginTop: 24,
		marginBottom: 8,
	},
	discordButton: {
		width: 231,
		height: 48,
		backgroundColor: THEME.COLORS.BACKGROUND_900,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		marginBottom: 32,
	},
	discord: { color: THEME.COLORS.TEXT, fontSize: THEME.FONT_SIZE.MD, fontFamily: THEME.FONT_FAMILY.REGULAR },
});
