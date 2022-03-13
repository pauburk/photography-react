import React from 'react'
import './topnav.css'
const TOPLOGO = process.env.PUBLIC_URL + '/images/logo.png'

class Topnav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.show) {
            return (
                <>
                    <div className='topnav'>
                        <a href='localhost:3000'><img className='top-logo' src={TOPLOGO}/></a>
                        <ul className='main'>
                            <li><a href='localhost:3000'>HOME</a></li>
                            <li><a href='localhost:3000'>PORTFOLIO</a></li>
                            <li><a href='localhost:3000'>STORE</a></li>
                            <li><a href='localhost:3000'>ABOUT</a></li>
                            <li><a href='localhost:3000'>GALLERY</a></li>
                        </ul>
                    </div>
                </>
            )
        }else{
            return null
        }
    }
}

export default Topnav
