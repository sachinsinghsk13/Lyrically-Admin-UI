import { Breadcrumbs, Card, Divider, Grid, Paper, Typography } from "@mui/material";

export const Dashboard = (props: any) => {
    console.log('dash')
    return (
        <Grid p={2}>
            <Grid py={2} item lg={12}>
                <Breadcrumbs>
                    <Typography color="text.primary">Dashboard</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item py={1} lg={12}>
                <Paper sx={{p: 2}}  elevation={1} square>
                    <Typography variant="h5">Dashboard</Typography>
                    <Divider/>
                    <Grid container>
                        <Grid item lg={4}>
                            <Card sx={{display: 'flex', my: 2, p: 2}}>
                                <Typography>ok</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}