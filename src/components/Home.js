import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  
  render() {
    return(
      <div style={{width: '50%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2017/05/16/886056_education_512x512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1> welcome to student and campus portal</h1>

            <hr/>

          <p>Lehman college | Queens college | City college | Laguardia community college| NYU |Columbia university | Bronx community college | GVSU</p>

       
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
