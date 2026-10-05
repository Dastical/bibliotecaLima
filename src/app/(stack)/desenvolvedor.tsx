import { ScrollView, StyleSheet, Text, View } from "react-native";

const technologies = ["React Native", "TypeScript", "Expo", "JavaScript", "Git"];

export default function Desenvolvedor() {
    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
            <View style={styles.hero}>
                <View style={styles.heroOrb} />
                <Text style={styles.eyebrow}>POR TRÁS DO PROJETO</Text>
                <View style={styles.identity}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>L</Text>
                    </View>
                    <View style={styles.identityCopy}>
                        <Text style={styles.name}>Lima</Text>
                        <Text style={styles.role}>Desenvolvedor Mobile</Text>
                    </View>
                </View>
                <Text style={styles.heroCaption}>
                    Ideias que ganham vida através da tecnologia.
                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.intro}>
                    <Text style={styles.sectionEyebrow}>APRESENTAÇÃO</Text>
                    <Text style={styles.sectionTitle}>Olá, que bom ter você por aqui.</Text>
                    <Text style={styles.body}>
                        Sou estudante de Desenvolvimento Multiplataformas na FATEC Votorantim
                        e gosto de criar experiências para dispositivos móveis.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionEyebrow}>MINHA TRAJETÓRIA</Text>
                    <View style={styles.education}>
                        <View style={styles.timeline}>
                            <View style={styles.timelineDot} />
                            <View style={styles.timelineLine} />
                        </View>
                        <View style={styles.educationCard}>
                            <Text style={styles.educationLabel}>FORMAÇÃO</Text>
                            <Text style={styles.educationName}>FATEC Votorantim</Text>
                            <Text style={styles.educationCourse}>Desenvolvimento Multiplataformas</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                        <View>
                            <Text style={styles.sectionEyebrow}>FERRAMENTAS</Text>
                            <Text style={styles.sectionTitle}>Tecnologias</Text>
                        </View>
                        <Text style={styles.count}>{String(technologies.length).padStart(2, "0")}</Text>
                    </View>
                    <View style={styles.technologyList}>
                        {technologies.map((technology, index) => (
                            <View key={technology} style={styles.technology}>
                                <Text style={styles.technologyIndex}>{String(index + 1).padStart(2, "0")}</Text>
                                <Text style={styles.technologyName}>{technology}</Text>
                                <Text style={styles.technologyMark}>↗</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.project}>
                    <Text style={styles.projectLabel}>PROJETO EM DESTAQUE</Text>
                    <Text style={styles.projectTitle}>Biblioteca Digital</Text>
                    <Text style={styles.projectBody}>
                        Um espaço para explorar o acervo, reservar livros e encontrar novas
                        recomendações. Desenvolvido com React Native e Expo.
                    </Text>
                    <View style={styles.projectFooter}>
                        <Text style={styles.projectTag}>React Native</Text>
                        <Text style={styles.projectTag}>Expo</Text>
                        <Text style={styles.projectArrow}>✦</Text>
                    </View>
                </View>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#1A1A2E" },
    container: {
        paddingBottom: 36,
        alignItems: "center",
    },
    hero: {
        width: "100%",
        maxWidth: 520,
        minHeight: 235,
        backgroundColor: "#4C5DF4",
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        overflow: "hidden",
    },
    heroOrb: {
        position: "absolute",
        top: -90,
        right: -65,
        width: 230,
        height: 230,
        borderRadius: 115,
        backgroundColor: "#7580FF",
        opacity: 0.65,
    },
    eyebrow: {
        color: "#DDE0FF",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 2,
        marginBottom: 22,
    },
    identity: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 76,
        height: 76,
        borderRadius: 24,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 17,
    },
    avatarText: {
        color: "#4C5DF4",
        fontSize: 32,
        fontWeight: "bold",
    },
    identityCopy: {
        flex: 1,
    },
    name: {
        fontSize: 25,
        fontWeight: "700",
        color: "#FFFFFF",
    },
    role: {
        fontSize: 14,
        color: "#E2E4FF",
        fontWeight: "600",
        marginTop: 6,
    },
    heroCaption: {
        color: "#E2E4FF",
        fontSize: 13,
        marginTop: 21,
    },
    content: {
        width: "100%",
        maxWidth: 520,
        paddingHorizontal: 23,
    },
    intro: {
        borderLeftWidth: 2,
        borderLeftColor: "#6C7BF7",
        paddingLeft: 16,
        marginTop: 28,
        marginBottom: 30,
    },
    sectionEyebrow: {
        color: "#AAB2FF",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "700",
        lineHeight: 25,
        marginBottom: 8,
    },
    body: {
        color: "#C6C8D8",
        fontSize: 13,
        lineHeight: 20,
    },
    section: {
        marginBottom: 29,
    },
    education: {
        flexDirection: "row",
        minHeight: 80,
    },
    timeline: {
        width: 24,
        alignItems: "center",
    },
    timelineDot: {
        width: 11,
        height: 11,
        borderRadius: 6,
        backgroundColor: "#6C7BF7",
        borderWidth: 2,
        borderColor: "#B9C0FF",
        marginTop: 4,
    },
    timelineLine: {
        width: 1,
        flex: 1,
        backgroundColor: "#45465F",
        marginTop: 5,
    },
    educationCard: {
        flex: 1,
        backgroundColor: "#25263D",
        borderRadius: 12,
        padding: 14,
    },
    educationLabel: {
        color: "#AAB2FF",
        fontSize: 9,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 6,
    },
    educationName: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
    },
    educationCourse: {
        color: "#B8BACB",
        fontSize: 12,
        marginTop: 4,
    },
    sectionHeading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    count: {
        color: "#6C7BF7",
        fontSize: 28,
        fontWeight: "300",
    },
    technologyList: {
        borderTopWidth: 1,
        borderTopColor: "#34354C",
    },
    technology: {
        minHeight: 43,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#34354C",
    },
    technologyIndex: {
        width: 36,
        color: "#777B9B",
        fontSize: 10,
        fontWeight: "600",
    },
    technologyName: {
        flex: 1,
        color: "#E8E8F0",
        fontSize: 13,
        fontWeight: "600",
    },
    technologyMark: {
        color: "#AAB2FF",
        fontSize: 15,
    },
    project: {
        backgroundColor: "#EEF0FE",
        borderRadius: 16,
        padding: 18,
        marginBottom: 8,
    },
    projectLabel: {
        color: "#626FCB",
        fontSize: 9,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    projectTitle: {
        color: "#1A1A2E",
        fontSize: 19,
        fontWeight: "700",
        marginBottom: 7,
    },
    projectBody: {
        color: "#55566B",
        fontSize: 12,
        lineHeight: 18,
    },
    projectFooter: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginTop: 15,
    },
    projectTag: {
        color: "#4C5DF4",
        backgroundColor: "#FFFFFF",
        fontSize: 10,
        fontWeight: "600",
        overflow: "hidden",
        borderRadius: 10,
        paddingHorizontal: 9,
        paddingVertical: 5,
    },
    projectArrow: {
        color: "#4C5DF4",
        fontSize: 16,
        marginLeft: "auto",
    },
});
