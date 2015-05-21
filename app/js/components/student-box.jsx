const React          = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Immutable      = require('immutable'),

      PageHeader      = ReactBootstrap.PageHeader,
      Row             = ReactBootstrap.Row,
      Col             = ReactBootstrap.Col,
      Input           = ReactBootstrap.Input,
      ModalTrigger    = ReactBootstrap.ModalTrigger,
      Button          = ReactBootstrap.Button,
      Glyphicon       = ReactBootstrap.Glyphicon,

      StudentAddModal = require('./student-add-modal.jsx'),
      StudentList     = require('./student-list.jsx'),
      StuStore        = require('./../stores/stu-store'),
      StuActions      = require('./../actions/stu-action');


const getStuState = () => ({students: StuStore.getAll()});

module.exports = class StudentApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStuState();
    }

    componentDidMount() {
        StuStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        StuStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState(getStuState());
    }

    handleChange(){
        StuActions.handleSearchChanged(this.refs.search.getValue());
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <PageHeader>React-Demo</PageHeader>
                </Row>
                <Row>
                    <Col xs={2}>
                        <ModalTrigger modal={<StudentAddModal/>}>
                            <Button className="pull-left" bsStyle='success'><i className="fa fa-plus"></i>Add Student</Button>
                        </ModalTrigger>
                    </Col>
                    <Col xs={2} xsOffset={8}>
                        <Input type='text' className="pull-right" ref="search" addonBefore={<Glyphicon glyph='search' />} onChange={this.handleChange.bind(this)}/>
                    </Col>
                </Row>
                <Row>
                    <StudentList students={this.state.students}/>
                </Row>
            </div>
        )
    }
}
