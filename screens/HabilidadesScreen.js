import { View, Text, StyleSheet } from 'react-native';

export default function HabilidadesScreen({ }) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titulo}>Minhas Habilidades</Text>
                <View style={styles.card}>
                    <Text style={styles.habilidade}>• React Native</Text>
                    <Text style={styles.habilidade}>• JavaScript</Text>
                    <Text style={styles.habilidade}>• Node.js</Text>
                    <Text style={styles.habilidade}>• APIs REST</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#da2b7c',
    },

    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        padding: 20,
    },

    habilidade: {
        fontSize: 16,
        color: '#444',
        marginBottom: 10,
    },
});