/**
 * 控制器：用户新增
 */
'use strict';

function UserNewCtrl($scope,$controller, UploadSrv) {
    'ngInject';

    let vm = this;
    let uploader;

    function beforeSave() {
        let photo = UploadSrv.createUploader(null,$scope.file[0]) || null;
        vm.model.image = photo;
    }
    
    let ctrlOpts = {
            modelName: 'user',
            beforeSave
        };
    angular.extend(this, $controller('BaseCrudCtrl', { vm: vm, ctrlOpts }));


    // 上传组件
    //uploader = UploadSrv.createUploader();
    //vm.uploader = uploader;
}

module.exports = {
    name: 'UserNewCtrl',
    fn: UserNewCtrl
};
