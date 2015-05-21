const React              = require('react'),
      ReactBootstrap     = require('react-bootstrap'),
      ButtonToolbar      = ReactBootstrap.ButtonToolbar,
      Button             = ReactBootstrap.Button,
      ModalTrigger       = ReactBootstrap.ModalTrigger,

      StuActions         = require('../actions/stu-action.js'),
      StudentUpdateModal = require('./student-update-modal.jsx');

module.exports = class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        StuActions.deleteStu(this.props.student.id);
    }
    render() {
        let student = this.props.student;
        let operations =
            <ButtonToolbar>
                <ModalTrigger modal={<StudentUpdateModal student={student}/>}>
                    <Button bsStyle='primary' bsSize='small'><i className="fa fa-plus"></i>Update</Button>
                </ModalTrigger>
                <Button bsStyle='danger' bsSize='small' onClick={this.handleClick.bind(this)}>Delete</Button>
            </ButtonToolbar>;
        return (
            <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{operations}</td>
            </tr>
        )
    }
}
