import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
class Form2 extends React.Component {
    state = {
        currentVal: ''
    }
    componentDidMount = () => {
        this.setState({
            currentVal: this.props.feedback.feeling
        })
    }
    componentWillUnmount = () => {
        const dispatch = this.props.dispatch;
        dispatch({ type: 'HOW_FEELING', payload: this.state.currentVal });
    }
    handleChange = (event) => {
        this.setState({
            currentVal: event.target.value
        })
    }
    render() {
        return (
            <FormControl noValidate autoComplete="off">
                <form onSubmit={() => this.props.history.push(`/form3`)}>
                    <Card elevation={10}>
                        <CardContent>How are you feeling?</CardContent>
                        <CardContent><TextField className='container' required variant='filled' label='1-10' type='number' onChange={(event) => this.handleChange(event)} value={this.state.currentVal} /></CardContent>
                    </Card>
                    <CardContent>
                        <Button type='submit' variant='contained' color='primary'>Next</Button></CardContent>
                </form>
            </FormControl >
        )
    }
}
const setPropsToState = (state) => {
    return {
        feedback: state.feedbackreducer
    }
}
export default withRouter(connect(setPropsToState)(Form2));