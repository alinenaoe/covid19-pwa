import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import * as S from './style';

function Card( {value, label, color} ) {
    return(
        <CardUI>
            <S.CardContentS color={color}>
                <S.Value>{value}</S.Value>
                <S.Label>{label}</S.Label>
            </S.CardContentS>
        </CardUI>
    )
}

export default memo(Card)