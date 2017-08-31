import React, { Component } from 'react';

export default class Gallery extends Component{
  render() {
    let alternateImage = 'https://megazine3.de/wp-content/plugins/sgmbPro//img/no-image.png';
    return(
      <div>

          {
            this.props.items.map((item,index) => {
              let {title, imageLinks, infoLink} = item.volumeInfo;
              return (
              <a
                href={infoLink}
                target='_blanck'
                className='book'
                key={index}>
                <img
                  className='book-img'
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternateImage}
                  alt='BookImage'/>
                <div className='book-text'>
                  {title}
                </div>
              </a>
            )
            })
          }

      </div>
    );
  }
}
