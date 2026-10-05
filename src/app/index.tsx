import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';

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
            {/* Acesso */}
            <View style={styles.authContainer}>
                <Link href="/login" asChild>
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginText}>Entrar</Text>
                    </Pressable>
                </Link>
                <Link href="/register" asChild>
                    <Pressable style={styles.registerButton}>
                        <Text style={styles.registerText}>Criar Conta</Text>
                    </Pressable>
                </Link>
                <Link href="/register" asChild>
                    <Pressable style={styles.chatButton}>
                        <Text style={styles.chatText}>Chat</Text>
                    </Pressable>
                </Link>
            </View>

            {/* História do dia */}
            <View style={styles.storyContainer}>
                <Text style={styles.storyTitle}>História do dia</Text>
                <Text style={styles.storyQuote}>
                    "Um bom livro pode levar você para lugares que nunca imaginou conhecer."
                </Text>
                <Text style={styles.storyAuthor}>— Reflexão do dia</Text>
            </View>

            {/* Biblioteca */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Biblioteca</Text>
                <View style={styles.grid}>
                    <Link href="/recomendacao" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>★</Text>
                            <Text style={styles.cardTitle}>Recomendações</Text>
                            <Text style={styles.cardSubtitle}>Descubra novos livros</Text>
                        </Pressable>
                    </Link>
                    <Link href="/acervo" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>■</Text>
                            <Text style={styles.cardTitle}>Acervo</Text>
                            <Text style={styles.cardSubtitle}>Explore nossa coleção</Text>
                        </Pressable>
                    </Link>
                    <Link href="/reserva" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>✓</Text>
                            <Text style={styles.cardTitle}>Reservar livros</Text>
                            <Text style={styles.cardSubtitle}>Faça sua reserva</Text>
                        </Pressable>
                    </Link>
                    <Link href="/aulas" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>▶</Text>
                            <Text style={styles.cardTitle}>Aulas Mobile</Text>
                            <Text style={styles.cardSubtitle}>Aprenda desenvolvimento</Text>
                        </Pressable>
                    </Link>
                    <Link href="/desenvolvedor" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>👨‍💻</Text>
                            <Text style={styles.cardTitle}>Desenvolvedor</Text>
                            <Text style={styles.cardSubtitle}>Conheça o desenvolvedor</Text>
                        </Pressable>
                    </Link>
                    <Link href="/cantinho-estudos" asChild>
                        <Pressable style={styles.card}>
                            <Text style={styles.cardIcon}>📚</Text>
                            <Text style={styles.cardTitle}>Cantinho de estudos</Text>
                            <Text style={styles.cardSubtitle}>Espaço para seus estudos</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>

            {/* Rodapé */}
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Biblioteca Digital</Text>
                <Text style={styles.footerSubtitle}>Conhecimento para todos.</Text>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcf9ff",
    },
    header: {
        backgroundColor: "#263238",
        paddingTop: 60,
        paddingBottom: 30,
        paddingHorizontal: 24,

    },
    logo: {
        color: "#ffffff",
        fontSize: 32,
        fontWeight: "bold",
    },
    subtitle: {
        color: "#cfd8dc",
        fontSize: 15,
        marginTop: 6,

    },
    authContainer: {
        flexDirection: "row",
        gap: 10,
        padding: 20,
    },

    loginButton: {
        flex: 1,
        backgroundColor: "#1976D2",
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: "center",
    },

    loginText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },

    registerButton: {
        flex: 1,
        backgroundColor: "#4CAF50",
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: "center",
    },

    registerText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },
        chatText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },
        chatButton: {
        flex: 1,
        backgroundColor: "#4c75af",
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: "center",
    },

    storyContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: "#fdf6e3",
        borderLeftWidth: 4,
        borderLeftColor: "#f5a623",
        borderRadius: 6,
        padding: 16,
    },
    storyTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#263238",
        marginBottom: 8,
    },
    storyQuote: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#3e2723",
        marginBottom: 6,
    },
    storyAuthor: {
        fontSize: 13,
        color: "#757575",
    },

    sectionContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#263238",
        marginBottom: 12,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 16,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardIcon: {
        fontSize: 20,
        color: "#1976D2",
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#263238",
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 12,
        color: "#78909c",
    },

    footer: {
        alignItems: "center",
        paddingVertical: 30,
    },
    footerTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#263238",
    },
    footerSubtitle: {
        fontSize: 12,
        color: "#90a4ae",
        marginTop: 4,
    },
});