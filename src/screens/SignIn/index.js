import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const IllustrationImg = require('../../../assets/kisspng.png');
const UnionImg = require('../../../assets/union.png');
const DiscordImg = require('../../../assets/discord.png');

const { width } = Dimensions.get('window');

const scale = width / 375;

export function SignIn({ onPress }) {
    return (
        <LinearGradient
            colors={['#0E1647', '#0A1033']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            {/* Fundo Union */}
            <Image
                source={UnionImg}
                style={styles.unionImage}
                resizeMode="contain"
            />

            {/* Personagem */}
            <Image
                source={IllustrationImg}
                style={styles.characterImage}
                resizeMode="contain"
            />

            {/* Bloco de Conteúdo (Título e Subtítulo) */}
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>
            </View>

            {/* Botão */}
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Image
                        source={DiscordImg}
                        style={styles.discordIcon}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.buttonText}>
                    Entrar com Discord
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    unionImage: {
        width: 387 * scale,
        height: 359 * scale,
        position: 'absolute',
        top: 100 * scale,
        left: -6 * scale,
    },
    characterImage: {
        width: 375 * scale,
        height: 304 * scale,
        position: 'absolute',
        top: 114.5 * scale,
        left: -1 * scale,
    },
    content: {
        width: 259 * scale,
        position: 'absolute',
        top: 394.5 * scale,
        alignItems: 'center',
    },
    title: {
        width: 259 * scale,
        fontSize: 40,
        fontFamily: 'Rajdhani_700Bold',
        lineHeight: 40,
        color: '#DDE3F0',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        width: 247 * scale,
        fontFamily: 'Inter_400Regular',
        fontSize: 15,
        lineHeight: 25,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    button: {
        width: 274 * scale,
        height: 56,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 628.5 * scale,
    },
    iconContainer: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: 'rgba(0, 0, 0, 0.11)',
    },
    discordIcon: {
        width: 24,
        height: 18,
    },
    buttonText: {
        flex: 1,
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
    },
});