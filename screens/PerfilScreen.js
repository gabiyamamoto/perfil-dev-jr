import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen({ navigation }) {
    return (
        <>
            <View style={styles.perfil}>
                <Text style={styles.nome}> Gabriela Yamamoto
                </Text>
                <Image source={require('../assets/imagem-perfil.png')} style={styles.imagem}></Image>
                <Text style={styles.cargo}>Desenvolvedora Junior</Text>
            </View>
            <View style={styles.sobre}>
                <Text style={styles.textoSobre}>
                    Estudante de Desenvolvimento de Sistemas, apaixonada por tecnologia, programação e inovação. Busco crescer como desenvolvedora júnior e adquirir experiência criando soluções criativas e eficientes.
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    perfil: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 30,
    },

    nome: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#da2b7c',
    },

    cargo: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },

    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#da2b7c',
    },

    textoSobre: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center',
        lineHeight: 22,
    },

    sobre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 16,
        padding: 20,
    },
});