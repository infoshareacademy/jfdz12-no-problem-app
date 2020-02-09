import React from 'react';
import { InputLabel, FormControl, MenuItem, Select, Typography,} from '@material-ui/core';



export function UserSelect (props) {
    
const {options, name, value, label, align, width, labelWidth, noEdit, } = props;
    
    return( 
      
        <FormControl 
            //variant="outlined" 
            style={{margin: '0px 0px 0px 10px', 
                    maxWidth: width, 
                    width:'100%', 
                    minWidth:'200px', 
                    color: "balck",
                    height: "54px",
                    display:"flex",
                    justifyContent:"center",
                }}
            disabled={noEdit}        
        >
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId = "select-label"
                name = {name}
                value = {value}
                onChange = {props.onHandleChange}
                labelWidth = {labelWidth}
                style={{textAlign:align, marginTop:'0px'}}   
                //variant="outlined"
            >
                    {/* <MenuItem>
                        <em>Brak</em>
                    </MenuItem> */}
                    {options.map(option => (
                        <MenuItem key={option.id} 
                                    value={option.value}
                        >
                            <Typography variant="inherit" >
                                {option.name}
                            </Typography>
                        </MenuItem>
                        ))    
                    }
            </Select>
        </FormControl>
    )
}
