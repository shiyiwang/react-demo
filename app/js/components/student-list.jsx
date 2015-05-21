const React          = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Table          = ReactBootstrap.Table,
      Student        = require('./student.jsx'),
      StuStore        = require('./../stores/stu-store.js');

module.exports = class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchText: ''};
    }
    filterTable(){
        this.setState({searchText: StuStore.getSearchText()});
    }
    componentDidMount() {
        StuStore.addSearchListener(this.filterTable.bind(this));
    }

    componentWillUnmount() {
        StuStore.removeSearchListener(this.filterTable.bind(this));
    }
    render() {
        let students = [];

        this.props.students.forEach((student) => {
            if(student.name.indexOf(this.state.searchText) !== -1){
                students.push(<Student student={student}/>);
            }
        });

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>operation</th>
                </tr>
                </thead>
                <tbody id="tbody">
                {students}
                </tbody>
            </Table>
        )
    }
}
