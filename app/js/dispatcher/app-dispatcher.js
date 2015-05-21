const Dispatcher    = require('flux').Dispatcher,
      StuConstants  = require('./../constants/stu-constants'),
      stuStore      = require('./../stores/stu-store'),
      Dao          ;

let appDispatcher = new Dispatcher();

appDispatcher.register(function (action){
    switch (action.actionType) {
        case StuConstants.CREATE:
            stuStore.create(action.student);

            break;

        case StuConstants.UPDATE:
            stuStore.update(action.student);

            break;

        case StuConstants.DELETE:
            stuStore.deleteStu(action.id);

            break;
        case StuConstants.SEARCH:
            stuStore.handleSearchChanged(action.searchText);

            break;

        default:
    }
});

module.exports = appDispatcher;
