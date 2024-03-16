import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Link} from 'react-router-dom'


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div
      style={{
        maxWidth: '97%',
        alignItems: 'center',
        paddingLeft: '41px',
        paddingTop: '30px',
      }}
    >
      <Typography variant="h5" color="#0550C9" sx={{ paddingBottom: '10px' }}>
        <b>Queries asked by other users</b>
      </Typography>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            How safe is Abortion?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Both in-clinic and medication abortions are very safe.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Both in-clinic and medication abortions are very safe. In fact,
            abortion is one of the safest medical procedures out there. Overall,
            about 1 in 4 women in the U.S. will have an abortion by the time
            they’re...{' '}
            <a href=" https://www.plannedparenthood.org/learn/abortion/considering-abortion/what-facts-about-abortion-do-i-need-know#:~:text=clinic%20abortion%20options.-,Is%20abortion%20safe%3F,-Both%20in%2Dclinic">
              {' '}
              Know More.{' '}
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            How is Air Pollution affecting us?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Both short- and long-term exposure to air pollution can lead to a
            wide range of diseases.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Both short- and long-term exposure to air pollution can lead to a
            wide range of diseases, including stroke, chronic obstructive
            pulmonary disease, trachea, bronchus and lung cancers, aggravated...
            <a href="https://www.eea.europa.eu/themes/air/health-impacts-of-air-pollution#:~:text=Both%20short%2D%20and%20long%2Dterm,asthma%20and%20lower%20respiratory%20infections">
              Know More
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Effects of Alcohol
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Drinking too much – on a single occasion or over time – can take a
            serious toll on your health.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Drinking too much – on a single occasion or over time – can take a
            serious toll on your health. Here’s how alcohol can affect your...
            <a href=" https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body">
              Know More
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Why you should breastfeed your baby?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Breast milk helps your baby fight off sickness and disease.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Today most babies are breastfed. And as more Canadians understand
            how important breastfeeding is for the health of mothers and babies,
            more people are supporting mothers to breastfeed for longer, up to 2
            years and more. Here are 10 great reasons to breastfeed your..
            <a href="https://www.canada.ca/en/public-health/services/health-promotion/childhood-adolescence/stages-childhood/infancy-birth-two-years/breastfeeding-infant-nutrition/10-great-reasons-breastfeed-your-baby.html">
              Know More
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
