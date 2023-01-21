import { Typography, Grid, Stack, Card, CardMedia } from "@mui/material";


export const Introduction = () => {
    return (
        <Grid mb={10} container spacing={10} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
            <Grid mt={10} item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={5} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} sm={6} md={5} justifyContent='center' alignItems='center'>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, backgroundPosition: 'top' }}
                                image="https://i.imgur.com/a2usFiI.jpg"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={10} sm={6} md={5}>
                        <Stack spacing={2}>
                            <Typography variant="h2" fontWeight={700} letterSpacing={0} color="primary.primary">Qui Sommes-Nous ?</Typography>
                            <Typography variant="boby1" color="text.primary">
                                Au Sénégal, une des régions les plus poissonneuses du monde, le
                                secteur de la pêche, en progression constante, joue un rôle
                                capital dans l’économie nationale. Avec un taux de captures
                                annuelles de 450 000 tonnes l’an, le Sénégal est le deuxième pays
                                producteur de la sous région, derrière le Nigéria (530 000 t). La
                                pêche est aussi la première branche exportatrice du pays. Le
                                principal produit halieutique exporté est le poisson frais (79 %),
                                suivi par les conserves (5 %), les produits transformés (4 %).
                                <br />
                                <br />
                                C’est dans cette logique que AFRIOCEAN, une entreprise franche
                                d’exportation de produits halieutiques a été créé en 2013. Afin
                                d’entrer dans la politique économique dans laquelle est lancé le
                                SENEGAL.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid >

            <Grid item xs={10} sm={12} md={10} data-aos="fade-up" justifyContent='center' alignItems='center'>
                <Stack justifyContent='center' alignItems='center' spacing={2}>
                    <Typography variant="boby1" color="text.dark">
                        Notre but est de fournir à nos clients des produits de la
                        mer frais et Boxersifiés en fonction de nos marchés. Cela grâce à
                        des techniques de productions de haute qualité, à basse
                        température pour préserver la bonne qualité et une chaîne de froid
                        maitrisée. Nous essayons toujours d’améliorer nos produits pour
                        atteindre plus de segments du marché. Nous leur proposons un
                        produit de qualité avec une très grande valeur ajoutée et à un
                        prix défiant toute concurrence.
                    </Typography>
                    <Typography variant="boby1" color="text.dark" fontStyle='italic'>
                        AFRIOCEAN travaille aussi avec des clients un peu partout
                        dans le monde à savoir : Taiwan, Corée, Chine, Afrique du Sud,
                        Côte d’Ivoire, Guinée, Burkina…
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={10} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={15} alignItems='center' justifyContent='center'>
                    <Grid item xs={11} sm={6} md={5} justifyContent='center' alignItems='center'>
                        <Stack spacing={2}>
                            <Typography variant="h2" letterSpacing={0} fontWeight={700} color="text.primary">Historie</Typography>
                            <Typography variant="boby1" color="text.primary">
                                AFRIOCEAN a été créé en 2013 par M. CHEN CHUNG-HSIN (JOHN CHEN).
                                L’entreprise était située à Yarakh et travaillée en sous traitance
                                avec une autre entreprise de la place. AFRIOCEAN n’avait que ses
                                bureaux commerciaux pour la vente et l’expédition de ses produits
                                un peu partout dans le monde.
                                <br />
                                <br />
                                Dans un souci d’expansion, AFRIOCEAN entame la construction d’une
                                usine de transformations de produits halieutiques dans le pôle
                                urbain en plein essor de DIAMNIADIO en 2017. L’usine a été
                                inaugurée le 10 Février 2018 avec toutes les autorités compétentes
                                qui évoluent dans ce secteur d’activité.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Az2F9Hj.jpg"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid width='100%' mb={10} item xs={11} sm={12} md={10} data-aos="fade-up">
                <Grid container spacing={15} alignItems='center' justifyContent='center'>

                    <Grid item xs={12} sm={6} md={5}>
                        <Card>
                            <CardMedia
                                sx={{ height: 500, width: '100%', backgroundPosition: 'top' }}
                                image="https://i.imgur.com/Skl1LXB.jpg"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={11} sm={6} md={6} justifyContent='center' alignItems='center'>
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
                    </Grid>
                </Grid>
            </Grid>

        </Grid >
    );
};
