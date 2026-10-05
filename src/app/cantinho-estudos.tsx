import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

type Mode = "focus" | "shortBreak" | "longBreak";

const MODES: { id: Mode; label: string; minutes: number }[] = [
    { id: "focus", label: "Foco", minutes: 25 },
    { id: "shortBreak", label: "Pausa curta", minutes: 5 },
    { id: "longBreak", label: "Pausa longa", minutes: 15 },
];
const duration = (mode: Mode) =>
    (MODES.find((item) => item.id === mode)?.minutes ?? 25) * 60;
const formatTime = (seconds: number) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

export default function CantinhoEstudos() {
    const router = useRouter();
    const [mode, setMode] = useState<Mode>("focus");
    const [seconds, setSeconds] = useState(duration("focus"));
    const [running, setRunning] = useState(false);
    const [sessions, setSessions] = useState(0);
    const [message, setMessage] = useState("");
    const endTime = useRef<number | null>(null);

    useEffect(() => {
        if (!running || endTime.current === null) return;

        const timer = setInterval(() => {
            const target = endTime.current;
            if (target === null) return;
            const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
            setSeconds(remaining);
            if (remaining !== 0) return;

            endTime.current = null;
            setRunning(false);
            if (mode === "focus") {
                const count = sessions + 1;
                const next: Mode = count % 4 === 0 ? "longBreak" : "shortBreak";
                setSessions(count);
                setMode(next);
                setSeconds(duration(next));
                setMessage(`Foco concluído! Hora de uma ${next === "longBreak" ? "pausa longa" : "pausa curta"}.`);
            } else {
                setMode("focus");
                setSeconds(duration("focus"));
                setMessage("Pausa concluída! Pronto para voltar a estudar?");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [mode, running, sessions]);

    const selectMode = (next: Mode) => {
        endTime.current = null;
        setRunning(false);
        setMode(next);
        setSeconds(duration(next));
        setMessage("");
    };

    const toggleTimer = () => {
        if (running) {
            const target = endTime.current;
            if (target !== null) setSeconds(Math.max(0, Math.ceil((target - Date.now()) / 1000)));
            endTime.current = null;
            setRunning(false);
        } else {
            endTime.current = Date.now() + seconds * 1000;
            setMessage("");
            setRunning(true);
        }
    };

    const resetTimer = () => {
        endTime.current = null;
        setRunning(false);
        setSeconds(duration(mode));
        setMessage("");
    };

    const progress = Math.round((1 - seconds / duration(mode)) * 100);

    return (
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Pressable onPress={() => router.canGoBack() ? router.back() : router.replace("/")}>
                    <Text style={styles.back}>‹  Início</Text>
                </Pressable>
                <Text style={styles.title}>Cantinho de estudos</Text>
                <Text style={styles.subtitle}>Organize seu tempo com a técnica Pomodoro.</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.modeTitle}>
                    {MODES.find((item) => item.id === mode)?.label} · Ciclo {sessions + 1}
                </Text>
                <Text style={styles.clock}>{formatTime(seconds)}</Text>
                <Text style={styles.hint}>{running ? "Mantenha o foco!" : "Um passo de cada vez."}</Text>

                <View style={styles.progressTrack}>
                    <View style={[styles.progress, { width: `${progress}%` }]} />
                </View>
                <Text style={styles.progressLabel}>Progresso da sessão · {progress}%</Text>

                <View style={styles.actions}>
                    <Pressable style={[styles.button, styles.start]} onPress={toggleTimer}>
                        <Text style={styles.buttonText}>
                            {running ? "Pausar" : seconds < duration(mode) ? "Continuar" : "Começar"}
                        </Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.reset]} onPress={resetTimer}>
                        <Text style={styles.resetText}>Reiniciar</Text>
                    </Pressable>
                </View>
                {message ? <Text accessibilityLiveRegion="polite" style={styles.message}>{message}</Text> : null}
            </View>

            <Text style={styles.sectionTitle}>Duração da sessão</Text>
            <View style={styles.modes}>
                {MODES.map((item) => (
                    <Pressable
                        key={item.id}
                        accessibilityRole="button"
                        accessibilityState={{ selected: mode === item.id }}
                        onPress={() => selectMode(item.id)}
                        style={[styles.mode, mode === item.id && styles.selectedMode]}
                    >
                        <Text style={[styles.modeLabel, mode === item.id && styles.selectedText]}>
                            {item.label}
                        </Text>
                        <Text style={styles.minutes}>{item.minutes} min</Text>
                    </Pressable>
                ))}
            </View>

            <View style={styles.tip}>
                <Text style={styles.tipTitle}>Dica de estudo</Text>
                <Text style={styles.tipText}>
                    A cada quatro sessões de foco, faça uma pausa longa para recarregar.
                </Text>
            </View>
            <Text style={styles.sessions}>{sessions} sessões de foco concluídas</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#fcf9ff" },
    content: { paddingBottom: 32 },
    header: { backgroundColor: "#263238", padding: 24, paddingTop: 30 },
    back: { color: "#cfd8dc", fontSize: 15, marginBottom: 20 },
    title: { color: "#fff", fontSize: 27, fontWeight: "bold" },
    subtitle: { color: "#cfd8dc", fontSize: 14, marginTop: 6 },
    card: {
        margin: 20, padding: 22, alignItems: "center", backgroundColor: "#fff",
        borderRadius: 10, elevation: 2, shadowColor: "#000", shadowOpacity: 0.08,
        shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
    },
    modeTitle: { color: "#78909c", fontSize: 14, fontWeight: "bold" },
    clock: { color: "#263238", fontSize: 56, fontWeight: "bold", marginTop: 18 },
    hint: { color: "#78909c", fontSize: 14, marginBottom: 22 },
    progressTrack: { width: "100%", height: 7, backgroundColor: "#e3e8eb", borderRadius: 4 },
    progress: { height: "100%", backgroundColor: "#1976D2", borderRadius: 4 },
    progressLabel: { alignSelf: "flex-start", color: "#78909c", fontSize: 12, marginTop: 8 },
    actions: { flexDirection: "row", width: "100%", gap: 10, marginTop: 20 },
    button: { flex: 1, minHeight: 46, borderRadius: 8, alignItems: "center", justifyContent: "center" },
    start: { backgroundColor: "#1976D2" },
    reset: { backgroundColor: "#eef2f5" },
    buttonText: { color: "#fff", fontSize: 15, fontWeight: "bold" },
    resetText: { color: "#263238", fontSize: 15, fontWeight: "bold" },
    message: { color: "#4CAF50", fontSize: 13, textAlign: "center", marginTop: 14 },
    sectionTitle: { color: "#263238", fontSize: 18, fontWeight: "bold", marginHorizontal: 20, marginBottom: 12 },
    modes: { flexDirection: "row", gap: 10, paddingHorizontal: 20 },
    mode: { flex: 1, alignItems: "center", padding: 12, backgroundColor: "#fff", borderRadius: 8, borderWidth: 1, borderColor: "#e3e8eb" },
    selectedMode: { backgroundColor: "#eaf3fc", borderColor: "#1976D2" },
    modeLabel: { color: "#263238", fontSize: 12, fontWeight: "bold", textAlign: "center" },
    selectedText: { color: "#1976D2" },
    minutes: { color: "#78909c", fontSize: 12, marginTop: 5 },
    tip: { margin: 20, padding: 16, backgroundColor: "#fdf6e3", borderLeftWidth: 4, borderLeftColor: "#f5a623", borderRadius: 6 },
    tipTitle: { color: "#263238", fontSize: 14, fontWeight: "bold", marginBottom: 5 },
    tipText: { color: "#3e2723", fontSize: 13, lineHeight: 19 },
    sessions: { color: "#78909c", fontSize: 13, textAlign: "center" },
});
