import React from 'react'
import './footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.show) {
            return (
                <>
                    <div className='footer'>
                        <p className='cr-normal'>All photography &#169; Paul Burke</p>
                        <p><strong><a href='https://forms.gle/tmRc9YAdVKpJFLHo9' target='_blank'>Contact Me</a></strong></p>
                        <p>Instagram <strong>@<a href='https://www.instagram.com/paulburkephotography/' target='_blank'  style={{color: 'black'}}>paulburkephotography</a></strong></p>
                        <p className='cr-bottom'>All photography &#169; Paul Burke</p>
                    </div>
                </>
            )
        }else{
            return null
        }
    }
}

export default Footer
