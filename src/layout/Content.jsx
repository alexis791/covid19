import React from 'react'
import Select from '../components/Select'
import Chart from '../components/Chart'
import Flag from '../components/Flag'
import Statistic from '../components/Statistic'


const Content = () => (
  <div className="Info">
    <div className="Info__Content">
    <section className="Country">
      <div className="Country__Info">
        <Select />
        <p className="Update">Ultima Actualización <b>2020-04-06T23:21:55.000Z</b></p>
      </div>
      <Flag />
    </section>
    <section className="Statistics">
      <Statistic
        title="Confirmados" 
        percent={100}
        status="Statistic afirmative"
        quantity="13,216,547"
      />
      <Statistic
        title="Recuperados" 
        percent={100}
        status="Statistic recovered"
        icon="em em-upside_down_face"
        quantity="13,216,547"
      />
      <Statistic
        title="Muertos" 
        percent={100}
        status="Statistic deads"
        icon="em em-white_frowning_face"
        quantity="13,216,547"
      />
    </section>
    <p className="Title">Datos Mundiales Diarios</p>
    <section className="Statistics">
      <Statistic
        title="Confirmados" 
        percent={100}
        status="Statistic afirmative"
        icon="em em-face_with_thermometer"
        quantity="13,216,547"
      />
      <Statistic
        title="Recuperados" 
        percent={100}
        status="Statistic recovered"
        icon="em em-upside_down_face"
        quantity="13,216,547"
      />
      <Statistic
        title="Muertos" 
        percent={100}
        status="Statistic deads"
        icon="em em-white_frowning_face"
        quantity="13,216,547"
      />
    </section>
    <Chart />
    </div>
  </div>
)

export default Content