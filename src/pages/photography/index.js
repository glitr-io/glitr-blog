import React from 'react'

import Layout from '../../components/Layout'
import PhotographyRoll from '../../components/PhotographyRoll'

export default class PhotographyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #65318f, -0.5rem 0 0 #65318f',
              backgroundColor: '#65318f',
              color: 'white',
              padding: '1rem',
            }}
          >
            photography
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PhotographyRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
