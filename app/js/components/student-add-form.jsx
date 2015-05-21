const React          = require('react'),
      ReactBootstrap = require('react-bootstrap'),

      Grid         = ReactBootstrap.Grid,
      Row          = ReactBootstrap.Row,
      Col          = ReactBootstrap.Col,
      Input        = ReactBootstrap.Input,

      StuActions   = require('./../actions/stu-action');

module.exports = class StudentAddForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleFormSubmit() {

        console.log('into form submit with this = ', this);

        let student = {
            name: this.refs.name.getValue(),
            age: this.refs.age.getValue(),
        };
        if (!student.name || !student.age) {
            return;
        }
        StuActions.create(student);
    }
    render(){
        return (
            <Grid fluid="true">
                <Row className='show-grid'>
                    <Col>
                        <Input
                            type='text'
                            placeholder='Student Name'
                            label='Name:'
                            hasFeedback
                            ref='name'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'/>
                    </Col>
                </Row>
                <Row className='show-grid'>
                   <Col>
                        <Input
                            type='text'
                            placeholder='Student Age'
                            label='Age:'
                            hasFeedback
                            ref='age'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
