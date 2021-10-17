import { Breadcrumbs, Divider, Grid, Paper, Skeleton, Typography } from "@mui/material";

export const Dashboard = (props: any) => {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
                        <Skeleton variant="text"></Skeleton>
                </Paper>
            </Grid>
        </Grid>
    );
}