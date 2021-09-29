import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from 'react-router';
import Constants from "../../../utils/Constants";
import { MenuItem } from "../../navigation/Sidebar";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import RouterLink from "../../library-wrappers/Link";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowParams } from '@mui/x-data-grid';
const NavigationMenuList = (props: any) => {
    const history = useHistory();
    const [menus, setMenus] = useState<MenuItem[]>([]);
    console.log(menus);
    useEffect(() => {
        const fetchMenus = async () => {
            let res = await axios.get(`${Constants.BASE_URL}/admin/webmenus`);
            if (res.status === 200)
                setMenus(res.data);
        }
        fetchMenus();
    }, []);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Navigation Settings";
        return () => { document.title = prevTitle };
    }, []);

    const { path } = useRouteMatch();

    const dataTableColDefs: GridColumns = [
        {field: '_id', headerName: 'Menu ID', minWidth: 150, hide: true},
        {field: 'title', headerName: 'Title', minWidth: 250},
        {field: 'path', headerName: 'Path', minWidth: 200},
        {field: 'iconPreview', headerName: 'Icon', renderCell: (params) => <i style={{fontSize: '1.5rem'}} className={params.getValue(params.id, 'icon')?.toString()}></i> },
        {field: 'icon', headerName: 'Icon Class', minWidth: 150},
        {field: 'hasSubmenu', headerName: 'Menu Type', type: 'string', valueFormatter: (params) => params.value ? 'Dropdown': 'Simple'},
        {field: 'actions', headerName: 'Actions', type: 'actions', getActions: (params: GridRowParams) => [
            <GridActionsCellItem icon={<EditIcon color="success" />} label="Edit" onClick={() => console.log("delte")}/>,
            <GridActionsCellItem icon={<DeleteIcon color="error" />} label="Delete" onClick={() => console.log("delte")}/>
        ]}
    ];


    return (
        <Grid item xl={12}>
            <Paper sx={{ p: 3}} elevation={3} square>
                <Grid container display="flex" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Navigation Menus</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"  
                        color="primary" 
                        onClick={() => history.push(`${path.substr(0, path.lastIndexOf('/'))}/add-menu`)}
                        startIcon={<AddIcon/>}
                        >New Menu</Button>
                    </Grid>
                </Grid>
                <Divider sx={{my:1}}/>
                <Grid container>
                    <Grid item minHeight="650px" minWidth="100%">
                        <DataGrid  getRowId={row => row._id} columns={dataTableColDefs} rows={menus}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default NavigationMenuList;