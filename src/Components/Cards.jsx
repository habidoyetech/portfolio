import { useState } from "react"
import React from 'react'
import {IoIosArrowDropup} from 'react-icons/io'
import {IoIosArrowDropdown} from 'react-icons/io'



const Cards = (props) => {

  const [isShowing, cardIsShowing] = useState(false)

  const displayCard = () => {
    cardIsShowing(!isShowing)
  }

  
  return (
    <div className='card'>
      <div className='card_header' onClick={displayCard} id={props.id}>
        <button>
          <h5>{props.name}</h5>
          <span>{!isShowing ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>}</span>
        </button>
      </div>
      <div className={`collapse ${!isShowing ? 'hide-card':'show-card'}`}>
        <div className='card-body'>
          {props.datas.map((data) => {
            return (
              <div className='tech-skill'> 
                <img src={data.image} alt={data.description} />
                <p>{data.name}</p>
              </div>
            )
          } )}
        </div>
      </div>
    </div>
  )
}

export default Cards