import { Typography, Grid, Stack, Card, CardMedia, Box, CardContent } from "@mui/material";


export const Equipment = () => {

    return (
        <Stack bgcolor='#E5E5E5' spacing={5} py={10} alignItems='center'>
            <Stack width='80%' data-aos="fade-up" spacing={2} justifyContent='center' alignItems='center'>
                <Typography variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">Équipements</Typography>
                <Typography variant="boby1" color="text.dark">
                    Pour la bonne exécution du process de production, AFRIOCEAN a investi
                    dans des équipements ultra modernes pour la qualité de son service.
                    Une zone 3 a également été développé pour la ligne de production des
                    produits élaborés et la ligne de production des gastéropodes /
                    céphalopodes. Pour les produits élaborés il s’agit des poissons en
                    filet et pour les des gastéropodes / céphalopodes il s’agit de la
                    cuisson des coquillages.
                </Typography>
            </Stack>

            <Grid container spacing={10} justifyContent='center' alignItems="stretch" >
                <Grid item display="flex" xs={10} sm={8} md={3} data-aos="fade-up" >
                    <Card display="flex" >
                        <CardMedia
                            sx={{ minHeight: 400, backgroundPosition: 'top' }}
                            image="https://i.imgur.com/S0e3u4Z.jpg"
                        />
                        <CardContent>
                            <Stack spacing={2} alignItems='center'>
                                <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="primary.primary">
                                    Locaux Productions
                                </Typography>
                                <Typography variant="boby1" color="text.dark">
                                    <ul>
                                        <li> 2 Salles de production pour poisson afrique.</li>
                                        <li>1 salle de fabrique de glace</li>
                                        <li>
                                            1 salle de production pour produit élaboré
                                            <br /> (Conforme aux régles HSQE de l’UE)
                                            <br /> (Chariots tous en inox.)
                                        </li>
                                        <li>
                                            1 salles de production pour la cuisson
                                            <br /> (Equipement de cuisson en vapeur)
                                        </li>
                                    </ul>
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item display="flex" xs={10} sm={8} md={3} data-aos="fade-up" >
                    <Card display="flex">
                        <CardMedia
                            sx={{ minHeight: 400, backgroundPosition: 'top' }}
                            image="https://i.imgur.com/ZibFR4x.jpg"
                        />
                        <CardContent>
                            <Stack spacing={2} alignItems='center'>
                                <Typography fontSize='22px' variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">
                                    Équipements Frigorifiques
                                </Typography>
                                <Typography variant="boby1" color="text.dark">
                                    <ul>
                                        <li> 2 tunnels de congélation de 8t.</li>
                                        <li>2 tunnels de congélation de 4t.</li>
                                        <li>
                                            2 chambres froides avec la capacité de stockage en total de
                                            1000T. <br />
                                            (Pallet emballé avec film.)
                                            <br /> (-20℃ maintenu, maximum -50℃.)
                                        </li>
                                        <li>
                                            1 chambre de SAS pour protéger les produits. BITZER
                                            compresseurs adaptés.
                                        </li>
                                    </ul>
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item display="flex" xs={10} sm={8} md={3} data-aos="fade-up">
                    <Card display="flex">
                        <CardMedia
                            sx={{ minHeight: 400, backgroundPosition: 'top' }}
                            image="https://i.imgur.com/Skl1LXB.jpg"
                        />
                        <CardContent>
                            <Stack spacing={2} alignItems='center'>
                                <Typography variant="h2" fontSize='22px' fontWeight={700} letterSpacing={0} color="primary.primary">
                                    Avantages Compétitifs
                                </Typography>
                                <Typography variant="boby1" color="text.dark">
                                    <ul>
                                        <li>Vitesse de la congélation (Arêtes des cristaux)</li>
                                        <li>Température</li>
                                        <li>constante Emballage avec haute qualité </li>
                                        <li>Bonne pratique du QHSE</li>
                                    </ul>
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Stack>
    );
};
