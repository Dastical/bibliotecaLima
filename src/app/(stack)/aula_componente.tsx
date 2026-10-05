  import React, { useState } from 'react';
  import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity, 
    SafeAreaView 
  } from 'react-native';

  export default function AulaComponente() {
    // Estado para controlar as respostas do questionário
  const [respostas, setRespostas] = useState<Record<string, string>>({});  const [mostrarResultado, setMostrarResultado] = useState(false);

    const gabarito: Record<string, string> = { q1: 'A', q2: 'B', q3: 'B', q4: 'C', q5: 'A' };

    const responder = (questao: string, alternativa: string) => {
      setRespostas({ ...respostas, [questao]: alternativa });
    };

    const calcularPontuacao = () => {
      let acertos = 0;
      Object.keys(gabarito).forEach((q) => {
        if (respostas[q] === gabarito[q]) acertos++;
      });
      return acertos;
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Título Principal */}
          <Text style={styles.title}>O que são Componentes?</Text>
          <Text style={styles.paragraph}>
            No React Native, os **componentes** são os blocos de construção fundamentais de qualquer aplicativo. Eles funcionam como peças de Lego: você cria pedaços independentes, reutilizáveis e isolados, e depois os junta para formar a interface do usuário (UI).
          </Text>

          <View style={styles.separator} />

          {/* Seção de Exemplos */}
          <Text style={styles.sectionTitle}>Exemplos Práticos</Text>
          
          <Text style={styles.paragraph}>
            1. <Text style={styles.bold}>Componentes Nativos:</Text> São os blocos que o próprio React Native fornece e que se traduzem em componentes nativos de cada plataforma (iOS/Android).
          </Text>
          
          {/* Exemplo visual de um bloco */}
          <View style={styles.cardExemplo}>
            <Text style={styles.cardTitle}>Exemplo de Card (Componente Personalizado)</Text>
            <Text style={styles.cardText}>Este é um texto dentro de um componente reutilizável.</Text>
          </View>

          <Text style={styles.paragraph}>
            2. <Text style={styles.bold}>Componentes Personalizados:</Text> São funções JavaScript (como este que você está vendo) que retornam JSX e podem receber propriedades (props) para mudar seu comportamento ou visual.
          </Text>

          <View style={styles.separator} />

          {/* Questionário */}
          <Text style={styles.sectionTitle}>Questionário de Fixação</Text>

          {/* Pergunta 1 */}
          <Text style={styles.question}>1. O que são componentes no React Native?</Text>
          <TouchableOpacity 
            style={[styles.option, respostas.q1 === 'A' && styles.selectedOption]} 
            onPress={() => responder('q1', 'A')}>
            <Text>A) Blocos de construção reutilizáveis da interface.</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q1 === 'B' && styles.selectedOption]} 
            onPress={() => responder('q1', 'B')}>
            <Text>B) Apenas banco de dados do aplicativo.</Text>
          </TouchableOpacity>

          {/* Pergunta 2 */}
          <Text style={styles.question}>2. Qual componente nativo substitui a tag &lt;div&gt; da web?</Text>
          <TouchableOpacity 
            style={[styles.option, respostas.q2 === 'A' && styles.selectedOption]} 
            onPress={() => responder('q2', 'A')}>
            <Text>A) Text</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q2 === 'B' && styles.selectedOption]} 
            onPress={() => responder('q2', 'B')}>
            <Text>B) View</Text>
          </TouchableOpacity>

          {/* Pergunta 3 */}
          <Text style={styles.question}>3. Para que servem as 'props' em um componente?</Text>
          <TouchableOpacity 
            style={[styles.option, respostas.q3 === 'A' && styles.selectedOption]} 
            onPress={() => responder('q3', 'A')}>
            <Text>A) Para estilizar o app via CSS externo.</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q3 === 'B' && styles.selectedOption]} 
            onPress={() => responder('q3', 'B')}>
            <Text>B) Para passar dados e personalizar componentes.</Text>
          </TouchableOpacity>

          {/* Pergunta 4 */}
          <Text style={styles.question}>4. Qual componente é obrigatório para exibir textos?</Text>
          <TouchableOpacity 
            style={[styles.option, respostas.q4 === 'A' && styles.selectedOption]} 
            onPress={() => responder('q4', 'A')}>
            <Text>A) Paragraph</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q4 === 'B' && styles.selectedOption]} 
            onPress={() => responder('q4', 'B')}>
            <Text>B) Label</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q4 === 'C' && styles.selectedOption]} 
            onPress={() => responder('q4', 'C')}>
            <Text>C) Text</Text>
          </TouchableOpacity>

          {/* Pergunta 5 */}
          <Text style={styles.question}>5. Os componentes do React Native geram elementos...</Text>
          <TouchableOpacity 
            style={[styles.option, respostas.q5 === 'A' && styles.selectedOption]} 
            onPress={() => responder('q5', 'A')}>
            <Text>A) Nativos da plataforma (iOS e Android).</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.option, respostas.q5 === 'B' && styles.selectedOption]} 
            onPress={() => responder('q5', 'B')}>
            <Text>B) Apenas em HTML e CSS puro.</Text>
          </TouchableOpacity>

          {/* Botão de Envio */}
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={() => setMostrarResultado(true)}>
            <Text style={styles.submitButtonText}>Ver Resultado</Text>
          </TouchableOpacity>

          {mostrarResultado && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                Você acertou {calcularPontuacao()} de 5 perguntas!
              </Text>
            </View>
          )}

        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    scrollContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#007AFF',
      marginTop: 15,
      marginBottom: 10,
    },
    paragraph: {
      fontSize: 16,
      color: '#555',
      lineHeight: 22,
      marginBottom: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
    separator: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 15,
    },
    cardExemplo: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#E0E0E0',
      marginVertical: 10,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    cardText: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
    question: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 15,
      marginBottom: 5,
    },
    option: {
      backgroundColor: '#FFF',
      padding: 12,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#ddd',
      marginVertical: 4,
    },
    selectedOption: {
      backgroundColor: '#D1E7DD',
      borderColor: '#BADBCC',
    },
    submitButton: {
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 25,
    },
    submitButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resultContainer: {
      marginTop: 15,
      padding: 15,
      backgroundColor: '#E2F0CB',
      borderRadius: 8,
      alignItems: 'center',
    },
    resultText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2D6A4F',
    },
  });
