import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
class Form extends React.Component {
    state = {
        currentVal: ''
    }
    //when it initializes, set local state to global
    componentDidMount = () => {
        this.setState({
            currentVal: this.props.feedback.comments
        })
    }
    //when you leave the page, set global state to local
    componentWillUnmount = () => {
        const dispatch = this.props.dispatch;
        dispatch({ type: 'COMMENTS', payload: this.state.currentVal });
    }
    //store your changes to the input field in local state
    handleChange = (event) => {
        this.setState({
            currentVal: event.target.value
        })
    }
    render() {
        return (
            <FormControl noValidate autoComplete="on">
                <form onSubmit={() => { this.props.history.push('/form6') }}>
                    <Card elevation={10}>
                        <CardContent>Any comments you want to leave?</CardContent>
                        <CardContent><TextField className='container' required variant='filled' value={this.state.currentVal} onChange={(event) => this.handleChange(event)} /></CardContent>
                    </Card>
                    <CardContent>
                        <Button type='submit' variant='contained' color='primary'>SUBMIT</Button></CardContent>
                </form>
            </FormControl >
        )
    }
}
//get props from global state
const setPropsToState = (state) => {
    return {
        feedback: state.feedbackreducer
    }
}
export default withRouter(connect(setPropsToState)(Form))