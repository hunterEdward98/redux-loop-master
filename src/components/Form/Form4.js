import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router'
class Form extends React.Component {
    render() {
        return (
            <FormControl noValidate autoComplete="off">
                <form onSubmit={() => {
                    this.props.history.push(`/form5`);
                }}>
                    <Card elevation={10}>
                        <CardContent>How are you feeling?</CardContent>
                        <CardContent><TextField className='container' required variant='filled' label='1-10' type='number' /></CardContent>
                    </Card>
                    <CardContent>
                        <Button type='submit' variant='contained' color='primary'>Next</Button></CardContent>
                </form>
            </FormControl>
        )
    }
}


export default withRouter(Form);