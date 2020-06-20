import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router'
class Form extends React.Component {
    render() {
        return (
            <FormControl noValidate autoComplete="off">
                <form onSubmit={() => {
                    this.props.history.push(`/form2`);
                }}>
                    <Card elevation={10} >
                        <CardContent ><h3>Have you filled out your feedback today?</h3><hr></hr></CardContent>
                        <CardContent>
                            <Button type='submit' variant='contained' color='primary'>Start Feedback</Button></CardContent>
                    </Card>
                </form>
            </FormControl >
        )
    }
}


export default withRouter(Form);