/**
 * 控制器：用户新增
 */
'use strict';

function UserNewCtrl($scope,$controller, UploadSrv) {
    'ngInject';

    let vm = this;
    var opt= {};
    function beforeSave() {
        let photo = UploadSrv.upload(opt,$scope.file[0]) || null;
        vm.model.image = UploadSrv.getUrl($scope.file[0].name);
    }
    let ctrlOpts = {
            modelName: 'user',
            beforeSave
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));
}

module.exports = {
    name: 'UserNewCtrl',
    fn: UserNewCtrl
};
