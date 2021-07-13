import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            section:[
                {
                title:'hats',
                imageUrl:'https://i.ibb.co/rM905Rr/joe-ciciarelli-Fw-Vn-AY-x-Ma-Y-unsplash.jpg',
                id:'1',
                linkUrl:'hats'
                },
                {
                title:'jacket',
                imageUrl:'https://i.ibb.co/Ltx6H6n/lea-ochel-ns-RBb-E6-YLs-unsplash.jpg',
                id:'2',
                linkUrl:''
                },
                {
                title:'shirt',
                imageUrl:'https://i.ibb.co/wYRQGt1/benjamin-rascoe-Nxtxmm-Hc2-OE-unsplash.jpg',
                id:'3',
                linkUrl:''
                },
                {
                title:'men',
                imageUrl:'https://i.ibb.co/3sgSmMv/sebastian-pociecha-JUox-G4sp88-unsplash.jpg',
                id:'4',
                size:'large',
                linkUrl:'mens'
                },
                {
                title:'women',
                imageUrl:'https://i.ibb.co/Qpm93MX/toa-heftiba-ua9-Re-Zlzc-IE-unsplash.jpg',
                id:'5',
                size:'large',
                linkUrl:''
                }
            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Directory;