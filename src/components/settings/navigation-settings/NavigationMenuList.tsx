import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from 'react-router';
import Constants from "../../../utils/Constants";
import { MenuItem } from "../../navigation/Sidebar";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId, GridRowParams } from '@mui/x-data-grid';
import { useSnackbar } from "notistack";
import { useConfirm } from 'material-ui-confirm';

const NavigationMenuList = (props: any) => {
    const history = useHistory();
    const confirm = useConfirm();
    const [menus, setMenus] = useState<MenuItem[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    /*  Fetch meneus from API */
    const fetchMenus = async () => {
        let res = await axios.get(`${Constants.BASE_URL}/webmenus`);
        if (res.status === 200)
            setMenus(res.data.data);
    }

    /* Load menus when component mounts */
    useEffect(() => {
        fetchMenus();
    }, []);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Navigation Settings";
        return () => { document.title = prevTitle };
    }, []);

    const handleDelete = async (id: GridRowId) => {
        try {
            await confirm({ description: 'Menu item will be deleted permanenly', title: 'Delete Menu Item?', confirmationText: 'Delete', confirmationButtonProps: { variant: 'contained', color: 'error' } });
            let resp = await axios.delete(`${Constants.BASE_URL}/webmenus/${id}`);
            if (resp.status === 200) {
                fetchMenus();
                enqueueSnackbar('Menu Item Deleted', { variant: "success" });
            } else {
                enqueueSnackbar('Something went wrong!', { variant: "error" });
            }
        } catch (error) { }
    };

    const { path } = useRouteMatch();

    const dataTableColDefs: GridColumns = [
        { field: '_id', headerName: 'Menu ID', minWidth: 150, hide: true },
        { field: 'title', headerName: 'Title', minWidth: 250 },
        { field: 'path', headerName: 'Path', minWidth: 200 },
        { field: 'iconPreview', headerName: 'Icon', renderCell: (params) => <i style={{ fontSize: '1.5rem' }} className={params.getValue(params.id, 'icon')?.toString()}></i> },
        { field: 'icon', headerName: 'Icon Class', minWidth: 150 },
        { field: 'hasSubmenu', headerName: 'Menu Type', type: 'string', valueFormatter: (params) => params.value ? 'Dropdown' : 'Simple' },
        {
            field: 'actions', headerName: 'Actions', type: 'actions', getActions: (params: GridRowParams) => [
                <GridActionsCellItem icon={<EditIcon color="success" />} label="Edit" onClick={() => history.push(`${path.substr(0, path.lastIndexOf('/'))}/update-menu/${params.id}`)} />,
                <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => handleDelete(params.id)} />
            ]
        }
    ];


    return (
        <Grid item xl={12}>
            <Paper sx={{ p: 3 }} elevation={3} square>
                <Grid container display="flex" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Navigation Menus</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"
                            color="primary"
                            onClick={() => history.push(`${path.substr(0, path.lastIndexOf('/'))}/add-menu`)}
                            startIcon={<AddIcon />}
                        >New Menu</Button>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container>
                    <Grid item minHeight="650px" minWidth="100%">
                        <DataGrid getRowId={row => row._id} columns={dataTableColDefs} rows={menus} />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default NavigationMenuList;