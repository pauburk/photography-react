import React from 'react'
import './gallery.css'

function MyImage(props){
    return(
        <img
            className={props.className}
            src={props.src}
            onClick={props.onClick}
        />
    )
}

class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }

    renderImages(className, src, onClick){
        return (
            <div className={className}><MyImage
                src={src}
                onClick={onClick}
                key={src}
            /></div>
        )
    }

    render() {
        // load images into list
        let images = [];
        for (let i = 0; i < this.props.images.length; i++) {
            images.push(this.renderImages(this.props.activeClasses.images, this.props.images[i], this.props.imageClick));
        };

        // create caption from filename
        const caption = this.props.activeImg.split('/').pop().slice(0,-4).replaceAll('%20', ' ').replaceAll('+', '\u00b7');

        return (
            <>
                <img className={this.props.activeClasses.modalImg} src={this.props.activeImg}/>
                <div className={this.props.activeClasses.caption}><p>{caption}</p></div>
                <div className={this.props.activeClasses.imagesDiv}>
                    {images}
                </div>
                <div className={this.props.activeClasses.modalButtons}>
                    <div className='modal-x' onClick={this.props.xClick}><p>&#9587;</p></div>
                    <a className='prev-modal'>&#8249;</a>
                    <a className='next-modal'>&#8250;</a>
                </div>
            </>
        );
    }
}

export default Gallery
