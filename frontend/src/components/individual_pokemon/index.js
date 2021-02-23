import React from 'react'
import './individual_pokemon.css'
import {FaRegHeart} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import Blastoise from "../../images/blastoise.png";
import Squirtle from "../../images/squirtle.png";
import {FaVolumeUp} from "react-icons/fa";

export default function Individual_pokemon({match}) {
    return (
        <div className="individual_pokemon">
            <div className="mainImage">
                <FaVolumeUp className="speakIcon"/>
                <img src={Blastoise} alt="Blastoise"/>
            </div>
            <div style={{'padding':'14px','backgroundColor':'#f1f1f1','borderBottom':'1px solid #d3d3d3'}}>
                <div className="detailSection">
                    <div style={{'width':'98%'}}>
                        <h1>Blastoise</h1>
                        <p>Water</p>
                    </div>
                    <div>
                        <FaRegHeart />
                    </div>
                </div>
                <div className="powerSection">
                    <div style={{'display':'flex','justifyContent':'space-between','width':'100%'}}>
                        <div style={{'width':'94%','height':14,'backgroundColor':'cornflowerblue','borderRadius':15}}></div>
                        <div>CP:1483</div>
                    </div>
                    <div style={{'display':'flex','justifyContent':'space-between','width':'100%'}}>
                        <div style={{'width':'94%','height':14,'backgroundColor':'aquamarine','borderRadius':15}}></div>
                        <div>CP:1632</div>
                    </div>
                </div>
            </div>
            <div className="physique">
                <div style={{'width':'48%','height':'100%','display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'flex-start'}}>
                    <h2>Weight</h2>
                    <p>11.38kg - 14.63kg</p>
                </div>
                <div style={{'width':'0.15%','height':'100%','backgroundColor':'#dddddd'}}></div>
                <div style={{'width':'48%','height':'100%','display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'flex-start'}}>
                    <h2>Height</h2>
                    <p>0.88m -1.13m</p>
                </div>
            </div>
            <div className="evolution">
                <div style={{"width":"100%","font-family":'sans'}}><h1 style={{'margin':'14px 0px','marginBottom':'50px'}}>Evolutions</h1></div>
                <div className="evolution__imageAndDetailsDiv">
                    <div className="evolution__imageAndDetails">
                        <div className="evolution__Image"><img src={Squirtle} height={'100%'} alt="squirtle image"/></div>
                        <div className="evolution__Details">
                            <h1 style={{'margin':7}}>Squritle</h1>
                            <FaRegHeart style={{'margin':'7px 14px','marginRight':20}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
