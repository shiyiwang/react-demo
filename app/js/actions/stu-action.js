const AppDispatcher = require('../dispatcher/app-dispatcher.js'),
      StuConstants  = require('../constants/stu-constants.js');

class StuActions {
    create(student) {
        AppDispatcher.dispatch({
            actionType: StuConstants.CREATE,
            student: student
        });
    }
    updateStu(student) {
        AppDispatcher.dispatch({
            actionType: StuConstants.UPDATE,
            student: student
        });
    }
    deleteStu(id) {
        AppDispatcher.dispatch({
            actionType: StuConstants.DELETE,
            id: id
        });
    }
    handleSearchChanged(searchText) {
        AppDispatcher.dispatch({
            actionType: StuConstants.SEARCH,
            searchText: searchText
        });
    }
}

module.exports = new StuActions();
