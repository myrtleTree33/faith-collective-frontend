import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarginDiv from '../util/MarginDiv';

import './imageCarousel.css';
import { isMobile } from 'react-device-detect';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(x) {
    this.setState({ x });
  }

  render() {
    const { x } = this.state;
    const { item } = this.props;
    const { id, name, imgSrc, price, description } = item;
    const { currency, value } = price;
    let resolvedImgSrc = isMobile ? imgSrc.slice(0, 2) : imgSrc;

    return (
      <div
        style={{
          margin: '0 4rem'
        }}
      >
        <div>
          <img
            src={resolvedImgSrc[x]}
            style={{
              maxWidth: '100%'
            }}
          />
        </div>
        <div
          style={{
            margin: '1.5rem 0',
            textAlign: 'center'
          }}
        >
          {resolvedImgSrc.map((im, i) => (
            <span
              style={{
                margin: '.5rem'
              }}
              key={i}
            >
              <img
                src={im}
                style={{
                  maxWidth: 70
                }}
                className={i !== x ? 'carousel-item' : 'carousel-item-selected'}
                onClick={() => this.handleChange(i)}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
