import React from 'react';
import {FaRegHeart} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function listItems({pokemon,toggleLikeOrUnlike}) {
    return (
        <Link className="listItem" to={`/pokemon/${pokemon.id}`}>
            <div className="listItem__image">
                <img style={{'maxWidth':'100%'}} src={pokemon.img} alt={`${pokemon.name}_picture`}/>
            </div>
            <div className="listItem__imageDetails">
                <div style={{'width':'98%'}}>
                    <div style={{'marginBottom':7,'fontSize':20,'fontFamily':'sans-serif'}}>
                        <b>{pokemon.name}</b>
                    </div>
                    <div style={{'fontSize':16,'fontFamily':'sans-serif'}}>{pokemon.type}</div>
                </div>
                <div style={{'width':'2%'}}>
                    { 
                        pokemon.liked 
                        ? <FaHeart onClick={()=>toggleLikeOrUnlike(pokemon.id)} style={{'color':'red'}} /> 
                        : <FaRegHeart onClick={()=>toggleLikeOrUnlike(pokemon.id)} style={{'color':'red'}} /> 
                    }
                </div>
            </div>
        </Link>
    )
}
