'use strict';
/* jshint ignore:start */
let _ = require('lodash');

var OSS = require('ali-oss');
//var co = require('co');

/**
 * 上传服务
 * 基于7牛实现
 * @param {[Object]} $rootScope
 * @param {[Object]} AppConfigs [APP的配置项]
 */
function UploadSrv($rootScope, $http, ApiSrv) {
	'ngInject';
	var urllib = OSS.urllib;
	var para;
	$http({
		method: 'GET',
		url: 'http://localhost:8080/admin.server-master/api/upload/para',
		params: {}
	}).success(function(result) {
		para = result;
	});

	function getUrl(fileName) {
		return para.baseUrl + "/" + para.filedir + '/' + fileName;
	}

	function upload(opt, fi) {
		if(!fi) {
			return null;
		}

		var client = new OSS.Wrapper({
			region: para.region,
			accessKeyId: para.accessKeyId,
			accessKeySecret: para.accessKeySecret,
			bucket: para.bucketName,
		});
		var storeAs = para.filedir + '/' + fi.name; //命名空间

		client.multipartUpload(storeAs, fi).then(function(result) {
			return result.url;
		}).catch(function(err) {
			return err;
		});

	}
	return {
		upload,
		getUrl
	};

}

module.exports = {
	name: 'UploadSrv',
	fn: UploadSrv
};
/* jshint ignore:end */