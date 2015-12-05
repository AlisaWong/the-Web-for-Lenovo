/*
 * ************************************************* 
 * File Name  :lnv_location_p.js 
 * Created on :2014-11-04 22:00:00
 * Describe   :Get city By IP & show baidumap
 * Encoding   :UTF-8 
 * @Author Shawn xu <xuxy10@lenovo.com>
 * @Lenovo.com (C)2014-2015 
 * ************************************************
 */

var lnv_api = lnv_api || {};
 
(function(){
	var Location = function(config) {
	    this.config = config;
	    if (config.isIp) {
	        this.__getCityByIp();
	    }else{
	    	this.__getCity();
	    }
	};
	Location.prototype = {
		__getCity: function(){
		    var me = this, _geo = new BMap.Geolocation;
			_geo.getCurrentPosition(function (res) {
			    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
			        me.config.onComplete(res)
			    }
			    else {
			        me.config.onComplete('')
			    }
			}, { enableHighAccuracy: true })
		},
		__getCityByIp: function(){
			var me = this, _loc = new BMap.LocalCity;
			_loc.get(function(res){
				me.config.onComplete(res)
			});
		},
		showMap: function(obj, x ,y){
			if(obj && x && y){
				var map = new BMap.Map(obj);
				var point = new BMap.Point(x, y);
				map.centerAndZoom(point, 15);
				map.addControl(new BMap.NavigationControl());
				map.addControl(new BMap.MapTypeControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));
				map.enableScrollWheelZoom(true);
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				return true;
			}else{
				return false;
			}
		}
	};
	lnv_api.location_p = function() {
		return {
			init : function(config) {
				return new Location(config);
			}
		}
	}();
})()