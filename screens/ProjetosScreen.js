import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProjetosScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus Projetos</Text>
            <View style={styles.card}>
                <Text style={styles.nomeProjeto}>
                    Entre Linhas</Text>
                <Text style={styles.descricao}>Plataforma literária para vestibulares com conteúdos em português e inglês, simulados, biblioteca digital e integração entre APIs.</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nomeProjeto}>
                    Adote Aqui</Text>
                <Text style={styles.descricao}>Plataforma de adoção de pets desenvolvida no SENAI. Atuei como Product Owner (P.O), participando do gerenciamento, levantamento de requisitos e desenvolvimento da solução.</Text>
            </View>
        </View>
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
        fontWeight: 'bold',
        color: '#da2b7c',
        marginBottom: 20,
    },

    perfil: {
        alignItems: 'center',
        marginBottom: 30,
    },

    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
    },

    nomeProjeto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },

    descricao: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
    },
});