import { StyleSheet } from 'react-native';

export const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202329',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#deff9a',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#deff9a',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        elevation: 5,
    },
    buttonText: {
        color: '#202329',
        fontSize: 18,
        fontWeight: 'bold',
    },
});