const Immutable    = require('immutable'),
      uuidGenerator = require('./../utils/uuid-generator.js'),
      StuStore        = require('./../stores/stu-store');



class Dao {

    constructor() {
        this.students = Immutable.Map({'110':{id: '110', name: 'tom', age: 20}});
    }

    create(student) {
        let id = uuidGenerator.uuid();
        this.students = this.students.set(id, {id: id, name: student.name, age: student.age});
        StuStore.emit(CHANGE_EVENT);
    }
    update(student) {
        this.students = this.students.set(student.id, _.extend(this.students.get(student.id), student));
        StuStore.emit(CHANGE_EVENT);
    }
    deleteStu(id) {
        this.students = this.students.delete(id);
        StuStore.emit(CHANGE_EVENT);
    }
}
