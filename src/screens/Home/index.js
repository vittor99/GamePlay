import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CategoryCard } from '../../components/CategoryCard';
import { AppointmentItem } from '../../components/AppointmentItem';

// Imagens do Header e Ícones Gerais
const AvatarImg = require('../../../assets/profile-pic.png');
const CalendarIcon = require('../../../assets/calendario.png');
const PlayerIcon = require('../../../assets/Anfitrião.png');
const VisitorIcon = require('../../../assets/visitante.png');
const AddIcon = require('../../../assets/Vector.png');

// Ícones das Categorias (Carrossel Horizontal)
const RankedImg = require('../../../assets/Ranqueada.png');
const DuelImg = require('../../../assets/Duelo.png');
const FunImg = require('../../../assets/Diversao.png');

// Capas dos Jogos nas Partidas
const LolImg = require('../../../assets/lol.png');
const RedDeadImg = require('../../../assets/rdr.png');
const CsgoImg = require('../../../assets/cs.png');
const ApexImg = require('../../../assets/apex.png');
const ValorantImg = require('../../../assets/valorant.png');

const CATEGORIES = [
    { id: '1', title: 'Ranqueada', icon: RankedImg },
    { id: '2', title: 'Duelo 1x1', icon: DuelImg },
    { id: '3', title: 'Diversão', icon: FunImg },
];

const APPOINTMENTS = [
    {
        id: '1',
        guild: { name: 'Lendários', icon: LolImg, owner: true },
        category: 'Ranqueada',
        date: '18/06 às 21:00h',
    },
    {
        id: '2',
        guild: { name: 'Yeah, boy', icon: RedDeadImg, owner: false },
        category: 'Diversão',
        date: '23/06 às 19:00h',
    },
    {
        id: '3',
        guild: { name: 'Rumo ao topo', icon: CsgoImg, owner: true },
        category: '1x1',
        date: '20/06 às 09:00h',
    },
    {
        id: '4',
        guild: { name: 'Bora queimar tudo', icon: ApexImg, owner: true },
        category: 'Ranqueada',
        date: '20/06 às 14:20h',
    },
    {
        id: '5',
        guild: { name: 'Valorosos', icon: ValorantImg, owner: true },
        category: 'Diversão',
        date: '18/06 às 21:00h',
    },
];

export function Home({ onAddPress, onLogout }) {
    const [showExitConfirmation, setShowExitConfirmation] = useState(false);

    return (
        <LinearGradient
            colors={['#0E1647', '#0A1033']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={styles.content}>
                {/* Header do Perfil */}
                <View style={styles.header}>
                    <View style={styles.userContainer}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setShowExitConfirmation(true)}
                        >
                            <Image source={AvatarImg} style={styles.avatar} resizeMode="cover" />
                        </TouchableOpacity>
                        <View>
                            <View style={styles.user}>
                                <Text style={styles.greeting}>Olá,</Text>
                                <Text style={styles.username}>Tiago</Text>
                            </View>
                            <Text style={styles.message}>Hoje é dia de vitória</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={onAddPress}>
                        <Image source={AddIcon} style={styles.addIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                {/* Carrossel Horizontal de Categorias */}
                <View style={styles.categoriesContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 40 }}
                    >
                        {CATEGORIES.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </ScrollView>
                </View>

                {/* Header da Lista */}
                <View style={styles.listHeader}>
                    <Text style={styles.title}>Partidas agendadas</Text>
                    <Text style={styles.subtitle}>Total 6</Text>
                </View>

                {/* Lista de Partidas */}
                <FlatList
                    data={APPOINTMENTS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <AppointmentItem
                            item={item}
                            calendarIcon={CalendarIcon}
                            hostIcon={PlayerIcon}
                            visitorIcon={VisitorIcon}
                        />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <Modal
                visible={showExitConfirmation}
                transparent
                animationType="fade"
                statusBarTranslucent
                onRequestClose={() => setShowExitConfirmation(false)}
            >
                <View style={styles.modalOverlay}>
                    <TouchableOpacity
                        style={styles.modalBackdrop}
                        activeOpacity={1}
                        onPress={() => setShowExitConfirmation(false)}
                    />
                    <View style={styles.exitPanel}>
                        <Text style={styles.exitTitle}>
                            Deseja sair do Game<Text style={styles.exitTitleAccent}>Play</Text>?
                        </Text>
                        <View style={styles.exitActions}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                activeOpacity={0.7}
                                onPress={() => setShowExitConfirmation(false)}
                            >
                                <Text style={styles.cancelButtonText}>Não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                activeOpacity={0.7}
                                onPress={onLogout}
                            >
                                <Text style={styles.confirmButtonText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'stretch',
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        width: '100%',
        paddingTop: 57,
    },
    header: {
        width: '100%',
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 8,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#243189',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    greeting: {
        fontFamily: 'Rajdhani_500Medium',
        fontSize: 24,
        lineHeight: 24,
        color: '#DDE3F0',
        marginRight: 6,
    },
    username: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 24,
        lineHeight: 24,
        color: '#DDE3F0',
    },
    message: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13,
        lineHeight: 17,
        marginTop: 8,
    },
    addButton: {
        height: 48,
        width: 48,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        width: 14,
        height: 14,
    },
    categoriesContainer: {
        width: '100%',
        height: 120,
        paddingLeft: 24,
        marginTop: 32,
        marginBottom: 24,
    },
    listHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 16,
        marginBottom: 12,
    },
    title: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 18,
        lineHeight: 23,
        letterSpacing: 0,
    },
    subtitle: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13,
        lineHeight: 17,
        textAlign: 'right',
    },
    matches: {
        width: '100%',
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    separator: {
        width: 267,
        height: 1,
        backgroundColor: '#1D2766',
        marginTop: 12,
        marginBottom: 8,
        alignSelf: 'flex-end',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.78)',
    },
    modalBackdrop: {
        ...StyleSheet.absoluteFillObject,
    },
    exitPanel: {
        minHeight: 152,
        paddingHorizontal: 27,
        paddingTop: 20,
        paddingBottom: 36,
        backgroundColor: '#0E1647',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    exitTitle: {
        marginBottom: 22,
        color: '#DDE3F0',
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
    },
    exitTitleAccent: {
        color: '#E51C44',
    },
    exitActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    cancelButton: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3B4BA8',
    },
    cancelButtonText: {
        color: '#DDE3F0',
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
    },
    confirmButton: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#E51C44',
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
    },
});