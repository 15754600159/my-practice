/* global app:false*/
app.api = {

	url: 'http://localhost:9999',
	// url: 'http://192.168.2.105:9999', //岁
	// url: 'http://192.168.1.103:9999', //祥

	ajax: function(options, callback) {
		var settings = {
			url: options.fullUrl || (app.api.url + options.url),
			type: options.type,
			method: options.type,
			cache: callback.cache,
			contentType: 'application/json',
			dataType: 'json',
			xhrFields: {
				withCredentials: true
			},
			// 90秒超时
			timeout: 90000,
			processData: false,
			success: callback.success,
			error: function(XHR) {
				app.loading.hide();
				if (XHR.status === 401) {
					app.login.open();
					return false;
				} else if (XHR.status === 403) {
					app.alert('权限错误', '错误');
					return false;
				}
			},
			complete: function(XHR) {
				if (!XHR) {
					// abort
					app.loading.hide();
				}
			}
		};

		if (callback.error) {
			settings.error = callback.error;
		}
		if (callback.complete) {
			settings.complete = callback.complete;
		}

		var $d = window.$ || $m;

		if (options.data) {
			if (options.type.toUpperCase() === 'GET') {
				if ($m) {
					settings.data = $m.serialize(options.data);
				} else {
					settings.data = $d.serializeObject(options.data);
				}
			} else {
				settings.data = JSON.stringify(options.data);
			}
		}

		return $d.ajax(settings);
	},

	error: function(XHR) {
		app.loading.hide();
		if (XHR.status === 401) {
			app.login.open();
			return false;
		} else if (XHR.status === 403) {
			app.alert('权限错误', '错误');
			return false;
		}
		try {
			var result = JSON.parse(XHR.responseText);
			if (result) {
				app.alert(result.msg, '错误');
			}
		} catch (e) {
			if (XHR.status === 400) {
				app.alert('请求错误', '错误');
				return false;
			}
			app.alert('无法连接服务，请稍后再试', '网络异常');
		}
	}
};
