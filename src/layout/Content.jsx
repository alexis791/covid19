import React, { useEffect } from 'react'
import Select from '../components/Select'
import Flag from '../components/Flag'
import Statistic from '../components/Statistic'
import StatisticGlobally from '../Containers/StatisticGlobal'
import { LoaderSmall, LoaderHigh, LoaderMedium } from '../components/Loaders'

import { connect } from 'react-redux'
import { getDataOfCovidGlobally } from '../redux/actions/covidAction'



const Content = (props) => {
  const { flag, confirmed, recovered, deaths, lastUpdate, name, population, area, loading, error} = props.covid

  const percentConfirmed = (confirmed / confirmed ) * 100  
  const percentRecovered = (recovered / confirmed ) * 100 
  const percentDeaths = (deaths / confirmed ) * 100

  useEffect(() => {
    error && alert('No se tiene informacion del pais, intente de nuevo.')
  },[error])

  return (
    <div className="Info">
      <div className="Info__Content">
        { loading ? 
          <LoaderSmall />
          : <h1 className="Title">{name}</h1> 
        }
        
      <section className="Country">
        <div className="Country__Info">
          <Select lastUpdate={lastUpdate}/> 
        </div>
        {
          loading ?
            <LoaderHigh />
            : (
              <Flag
                direction={flag}
                population={population}
                area={area}
              />
            )

        }
      </section>
      <section className="Statistics">
      {
        loading ?
          (<>
            <LoaderMedium />
            <LoaderMedium />
            <LoaderMedium />
          </>)
          : 
          (<>
              <Statistic
                title="Confirmados" 
                percent={percentConfirmed}
                status="Statistic afirmative"
                quantity={confirmed}
              />
              <Statistic
                title="Recuperados" 
                percent={percentRecovered}
                status="Statistic recovered"
                icon="em em-upside_down_face"
                quantity={recovered}
              />
              <Statistic
                title="Muertos" 
                percent={percentDeaths}
                status="Statistic deads"
                icon="em em-white_frowning_face"
                quantity={deaths}
              />
            </>)
        }
      </section>
      < StatisticGlobally />
      <h5>* Las estadisticas son calculadas en base a los casos confirmados.</h5>
      </div>      
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state.covid)
  return {
    covid: state.covid
  }
}

const mapDispatchToProps = {
  getDataOfCovidGlobally
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)