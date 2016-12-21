'use strict';
/* jshint ignore:start */
let _ = require('lodash');

var OSS = require('ali-oss');
var co = require('co');

/**
 * 上传服务
 * 基于7牛实现
 * @param {[Object]} $rootScope
 * @param {[Object]} AppConfigs [APP的配置项]
 */
function UploadSrv($rootScope, $http, ApiSrv) {
	'ngInject';

	/**
	 * 创建上传组件
	 * @param  {Object} opts [参考plupload的上传opts]
	 * @return {uploader}      [参考七牛的uploader]
	 */
	function createUploader(opts,fi) {
        $http({
			method: 'POST',
			url: 'http://localhost:8080/admin.server-master/api/upload/para',
			params: {}
		}).then(function(result) {
			upload(fi,result.data) 
		});
	}

	function upload(fi,data) {
//          var client = new OSS.Wrapper({
//	    			region : data.region,
//	    			accessKeyId : data.accessKeyId,
//	    			accessKeySecret : data.accessKeySecret,
//	    			bucket : data.bucketName
//	    		});
		var client = new OSS({
		      region: 'oss-cn-shanghai',
		      accessKeyId: 'LTAIoQvX3l5qUYZe',
		      accessKeySecret:	'MON0M3d8ppjGtVkcX5IpYobjSe8pSd',
		    
		      bucket: 'liuy010202'
		    });
	    	var storeAs = 'upload/'+fi.name;  //命名空间
			var progress = function (p) {
			  return function (done) {
			    var bar = document.getElementById('progress-bar');
			    bar.style.width = Math.floor(p * 100) + '%';
			    bar.innerHTML = Math.floor(p * 100) + '%';
			    done();
			  }
			};
			client.multipartUpload(storeAs, fi).success(function (result) {
				return result.url; 
	    	}).catch(function (err) {
	    		return err;
	    	});   
        }
	return {
		createUploader
	};
	
	
	
}

module.exports = {
	name: 'UploadSrv',
	fn: UploadSrv
};
/* jshint ignore:end */