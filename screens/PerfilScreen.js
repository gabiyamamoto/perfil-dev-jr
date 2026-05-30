import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <Text style={styles.nome}>Gabriela Yamamoto</Text>

                <Image
                    source={require('../assets/imagem-perfil.png')}
                    style={styles.imagem}
                />

                <Text style={styles.cargo}>Desenvolvedora Junior</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.textoSobre}>
                    Estudante de Desenvolvimento de Sistemas, apaixonada por tecnologia,
                    programação e inovação. Busco crescer como desenvolvedora júnior e
                    adquirir experiência criando soluções criativas e eficientes.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
    },

    perfil: {
        alignItems: 'center',
        marginBottom: 30,
    },

    nome: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#da2b7c',
    },

    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#da2b7c',
    },

    cargo: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },

    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        padding: 20,
    },

    textoSobre: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        lineHeight: 22,
    },
});