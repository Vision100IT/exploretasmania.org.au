import React, { Component } from 'react';
import { getGuides } from '../../utils/fetchJSON';
import Guide from '../models/Guide';


class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: null
    }
  }

  componentWillMount() {
    var that = this;
    getGuides(function (data) {
      that.setState({ guides: data });
    });
  }

  render() {
    var guides = <h2><i className="fa fa-spinner"></i></h2>;
    if (this.state.guides !== null) {
      guides = this.state.guides.map(guide => <Guide key={guide.id} id={guide.id} name={guide.name} image={guide.img} bio={guide.bio} title={guide.role} />)
    }
    return (
      <section>
        <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">
              <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                  <h1>Guides</h1>
                </div>
              </div>

              <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                  <div className="breadcrumbs">
                    <a href="/">Home</a>
                    <span className="delimiter">›</span>
                    <span title="" className="nolink">Guides</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">
                <div className="region region-content">
                  <div className="content">

                    {guides}


                  </div>
                </div>  </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Guides;
