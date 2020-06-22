import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router';
import swal from 'sweetalert'
import { connect } from 'react-redux';
import axios from 'axios';
import { TableContainer, TableCell, Table, TableBody, TableRow } from '@material-ui/core';
class Form extends React.Component {
    render() {
        console.log(this.props.feedback);
        return (
            <FormControl noValidate autoComplete="off">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    //tell the user their forms are going to be submitted. if they hit yes, submit and reser to '/'
                    //otherwise cancel the submission
                    swal({
                        dangerMode: true,
                        buttons: true,
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, delete it!',
                    }).then((result) => {
                        if (result) {
                            axios.post('/feedback', this.props.feedback)
                            this.props.history.push('/')
                            swal('Submitted',
                                'Your feedback was submitted',
                                'success')
                        }
                        else {
                            swal(
                                'Your feedback was NOT submitted'
                            )
                        }
                    })
                }}>
                    <Card elevation={10}>
                        <CardContent><h3>READY TO SUBMIT.</h3><hr /></CardContent>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>How Are You Feeling:</TableCell>
                                        <TableCell>{this.props.feedback.feeling}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>How well are you understanding the content:</TableCell>
                                        <TableCell>{this.props.feedback.understanding}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>How well are you being Supported:</TableCell>
                                        <TableCell>{this.props.feedback.support}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Any Comments To Add:</TableCell>
                                        <TableCell>{this.props.feedback.comments}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <CardContent>
                            <Button type='submit' variant='contained' color='secondary'>SUBMIT</Button></CardContent></Card>
                </form>
            </FormControl>
        )
    }
}
const setPropsToState = (state) => {
    return {
        feedback: state.feedbackreducer
    }
}

export default withRouter(connect(setPropsToState)(Form));