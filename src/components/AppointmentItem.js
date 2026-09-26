import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function AppointmentItem({ item, calendarIcon, hostIcon, visitorIcon }) {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <Image source={item.guild.icon} style={styles.guildIcon} resizeMode="cover" />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.guildName}>{item.guild.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.dateInfo}>
                        <Image source={calendarIcon} style={styles.infoIcon} resizeMode="contain" />
                        <Text style={styles.date}>{item.date}</Text>
                    </View>

                    <View style={styles.playersInfo}>
                        <Image
                            source={item.guild.owner ? hostIcon : visitorIcon}
                            style={styles.infoIcon}
                            resizeMode="contain"
                        />
                        <Text style={[styles.playerRole, { color: item.guild.owner ? '#E51C44' : '#32BD50' }]}>
                            {item.guild.owner ? 'Anfitrião' : 'Visitante'}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 69,
        flexDirection: 'row',
        alignItems: 'center',
    },
    guildIcon: {
        width: 64,
        height: 68,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        marginRight: 16,
    },
    content: {
        flex: 1,
        minHeight: 69,
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    guildName: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 18,
        lineHeight: 23,
    },
    category: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13,
        lineHeight: 17,
        textAlign: 'right',
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1,
    },
    infoIcon: {
        width: 16,
        height: 16,
    },
    date: {
        fontFamily: 'Inter_400Regular',
        color: '#DDE3F0',
        fontSize: 13,
        lineHeight: 17,
        marginLeft: 6,
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    playerRole: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        lineHeight: 17,
        marginLeft: 6,
        textAlign: 'right',
    },
});