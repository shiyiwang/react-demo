const React          = require('react'),
      ReactBootstrap = require('react-bootstrap'),

      Grid           = ReactBootstrap.Grid,
      Row            = ReactBootstrap.Row,
      Col            = ReactBootstrap.Col,
      Input          = ReactBootstrap.Input,

      StuActions     = require('./../actions/stu-action');

module.exports = class StudentUpdateForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleFormSubmit() {
        let student = {
            id: this.props.student.id,
            name: this.refs.name.getValue(),
            age: this.refs.age.getValue(),
        };
        console.log(student);
        StuActions.updateStu(student);
    }
    render(){
        return (
            <Grid fluid="true">
                <Row className='show-grid'>
                    <Col>
                        <Input
                            type='text'
                            label='Name:'
                            hasFeedback
                            ref='name'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'
                            defaultValue={this.props.student.name} />
                    </Col>
                </Row>
                <Row className='show-grid'>
                   <Col>
                        <Input
                            type='text'
                            label='Age:'
                            hasFeedback
                            ref='age'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'
                            defaultValue={this.props.student.age} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
