import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.8041474263573!2d-64.1774410489999!3d-31.309157859353434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329a3ea1f3bacf%3A0x24e4129a42780971!2sAvenida%20Juan%20B.%20Justo%2010500%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1650853048114!5m2!1ses-419!2sar"></iframe>
        </div>

    )
    
  }

}

export default Mapa;