const EventEmitter = require('events').EventEmitter,
      assign       = require('object-assign'),
      Immutable    = require('immutable'),
      _            = require('lodash'),

      AppDispatcher = require('./../dispatcher/app-dispatcher.js'),
      uuidGenerator = require('./../utils/uuid-generator.js'),
      CHANGE_EVENT = 'change',
      SEARCH_EVENT = 'search';

class StuStore extends EventEmitter {
    constructor() {
        super();

        this.students = Immutable.Map({'110':{id: '110', name: 'tom', age: 20}});
        this.searchText = '';
    }
    create(student) {
        let id = uuidGenerator.uuid();
        this.students = this.students.set(id, {id: id, name: student.name, age: student.age});
        this.emit(CHANGE_EVENT);
    }
    update(student) {
        this.students = this.students.set(student.id, _.extend(this.students.get(student.id), student));
        this.emit(CHANGE_EVENT);
    }
    deleteStu(id) {
        this.students = this.students.delete(id);
        this.emit(CHANGE_EVENT);
    }
    getAll() {
        return this.students;
    }
    handleSearchChanged(searchText) {
        this.searchText = searchText;
        this.emit(SEARCH_EVENT);
    }
    getSearchText() {
        return this.searchText;
    }
    addSearchListener(callback) {
        this.on(SEARCH_EVENT, callback);
    }
    removeSearchListener(callback) {
        this.removeListener(SEARCH_EVENT, callback);
    }
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

module.exports = new StuStore();
