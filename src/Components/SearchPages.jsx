import React from 'react'
import { NavLink } from 'react-bootstrap'

const SearchPages = () => {
  return (
    <div>
        <div class="container">
        <h2>In today's world, almost everybody chooses to travel and tourism as their leisure. Traveling is a good way to learn about the world</h2>
        <p>Helping You Find and Book the World's best boutique and luxuries Hotels</p>
        <p>INDEPENDENT ALWAYS</p>
        <p>Travellerspoint helps you discover new destinations, organise your trips and share your travel experiences.</p>
        <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
        <div id="myDIV">
            <p>Search Hundreds of travels sites at once.</p>
           <p> Personalised, well-crafted tour packages for best experiences</p>
            <div>Discover a Better Way to Fly.</div>
            <button class="btn">I am a btn</button>
            <button class="btn btn-info">Another button</button>
            <NavLink> Create a map of your travels</NavLink>
            <NavLink>Get advice from the community</NavLink>
            <NavLink>Blog about your adventures</NavLink>
            <p>Another paragraph.</p>
        </div>
        </div>
    </div>
  )
}

export default SearchPages