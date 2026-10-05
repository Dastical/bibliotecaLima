import { Link } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
} from "react-native";

export default function Aulas() {
    return (
        <ScrollView style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.title}>Aulas Mobile</Text>
                <Text style={styles.subtitle}>
                    Aprenda desenvolvimento mobile passo a passo
                </Text>
            </View>

            {/* Lista de aulas */}
            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Lista de aulas</Text>

                <Link href="/aula_componente" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>01</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Componentes
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar e reutilizar componentes no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_jsx" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>02</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                JSX
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a usar JSX para criar interfaces de usuário no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>
                <Link href="/aula_fundamentos" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>03</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Aula Fundamentos
                            </Text>

                            <Text style={styles.description}>
                                Aprenda os fundamentos do React Native e como criar componentes básicos.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_auth" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>04</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Hooks
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a usar Hooks no React Native para gerenciar estado e efeitos colaterais.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>05</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Componentes Basicos
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar e utilizar componentes básicos no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula-dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>06</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Estilização
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a estilizar componentes no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>07</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Layout
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar layouts no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>08</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Listas
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar e reutilizar listas no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>09</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Formulários
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar e utilizar formulários no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>10</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                API's
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a consumir e utilizar APIs no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula_dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>11</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Autenticação
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a implementar autenticação no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula-dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>12</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Armazenamento Local
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a utilizar o armazenamento local no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula-dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>13</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Imagens e Arquivos
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a trabalhar com imagens e arquivos no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula-dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>14</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Permissões do Dispositivo
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a gerenciar permissões do dispositivo no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>

                <Link href="/aula-dados" asChild>
                    <Pressable style={styles.card}>
                        <View style={styles.number}>
                            <Text style={styles.numberText}>15</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={styles.cardTitle}>
                                Recursos Nativos
                            </Text>

                            <Text style={styles.description}>
                                Aprenda a criar e utilizar recursos nativos no React Native.
                            </Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
    },

    header: {
        backgroundColor: "#263238",
        paddingTop: 55,
        paddingBottom: 30,
        paddingHorizontal: 20,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#CFD8DC",
        fontSize: 14,
        marginTop: 8,
        lineHeight: 20,
    },

    content: {
        padding: 20,
    },

    sectionTitle: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#263238",
        marginBottom: 15,
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 4,

        elevation: 2,
    },

    number: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#1976D2",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

    numberText: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },

    info: {
        flex: 1,
    },

    cardTitle: {
        color: "#263238",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 5,
    },

    description: {
        color: "#78909C",
        fontSize: 13,
        lineHeight: 18,
    },
});
