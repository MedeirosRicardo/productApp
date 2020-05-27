import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from '../AboutHistory/styles';

export default function AboutFactory() {

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
                <TouchableOpacity 
                    style={styles.leftArrow}
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={28} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>FÁBRICA</Text>
                </View>
                <ScrollView
                    style={styles.textContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.text}>
                        A DECISÃO DE INSTALAR A CERVEJARIA EM PIRACICABA , TEM MUITO A VER COM A VOCAÇÃO PARA O DESENVOLVIMENTO
                        FABRIL E COM A EXCELENTE LOCALIZAÇÃO DA CIDADE.
                    </Text>
                    <Text style={styles.text}>
                        A FÁBRICA ESTÁ SITUADA EM UMA ÁREA DE 1900M² LOCALIZADA NO BAIRRO PIRACICAMIRIM E CONSTANTEMENTE PASSA POR
                        ATUALIZAÇÕES TECNOLÓGICAS.
                    </Text>
                    <Text style={styles.text}>
                        TECNICAMENTE É UMA DAS FÁBRICAS MAIS ATUALIZADAS DO MERCADO DE MICRO CERVEJARIAS DO PAÍS. MOINHO BÜHLER,
                        AUTOMAÇÃO NA SALA DE BRASSAGEM E NO CONTROLE DE TEMPERATURA DA ADEGA E ENVASADORA GAI, UM EQUIPAMENTO ITALIANO
                        QUE ESTÁ NAS PRINCIPAIS CERVEJARIAS DO MUNDO. ESTES EXEMPLOS COMPROVAM NOSSA CONSTANTE BUSCA NA EXCELÊNCIA DOS
                        NOSSOS PRODUTOS. ALÉM DE OUTROS DETALHES QUE SOMENTE EM UMA VISITA, VOCÊ PODERÁ CONHECER!
                    </Text>
                    <Text style={styles.text}>
                        NOSSA EQUIPE CONTA COM PROFISSIONAIS ALTAMENTE QUALIFICADOS E TREINADOS, ISSO RESULTA EM PRODUTOS EXTREMAMENTE
                        PADRONIZADOS E PREMIADOS INTERNACIONALMENTE.
                    </Text>
                    <Text style={styles.text}>
                        RESULTADO DE TUDO ISSO: CERVEJA COM SABORES E AROMAS INTENSOS.-
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}