import React from 'react';
import GaugeChart from 'react-gauge-chart';
import {Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import InfoIcon from '@material-ui/icons/Info';
export default function Gauge(){
 return(
    <div>
    
    <GaugeChart id="gauge-chart3" 
        nrOfLevels={30} 
        colors={["#FF5F6D", "#FFC371"]} 
        arcWidth={0.3} 
        percent={0.37} 
        textColor={"transparent"}
        
    />
    <Grid container direction="row" style={{background:"green"}} justify="center">
        <Grid item  style={{background:"yellow"}}>
        <Typography variant="h4"> <CountUp start={0} end={143} duration={2.5} separator=","/></Typography>
        
        </Grid>
        <Grid item>
        <Typography variant="h4" style={{background:"red"}}>/</Typography>
        </Grid>
        
        <Grid item  style={{background:"pink"}}>
        <Typography variant="h4"> <CountUp start={0} end={143} duration={2.5} separator=","/></Typography>
        </Grid>

        <Grid item>
            <InfoIcon/>
        </Grid>
            

            
        
    </Grid>
            

    </div>
    

    
 )
}