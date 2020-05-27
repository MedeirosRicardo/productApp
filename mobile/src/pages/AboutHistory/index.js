import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function AboutHistory() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>HISTÓRIA</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        A CERVEJARIA DAMA FICA EM PIRACICABA, HOJE É UMA REFERÊNCIA NACIONAL EM CERVEJA ARTESANAL DE QUALIDADE.
                        FUNDADA EM JANEIRO DE 2010, A FÁBRICA ESTÁ FOCADA NA PRODUÇÃO DE ESTILOS DE CERVEJAS COM CARACTERÍSTICAS PARTICULARES,
                        NO SENTIDO DE FORMAR UMA PALETA ONDE CADA PRODUTO COMPLEMENTA O OUTRO, COM VARIADAS ALTERNATIVAS DE COR, TEOR ALCOÓLICO,
                        AMARGOR, SABOR E AROMA. NÃO POR ACASO, A DECISÃO DA CRIAÇÃO DE CADA NOVA CERVEJA DAMA, PASSA PELO CRIVO NÃO APENAS DE UM
                        MESTRE CERVEJEIRO, MAS TAMBÉM DE UMA EQUIPE QUE CONTA COM UM BIER SOMMELIER, QUE CONTRIBUEM NA ESCOLHA DE CADA NOVO
                        INGREDIENTE, DE CADA NOVA CRIAÇÃO.
                    </Text>
                    <Text style={styles.text}>
                        CIENTES DA GRANDE RESPONSABILIDADE QUE POSSUÍMOS EM POSSIBILITAR QUE CADA VEZ MAIS PESSOAS DESCUBRAM NOVOS CAMINHOS PARA
                        INGRESSAR NO UNIVERSO CERVEJEIRO, RICO EM HISTÓRIA E TRADIÇÃO, NÃO MEDIMOS ESFORÇOS EM FAZER O MELHOR.
                    </Text>
                </View>
            </View>
        </View>
    );
}