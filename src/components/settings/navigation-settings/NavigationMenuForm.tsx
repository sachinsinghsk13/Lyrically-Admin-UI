import { useHistory, useParams, useRouteMatch } from 'react-router';
import { useEffect, useState } from "react";
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, Formik } from "formik";
import * as Yup from 'yup';
import { MenuItem as MenuItemInf } from "../../navigation/Sidebar";
import axios from "axios";
import Constants from "../../../utils/Constants";
import { Divider, FormControlLabel, Grid, IconButton, MenuItem, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveIcon from '@mui/icons-material/Remove';
import { FormState } from '../../utils/util-interfaces';
import { useSnackbar } from 'notistack';
const schema = Yup.object().shape({
    title: Yup.string().required('Menu title is required'),
    path: Yup.string().optional(),
    icon: Yup.string().optional(),
    order: Yup.number().required('Must specify order for this menu item').positive('order must be positive'),
    hasSubmenu: Yup.boolean().default(false).required('hasSubmenu is required'),
    submenu: Yup.array().optional().of(Yup.object().shape({
        title: Yup.string().required('Menu title is required'),
        path: Yup.string().required('Path is requied for submenus'),
        icon: Yup.string().optional(),
        order: Yup.number().optional()
    }))
});
const initialValues: MenuItemInf = {
    title: '',
    icon: '',
    hasSubmenu: false,
    order: 1,
    path: '',
    submenu: []
};

const NavigationMenuForm = (props: any) => {
    const { path } = useRouteMatch();
    const [formState, setFormState] = useState<FormState<MenuItemInf>>({ type: 'create', value: initialValues });
    const history = useHistory();
    const params: any = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const loadData = async (id: string) => {
        let resp = await axios.get(`${Constants.BASE_URL}/webmenus/${params.id}`);
        if (resp.status === 200) {
            setFormState({ type: 'update', value: resp.data });
        }
    }

    useEffect(() => {
        if (params.id) {
            loadData(params.id);
        }
    }, []);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Add New Menu";
        return () => { document.title = prevTitle };
    }, []);

    const handleSubmit = async (values: any) => {
        try {
            let resp;
            if (formState.type === 'create') {
                resp = await axios.post(`${Constants.BASE_URL}/webmenus`, values);
                enqueueSnackbar('Menu Added', {variant: 'success'});
                history.push('.');
            } else {
                resp = await axios.put(`${Constants.BASE_URL}/webmenus/${params.id}`, values)
                enqueueSnackbar('Menu Updated', {variant: 'success'});
                history.push('..');
            }
        } catch (error) {
            enqueueSnackbar('Something Went Wrong!', {variant: 'error'});
        }
    };

    return (
        <Grid item xl={12}>
            <Paper sx={{ p: 3 }} elevation={3} square>
                <Grid container display="flex" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Menu Item</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"
                            color="primary"
                            onClick={() => history.push(`${path.substr(0, path.lastIndexOf('/'))}/menus-list`)}
                            startIcon={<ListIcon />}
                        >Menu List</Button>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Formik onSubmit={handleSubmit} initialValues={formState.value} enableReinitialize validationSchema={schema}>
                    {({ values }) => (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xl={3} lg={4} md={6}>
                                    <Field name="title" type="text">{(props: FieldProps) => (
                                        <TextField label="Menu Title" {...props.field}
                                            margin="dense"
                                            fullWidth
                                        />
                                    )}</Field>
                                </Grid>
                                <Grid item xl={3} lg={4} md={6}>
                                    <Field name="path" type="text">{(props: FieldProps) => (
                                        <TextField label="Routing Path" {...props.field}
                                            margin="dense"
                                            fullWidth
                                        />
                                    )}</Field>
                                </Grid>
                                <Grid item xl={3} lg={4} md={6}>
                                    <Field name="icon" type="text">{(props: FieldProps) => (
                                        <TextField label="Display Icon" {...props.field}
                                            margin="dense"
                                            fullWidth
                                        />
                                    )}</Field>
                                </Grid>
                                <Grid item xl={3} lg={4} md={6}>
                                    <Field name="order" type="text">{(props: FieldProps) => (
                                        <TextField label="Order" {...props.field}
                                            select
                                            margin="dense"
                                            fullWidth
                                        >
                                            {Array.from(new Array(20).keys()).map(i => <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>)}
                                        </TextField>
                                    )}</Field>
                                </Grid>
                                <Grid item xl={12}>
                                    <Field name="hasSubmenu">{(props: FieldProps) => (
                                        <FormControlLabel label="Add Children Menus" control={<Switch {...props.field} />} />
                                    )}</Field>
                                </Grid>
                                {values.hasSubmenu && <Grid item xl={12}>
                                    <FieldArray name="submenu">{(arrayHelpers: FieldArrayRenderProps) => (
                                        values.submenu.length > 0 ? (
                                            values.submenu.map((menu, index) => (
                                                <Grid container spacing={2} key={index}>
                                                    <Grid item xl={3}>
                                                        <Field name={`submenu[${index}].title`}>{(fp: FieldProps) => (
                                                            <TextField {...fp.field} label="Submenu Title" size="small" margin="dense" fullWidth />
                                                        )}</Field>
                                                    </Grid>
                                                    <Grid item xl={3}>
                                                        <Field name={`submenu[${index}].path`}>{(fp: FieldProps) => (
                                                            <TextField {...fp.field} label="Submenu Routing Path" size="small" margin="dense" fullWidth />
                                                        )}</Field>
                                                    </Grid>
                                                    <Grid item xl={3}>
                                                        <Field name={`submenu[${index}].icon`}>{(fp: FieldProps) => (
                                                            <TextField {...fp.field} label="Submenu Icon" size="small" margin="dense" fullWidth />
                                                        )}</Field>
                                                    </Grid>
                                                    <Grid item xl={3}>
                                                        <Stack direction="row">
                                                            <IconButton color="success" onClick={() => arrayHelpers.insert(index + 1, { title: '', path: '', icon: '' })}>
                                                                <ControlPointIcon />
                                                            </IconButton>
                                                            <IconButton color="error" onClick={() => arrayHelpers.remove(index)}>
                                                                <RemoveIcon />
                                                            </IconButton>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        ) : (
                                            <Grid container justifyContent="center">
                                                <Button variant="contained" color="success" size="small" onClick={() => arrayHelpers.push({ title: '', path: '', icon: '' })} disableElevation>Add Submenu</Button>
                                            </Grid>
                                        )
                                    )}</FieldArray>
                                </Grid>}
                                <Grid item xl={12}>
                                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default NavigationMenuForm;