import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RankedImg = require('../../../assets/Ranqueada.png');
const DuelImg = require('../../../assets/Duelo.png');
const FunImg = require('../../../assets/Diversao.png');

const CATEGORIES = [
    { id: '1', title: 'Ranqueada', icon: RankedImg },
    { id: '2', title: 'Duelo 1x1', icon: DuelImg },
    { id: '3', title: 'Diversão', icon: FunImg },
];

export function AppointmentCreate({ navigation, onBack }) {
    const [categorySelected, setCategorySelected] = useState('');
    const [guild, setGuild] = useState({});
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    function handleCategorySelect(categoryId) {
        setCategorySelected(categoryId === categorySelected ? '' : categoryId);
    }

    function handleOpenGuilds() {
        // A seleção de servidor será conectada quando houver uma lista de servidores.
    }

    function handleGoBack() {
        if (onBack) {
            onBack();
            return;
        }

        navigation?.goBack?.();
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <LinearGradient
                colors={['#0E1647', '#0A1033']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.background}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Agendar partida</Text>
                    <View style={styles.headerSpacer} />
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <Text style={styles.categoryLabel}>Categoria</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categories}
                    >
                        {CATEGORIES.map((category) => {
                            const checked = category.id === categorySelected;
                            return (
                                <TouchableOpacity
                                    key={category.id}
                                    style={styles.categoryCard}
                                    activeOpacity={0.7}
                                    onPress={() => handleCategorySelect(category.id)}
                                >
                                    <View style={[styles.selectionBox, checked && styles.selectionBoxChecked]} />
                                    <Image
                                        source={category.icon}
                                        style={[styles.categoryIcon, !checked && styles.categoryInactive]}
                                        resizeMode="contain"
                                    />
                                    <Text style={[styles.categoryTitle, !checked && styles.categoryInactive]}>
                                        {category.title}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    <View style={styles.form}>
                        <TouchableOpacity activeOpacity={0.7} onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {guild.icon ? (
                                    <Image source={{ uri: guild.icon }} style={styles.image} />
                                ) : (
                                    <View style={styles.imagePlaceholder} />
                                )}
                                <View style={styles.selectBody}>
                                    <Text style={styles.selectLabel}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>
                                <Text style={styles.chevronText}>›</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.fieldGroup}>
                            <View>
                                <Text style={styles.label}>Dia e mês</Text>
                                <View style={styles.column}>
                                    <TextInput
                                        style={styles.inputSmall}
                                        keyboardType="numeric"
                                        maxLength={2}
                                        value={day}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>/</Text>
                                    <TextInput
                                        style={styles.inputSmall}
                                        keyboardType="numeric"
                                        maxLength={2}
                                        value={month}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={styles.label}>Hora e minuto</Text>
                                <View style={styles.column}>
                                    <TextInput
                                        style={styles.inputSmall}
                                        keyboardType="numeric"
                                        maxLength={2}
                                        value={hour}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>:</Text>
                                    <TextInput
                                        style={styles.inputSmall}
                                        keyboardType="numeric"
                                        maxLength={2}
                                        value={minute}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={styles.fieldHeader}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
                        </View>

                        <TextInput
                            style={styles.textArea}
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                                <Text style={styles.buttonText}>Agendar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 120,
        paddingHorizontal: 22,
        paddingTop: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backText: {
        width: 32,
        color: '#DDE3F0',
        fontSize: 24,
        lineHeight: 28,
        fontWeight: '700',
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 20,
        lineHeight: 24,
    },
    headerSpacer: {
        width: 32,
    },
    scrollContent: {
        paddingBottom: 28,
    },
    categoryLabel: {
        marginTop: 26,
        marginBottom: 10,
        marginHorizontal: 22,
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 16,
        lineHeight: 20,
    },
    categories: {
        paddingHorizontal: 22,
        paddingBottom: 1,
    },
    label: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 16,
        lineHeight: 20,
    },
    categoryCard: {
        width: 94,
        height: 108,
        backgroundColor: '#171F52',
        borderColor: '#202D75',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        paddingTop: 10,
        paddingBottom: 8,
    },
    selectionBox: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 8,
        height: 8,
        borderWidth: 1,
        borderColor: '#34458F',
        borderRadius: 2,
    },
    selectionBoxChecked: {
        backgroundColor: '#E51C44',
        borderColor: '#E51C44',
    },
    categoryInactive: {
        opacity: 0.5,
    },
    categoryIcon: {
        width: 48,
        height: 48,
        marginBottom: 10,
    },
    categoryTitle: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 14,
        lineHeight: 17,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 30,
    },
    select: {
        width: '100%',
        height: 62,
        flexDirection: 'row',
        borderColor: '#263982',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 24,
        overflow: 'hidden',
    },
    imagePlaceholder: {
        width: 58,
        height: 60,
        backgroundColor: '#202D70',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    image: {
        width: 58,
        height: 60,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    selectLabel: {
        color: '#DDE3F0',
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 16,
        lineHeight: 20,
    },
    chevronText: {
        color: '#DDE3F0',
        fontSize: 22,
        lineHeight: 24,
        marginLeft: 8,
    },
    fieldGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
    },
    inputSmall: {
        width: 44,
        height: 43,
        backgroundColor: '#202D70',
        borderRadius: 8,
        color: '#DDE3F0',
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#263982',
    },
    divider: {
        marginHorizontal: 4,
        color: '#DDE3F0',
        fontFamily: 'Rajdhani_500Medium',
        fontSize: 18,
    },
    fieldHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    caracteresLimit: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 12,
        lineHeight: 17,
    },
    textArea: {
        width: '100%',
        height: 87,
        backgroundColor: '#202D70',
        borderRadius: 8,
        color: '#DDE3F0',
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        paddingHorizontal: 12,
        paddingTop: 12,
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#263982',
    },
    footer: {
        marginTop: 50,
    },
    button: {
        width: '100%',
        height: 51,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter_400Regular',
        color: '#FFF',
        fontSize: 14,
    },
});