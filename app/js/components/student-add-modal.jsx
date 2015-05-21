const React          = require('react'),
      ReactBootstrap = require('react-bootstrap'),

      Button = ReactBootstrap.Button,
      Modal  = ReactBootstrap.Modal,

      StudentAddForm = require('./student-add-form.jsx');

module.exports = class StudentAddModal extends React.Component {
    constructor(props) {
        super(props);
    }
    handleFormSubmit() {
        // 调用表单的提交方法提交数据
        this.refs.studentAddForm.handleFormSubmit();

        this.props.onRequestHide();
    }
    render() {
        return (
            <Modal
                bsStyle = 'primary'
                title = 'Add Student'
                onRequestHide={this.props.onRequestHide}>
                <div className = 'modal-body'>
                    <StudentAddForm ref="studentAddForm" />
                </div>
                <div className = 'modal-footer'>
                    <Button onClick={this.props.onRequestHide}><i className="fa fa-times"></i>Close</Button>
                    <Button bsStyle='primary' onClick={this.handleFormSubmit.bind(this)} ><i className="fa fa-check"></i>Create</Button>
                </div>
            </Modal>
        );
    }
}
