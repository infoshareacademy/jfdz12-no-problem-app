export const styles={
    root: {
        '& .MuiPaper-root': {
            width: '170px',
            maxHeight: '450px',
        },
        
        '& .MuiListItem-root': {
            margin: '0px',
            padding: '5px 15px',
        },

        '& .MuiListItemIcon-root': {
            minWidth: '2px',
            marginRight: '10px',
        },

        '& .MuiCheckbox-root':{
            padding: '2px',
        }
    },

    PaperStyle:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '600px',
        borderColor: '#e0e0e0', //e0e0e0 bdbdbd
        border: "0.5px solid",
    },
    grid:{
        margin: '10px 0px',
    },
    input: {
        width: '100%',
        marginLeft: '5px',
        padding: '2px 0px',
        flex: '1',

    },
    iconButton: {
        padding: 8,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    gridSearch:{
        flexGrow:'1', 
        textAlign:'left',
    }
}
