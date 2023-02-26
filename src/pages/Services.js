import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/services';

const Services = () => (
  <Main title="Services" description="Learn about Kevin's services.">
    <article className="post" id="services">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/services">Services</Link>
          </h2>
          <p>A selection of Services offered</p>
        </div>
      </header>
      {data.map((service) => (
        <Cell data={service} key={service.title} />
      ))}
    </article>
  </Main>
);

export default Services;
