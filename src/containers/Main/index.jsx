import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import * as S from './style';

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
        .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return(
        <S.Container>
            
        </S.Container>
    )
}

export default memo(Main)