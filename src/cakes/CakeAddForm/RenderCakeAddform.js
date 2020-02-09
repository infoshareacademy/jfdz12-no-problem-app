import React from 'react';
import { styles } from './CakeAddStyles';
import { Button, CardMedia, withStyles, Paper, Grid, Container, } from '@material-ui/core';
import CakeAddInput from './component/CakeAddInput';
import CakeAddTypesSelect from './component/CakeAddTypesSelect';
import CakeAddSelect from './component/CakeAddSelect';
import { YESNOSELECT } from '../../constans/selectConstans'
import CookLabelFull from '../cakeCard/CookLabelFull';

function RenderCakeAddForm(props) {

    const { types, selectedCook, selectetType, classes } = props;
    const { name,
            price,
            priceForPortion,
            portionDescription,
            typeId,
            description,
            glutenFree,
            imgURL } = props.cakeAdd;

    return (<Container maxWidth="lg" >
            <Grid >

                <Paper className={classes.fCardHeader} >
                    <CakeAddInput
                        onHandleCakeChange={props.onHandleCakeChange}
                        value={name}
                        name="name"
                        label="Nazwa ciasta: "
                        styleProp="header"
                    />
                </Paper>

                <Grid container wrap='wrap'>

                    <Grid item xs={12} sm={6} className={classes.fCardWrapMedia}>
                        {imgURL !== '' &&
                            <CardMedia
                                image={imgURL}
                                className={classes.fCardMedia}
                                style={{ height: '90%' }}
                            />}

                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="outlined-button-file"
                            type="file"
                            onChange={props.handleFileAdd}
                        />
                        <label htmlFor="outlined-button-file" >
                            <Button variant="outlined" component="span" style={{ margin: '10px' }} >
                                dodaj zdjęcie
                            </Button>
                        </label>
                    </Grid>

                    <Grid container item xs={12} sm={6} direction='column' wrap="wrap">
                        <Paper className={classes.fCardPaper}>
                            <CakeAddInput
                                onHandleCakeChange={props.onHandleCakeChange}
                                value={price}
                                name="price"
                                label="Cena zł/kg: "
                            />
                            <CakeAddInput
                                onHandleCakeChange={props.onHandleCakeChange}
                                value={priceForPortion}
                                name="priceForPortion"
                                label="cena za porcję/sztukę: "
                            />
                            <CakeAddInput
                                onHandleCakeChange={props.onHandleCakeChange}
                                value={portionDescription}
                                name="portionDescription"
                                label="porcja: "
                                styleDirect={{ width: "95%" }}
                            />

                        </Paper>
                        <Paper className={classes.fCardPaper}>
                            <CakeAddTypesSelect
                                onHandleCakeChange={props.onHandleCakeChange}
                                types={types}
                                value={typeId}
                                name="typeId"
                                label="Typ ciasta: "
                            />
                            <CakeAddInput
                                value={selectetType.description || ""}
                                label="Opis: "
                                rows="2"
                                multiline={true}
                                disabled={true}
                                styleDirect={{ width: "95%" }}
                            />
                            <CakeAddSelect
                                onHandleCakeChange={props.onHandleCakeChange}
                                value={glutenFree}
                                name="glutenFree"
                                label="bezglutenowe"
                                options={YESNOSELECT}
                            />

                        </Paper>
                        <Paper className={classes.fCardPaper}>
                            <CakeAddInput
                                onHandleCakeChange={props.onHandleCakeChange}
                                value={description}
                                name="description"
                                label="opis ciasta:"
                                rows="4"
                                multiline={true}
                                styleDirect={{ width: "95%" }}
                            />
                        </Paper>

                    </Grid>

                </Grid>

                <Paper className={classes.fCardPaper}>
                    <Grid>
                        <CookLabelFull
                            cook={selectedCook}
                        />
                    </Grid>
                </Paper>

                <Button
                    variant="outlined"
                    color="secondary"
                    style={{ margin: '20px auto' }}
                    onClick={props.history.goBack}
                >
                    powrót
                        </Button>
                <Button onClick={props.addCakeFetch}
                    variant="outlined"
                    color="primary"
                    style={{ margin: '20px' }}
                >
                    zapisz
                        </Button>

            </Grid >
        </Container>
    )
}

export default withStyles(styles)(RenderCakeAddForm);