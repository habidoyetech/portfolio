import { useState } from "react"
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Collapse } from '@mui/material';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  color: '#fff',
}));




const SkillCard = ({skillGroup}) => {

  const [isShowing, cardIsShowing] = useState(false)

  const displayCard = () => {
    cardIsShowing(!isShowing)
  }

  
  return (
    <>
      <Card>
        <CardHeader onClick={displayCard}
          title={skillGroup.groupName}
          action= {
            <ExpandMore
              expand={isShowing}
              onClick={displayCard}
              aria-expanded={isShowing}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          }
        />
        <Collapse in={isShowing} sx={{display:'flex', backgroundColor:'#fff' }}>
          {skillGroup.skill.map((language, index) => {
            return (
              <Box key={index} sx={{ backgroundColor:'#fff', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:'10px', paddingY:'8px', paddingX:'8px', boxShadow:'0px 0px 20px 5px rgba(0,0,0,0.1), 0px 15px 15px -3px rgba(0,0,0,0.1)'}}>
                <h4>{language.name}</h4>
                {/* <img className='tech-skill-logo' src={language.image} alt={language.description} /> */}
              </Box>
            )
          })}
        </Collapse>
      </Card>
      
    </>
    // <div className='card'>
    //   <div className='card_header' onClick={displayCard} id={props.id}>
    //     <button>
    //       <h5>{props.name}</h5>
    //       <span>{!isShowing ? <IoIosArrowDropup/> : <IoIosArrowDropdown/>}</span>
    //     </button>
    //   </div>
    //   <div className={`collapse ${!isShowing ? 'hide-card':'show-card'}`}>
    //     <div className='card-body'>
    //       {props.datas.map((data, index) => {
    //         return (
    //           <div key={index} className='tech-skill'> 
    //             <img src={data.image} alt={data.description} />
    //             <p>{data.name}</p>
    //           </div>
    //         )
    //       } )}
    //     </div>
    //   </div>
    // </div>
  )
}

export default SkillCard