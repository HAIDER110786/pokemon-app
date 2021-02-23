import React, {useState} from 'react';
import {FaListUl} from 'react-icons/fa';
import {FaGripHorizontal} from 'react-icons/fa';
import {FaCaretDown} from 'react-icons/fa';
import Blastoise from "../../images/blastoise.png";
import GridPosts from "./pokemonGridPosts";
import ListItems from "./pokemonListItems";
import './pokemon_list.css';

export default function Pokemon_list() {

    const [active,toggleActive] = useState('b1');
    const [redLine,toggleRedLine] = useState('b1');
    const [selectionBox,toggleSelectionBox] = useState(false);
    const [filterType,setFilterType] = useState('all');
    const [searchedText,newSearchText] = useState('');
    const [view,changeView] = useState('grid');
    const [pokemonData,updatedPokemonData] = useState([
        {
            id:1,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:true
        },
        {
            id:2,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:true
        },
        {
            id:3,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:4,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:5,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:6,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:7,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:8,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:9,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:10,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:11,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:12,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:13,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
        {
            id:14,
            img:Blastoise,
            name:'Blastoise',
            type:'Water',
            liked:false
        },
    ])
    
    const activateTab2 = () => {
        toggleActive('b2');
        toggleRedLine('b2');
    }
    
    const activateTab1 = () => {
        toggleActive('b1');
        toggleRedLine('b1');
    }

    const toggleLikeOrUnlike = likedPokemonId => {
        const newPokemonList = pokemonData.map(pokemon=>{
            (pokemon.id === likedPokemonId) && (pokemon.liked = !pokemon.liked);
            return pokemon;
        })
        updatedPokemonData(newPokemonList);
    }
    
    const handleFilter = (e) => {
        setFilterType(e.target.name);
        toggleSelectionBox(false);
    }

    const handleSelect = () => toggleSelectionBox( prevState => !prevState )

    const handleSearch = (e) => newSearchText(e.target.value.toLowerCase());

    const likedGridPosts = pokemonData
            .filter(pokemon => filterType === 'all' ? pokemon : pokemon.type === filterType)
            .filter(pokemon => pokemon.liked)
            .filter(pokemon => searchedText === '' ? pokemon : searchedText === pokemon.name.substring(0,searchedText.length).toLowerCase())
            .map(pokemon => <GridPosts key={pokemon.id} pokemon={pokemon} toggleLikeOrUnlike={toggleLikeOrUnlike}/>)

    const likedListItems = pokemonData
            .filter(pokemon => filterType === 'all' ? pokemon : pokemon.type === filterType)
            .filter(pokemon => pokemon.liked)
            .filter(pokemon => searchedText === '' ? pokemon : searchedText === pokemon.name.substring(0,searchedText.length).toLowerCase())
            .map(pokemon => <ListItems key={pokemon.id} pokemon={pokemon} toggleLikeOrUnlike={toggleLikeOrUnlike}/>)

    const pokemonGridPosts = pokemonData
            .filter(pokemon => filterType === 'all' ? pokemon : pokemon.type === filterType)
            .filter(pokemon => searchedText === '' ? pokemon : searchedText === pokemon.name.substring(0,searchedText.length).toLowerCase())
            .map(pokemon => <GridPosts key={pokemon.id} pokemon={pokemon} toggleLikeOrUnlike={toggleLikeOrUnlike}/>)

    const pokemonListItems = pokemonData
            .filter(pokemon => filterType === 'all' ? pokemon : pokemon.type === filterType)
            .filter(pokemon => searchedText === '' ? pokemon : searchedText === pokemon.name.substring(0,searchedText.length).toLowerCase())
            .map(pokemon => <ListItems key={pokemon.id} pokemon={pokemon} toggleLikeOrUnlike={toggleLikeOrUnlike}/>)
    
    return (
        <div className="pokemon_list">
            <div className="tabs">
                <div className={ redLine === 'b1' ? 'bottomRedLine t1' : 'bottomRedLine t2' }></div>
                <button onClick={activateTab1} className={ active === 'b1' ? 'active' : '' }> ALL </button>
                <button onClick={activateTab2} className={ active === 'b2' ? 'active' : '' }> FAVOURITES </button>
            </div>
            <div className="menu">
                <label className="searchLabel" htmlFor="search">Search</label>
                <input id="search" onKeyUp={handleSearch}/>
                <div className="typeDiv" onClick={handleSelect}>
                    <div>
                        <div className={`typeLabel ${filterType === 'all' ? 'sizeAndPos' : 'sizeAndPosAntiAll'}`}>Type</div>
                        <div className="currentFilterType">{filterType !== 'all' && filterType}</div>
                    </div>
                    <div style={{marginRight:10}}>
                          <FaCaretDown style={{'color':'#8d8b8b'}}/>
                    </div>
                </div>
                {
                    selectionBox
                    &&
                    <div className="type">
                        <button name="all" onClick={handleFilter}> All </button>
                        <button name="Water" onClick={handleFilter}> Water </button>
                        <button name="Electric" onClick={handleFilter}> Electric </button>
                        <button name="Fire" onClick={handleFilter}> Fire </button>
                        <button name="Ice" onClick={handleFilter}> Ice </button>
                        <button name="Poison" onClick={handleFilter}> Poison </button>
                        <button name="Rock" onClick={handleFilter}> Rock </button>
                        <button name="Steel" onClick={handleFilter}> Steel </button>
                        <button name="Grass" onClick={handleFilter}> Grass </button>
                        <button name="Bug" onClick={handleFilter}> Bug </button>
                        <button name="Flying" onClick={handleFilter}> Flying </button>
                        <button name="Rock" onClick={handleFilter}> Rock </button>
                    </div>
                }
                <div className="iconDiv">
                    <FaListUl onClick={()=>changeView('list')} className="icon"/>
                    <FaGripHorizontal onClick={()=>changeView('grid')} className="icon"/>
                </div>
            </div>
            {
                active === 'b1' && redLine === 'b1'
                ? view === 'grid' 
                    ? <div className="gridPosts">{pokemonGridPosts.length > 0 && pokemonGridPosts}</div> 
                    : <div className="listItems">{pokemonListItems.length > 0 && pokemonListItems}</div>
                :  view === 'grid' 
                    ? <div className="gridPosts">{likedGridPosts}</div>
                    : <div className="listItems">{likedListItems}</div>
            }
        </div>
    )
}
