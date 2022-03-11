import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import IMG1 from './images/1.jpg'
import IMG2 from './images/2.jpg'
import IMG3 from './images/3.jpg'
import IMG4 from './images/4.jpg'
import IMG5 from './images/5.jpg'


function MyImage(props){
    return(
        <img className={props.className} src={props.src} onClick={props.onClick}/>
    )
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // images: null
            images: [IMG1, IMG2, IMG3, IMG4, IMG5],
            fullscreen: false,
            activeClasses: {
                images: 'grid-img'
            },
        };
        this.openModal =  this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // from https://www.codegrepper.com/code-examples/javascript/How+to+load+all+images+in+a+folder+react
    // importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }
    //
    //
    // componentDidMount() {
    //     this.setState({images: this.importAll(require.context(this.props.imgsPath, false, /\.jpg/))})
    // }

    // loadImages(imgClass = null, onClick = null) {
    //     let images = this.state.images.map((item, index) => {
    //         return (
    //             <img className={imgClass !== null ? imgClass : ''} src={item} onClick={onclick !== null ? onClick : ''}/>
    //         );
    //     });
    //     return images;
    // }

    openModal(evt) { // open modal
        console.log(evt.target);
        this.setState()
    }

    closeModal() { // close modal
        console.log('modal closed');
    }

    render() {
        return (
            <Gallery images={this.state.images} activeClasses={this.state.activeClasses} imageClick={this.openModal} xClick={this.closeModal}/>
        );
    }
}


class Gallery extends Page {
    constructor(props) {
        super(props);
    }

    renderImages(className, src, onClick){
        return (
            <MyImage
                className={className}
                src={src}
                onClick={onClick}
                key={src}
            />
        );
    }

    render() {

        // load images into list
        let images = [];
        for (let i = 0; i < this.props.images.length; i++) {
            images.push(this.renderImages(this.props.activeClasses.images, this.props.images[i], this.props.imageClick))
        }

        return (
            <div className='grid'>
                {images}
            </div>
        );
    }
}


ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
