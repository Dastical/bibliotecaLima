import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.logo}>Biblioteca</Text>
                <Text style={styles.subtitle}>
                    Seu conhecimento começa aqui!
                </Text>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    subtitle: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#0e0505',
        backgroundColor: '#2fff00',
    },
});