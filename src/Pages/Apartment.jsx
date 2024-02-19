import React from 'react';
import './Apartment.css'
import Data from '../data/logements.json'
import { useParams } from 'react-router-dom'
import Dropdown from '../Components/Dropdown.jsx'
import Stars from '../Components/Stars.jsx'
import LogementTitle from '../Components/LogementTitle.jsx'
import Tags from '../Components/Tags.jsx'
import Host from '../Components/Host.jsx'
import Caroussel from '../Components/Caroussel.jsx'
import Error from './Error.jsx'

function Apartment() {
 
  const { id } = useParams()
 
  const logemenData = Data.find((product) => product.id === id)
  if (!logemenData) return <Error />
  const {
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
    pictures
  } = logemenData

  return (
    <main className="logement-container">
     <Caroussel  pictures={pictures} />
      <LogementTitle title={title} location={location} />
      <div className="logement-container_tags-container">
        <Tags tags={tags} />
       
        <div className="logement-container_stars_host">
          <Stars rating={rating} />
          <Host host={host} />
        </div>
      </div>

      <div className="logement-container_dropDown">
        <Dropdown title="Description" description={description} className="dropdown-logement"/>
        <Dropdown
          title="Équipements"
          className="dropdown-logement"
          description={
            equipments &&
            equipments.map((equipement, index) => {
              return (
                <ul key={equipement + index}>
                  <li>{equipement}</li>
                </ul>
              )
            })
          }
        />
      </div>
    </main>
  )
}

export default Apartment
