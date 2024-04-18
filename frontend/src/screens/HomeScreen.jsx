import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>Educere</title>
      </Helmet>
      <div className="box-trending">
        <div className="box-header">header</div>
        <div className="box-carousel">carousel</div>
      </div>
      <div className="box-recommend">
        <div className="box-header">header</div>
        <div className="box-category">categories</div>
      </div>
      <div className="box-trending">
        <div className="box-header">header</div>
        <div className="box-carousel">carousel</div>
      </div>
    </div>
  );
}
