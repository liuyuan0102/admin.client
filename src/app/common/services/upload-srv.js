'use strict';
/* jshint ignore:start */
let _ = require('lodash');

/**
 * 上传服务
 * 基于7牛实现
 * @param {[Object]} $rootScope
 * @param {[Object]} AppConfigs [APP的配置项]
 */
function UploadSrv($rootScope, AppConfigs, MessageSrv) {
    'ngInject';


    /**
     * 创建上传组件
     * @param  {Object} opts [参考plupload的上传opts]
     * @return {uploader}      [参考七牛的uploader]
     */
    function createUploader(opts) {

     
        return uploader;

    }

    function createImageUploader(opts) {
        
        return createUploader(opts);
    }

    return {
        createUploader,
        createImageUploader
    };
}


module.exports = {
    name: 'UploadSrv',
    fn: UploadSrv
};
/* jshint ignore:end */
