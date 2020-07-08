import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import * as S from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <S.Item>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </S.Item>
    </MenuItem>
  )

  const textCovid19 = `Country: ${country} - Deaths: ${deaths}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Covid19 Data - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Share
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copy
      </Button>
    </div>
  )

  return (
    <Card>
      <S.CardPanelContent>
        <div>
          <Typography variant="h5" component="span" color="primary">Covid-19</Typography>
          <Typography variant="h6" component="span" color="primary">Panel</Typography>
          <Typography variant="body2" component="span" color="primary">Updated at: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </S.CardPanelContent>
    </Card>
  )
}

export default memo(Panel)