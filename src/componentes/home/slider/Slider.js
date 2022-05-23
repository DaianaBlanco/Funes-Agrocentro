import React from 'react';

class Slider extends React.Component {

  render() {

  	return (


		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    
			<div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid"  src="https://s1.1zoom.me/b5050/728/Agricultural_machinery_Fields_2015-21_Case_IH_607618_1920x1200.jpg"/>
		            
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid"  src="https://s1.1zoom.me/b5050/995/Agricultural_machinery_Fields_Claas_Jaguar_980_536408_1920x1200.jpg" />
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src="https://img.besthqwallpapers.com/Uploads/23-3-2019/84483/massey-ferguson-7415-planting-wheat-sowing-field-concepts-seeder-new-tractor.jpg"/> 
					
		        </div>
				
		    </div>

		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Anterior</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Siguiente</span>
		    </a>
		</div>

	

  	)
    
  }

}

export default Slider;