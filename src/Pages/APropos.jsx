import React from 'react';
import './APropos.css';
import Data from '../data/apropos.json';
import Dropdown from '../Components/Dropdown'; 

function APropos() {
  return (
    <main className="apropos__container">
      <div className="apropos__container__banner"></div>
      {Data &&
        Data.map((data) => {
          return (
            <div key={data.id}>
               <Dropdown
                title={data.title}
                description={data.description}
                className="dropdown-apropos"
              />
            </div>
          );
        })}
    </main>
  );
}

export default APropos;
