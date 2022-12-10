import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },

    content: {
        backgroundColor: '#0D0D0D',
        height: '24%',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 65,
    },

    image: {
        width: 100,
        height: 80,
    },

    status: {
        paddingTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

    created: {
        color: '#1E6F9F',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 50
    },

    completed: {
        color: '#5E60CE',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 50

    },

    emptyParticipants: {
        fontSize: 26
    },

    containerInput: {
        flexDirection: "row",
        paddingTop: 35
    },

    input: {
        flex: 1,
        height: 52,
        borderRadius: 7,
        backgroundColor: '#262626',
        padding: 6,
        fontSize: 16,
        marginLeft: 10

    },
})