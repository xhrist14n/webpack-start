/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "scripts/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _incompDetect = __webpack_require__(1);

	var _incompDetect2 = _interopRequireDefault(_incompDetect);

	__webpack_require__(5);

	var _loader = __webpack_require__(302);

	var _loader2 = _interopRequireDefault(_loader);

	var _version = __webpack_require__(309);

	var _version2 = _interopRequireDefault(_version);

	var _incompatible = __webpack_require__(2);

	var _incompatible2 = _interopRequireDefault(_incompatible);

	var _appCopy = __webpack_require__(312);

	var _appCopy2 = _interopRequireDefault(_appCopy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// run browser detection
	(0, _incompDetect2.default)();

	// render build version if enabled
	(0, _version2.default)();

	// set loader callbacks
	function progressCb(e) {
	    var p = Math.round(100 * e.progress);

	    // show progress in loader
	    document.querySelector('.loader').innerHTML = p + _appCopy2.default.loader.progress;
	}

	function completeCb() {
	    // create new chunk
	    __webpack_require__.e/* nsure */(1, function (require) {
	        var angular = __webpack_require__(313);

	        __webpack_require__(315);

	        // hide loader
	        document.querySelector('.loader').style.display = 'none';

	        // run app
	        angular.bootstrap(document, ['mApp'], { strictDi: true });
	    });
	}

	// bootstrap application
	if (!_incompatible2.default.isIncompatibleBrowser()) {
	    // show loader
	    document.querySelector('.loader').innerHTML = _appCopy2.default.loader.start;
	    document.querySelector('.loader').style.display = 'block';

	    // start loader
	    _loader2.default.createLoader('main', progressCb, completeCb);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _incompatible = __webpack_require__(2);

	var _incompatible2 = _interopRequireDefault(_incompatible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Add 'incompatible' class to documentElement in unsupported browsers
	 */
	var incompDetect = function incompDetect() {
	    if (_incompatible2.default.isIncompatibleBrowser()) {
	        // if browser is incompatible
	        document.documentElement.className = 'incompatible ' + document.documentElement.className;
	    }
	};

		exports.default = incompDetect;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _uaParserJs = __webpack_require__(3);

	var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uaParser = new _uaParserJs2.default(),
	    incompatible = {}; /* eslint key-spacing: 0, comma-spacing: 0 */

	incompatible.uaResult = uaParser.getResult();

	/**
	 * Check browser compatibility
	 *
	 * @return {Boolean} - for uncompatible browser return 'true', otherwise 'false'
	 */
	incompatible.isIncompatibleBrowser = function () {
	    var listOfSupported = [{ browser: 'Chrome', version: 43 }, { browser: 'Firefox', version: 38 }, { browser: 'Safari', version: 7 }, { browser: 'Mobile Safari', version: 7 }, { browser: 'IE', version: 11 }, { browser: 'Edge', version: 12 }, { browser: 'IEMobile', version: 11 }],
	        incomp = true,
	        i;

	    for (i = 0; i < listOfSupported.length; i++) {
	        if (listOfSupported[i].browser === incompatible.uaResult.browser.name && listOfSupported[i].version <= parseInt(incompatible.uaResult.browser.major)) {
	            incomp = false;
	        }
	    }

	    return incomp;
	};

		exports.default = incompatible;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.10
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */

	(function (window, undefined) {

	    'use strict';

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '0.7.10',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        extend : function (regexes, extensions) {
	            for (var i in extensions) {
	                if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {
	                    regexes[i] = extensions[i].concat(regexes[i]);
	                }
	            }
	            return regexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.split(".")[0] : undefined;
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function () {

	            var result, i = 0, j, k, p, q, matches, match, args = arguments;

	            // loop through all regexes maps
	            while (i < args.length && !matches) {

	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)

	                // construct object barebones
	                if (typeof result === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        if (props.hasOwnProperty(p)){
	                            q = props[p];
	                            if (typeof q === OBJ_TYPE) {
	                                result[q[0]] = undefined;
	                            } else {
	                                result[q] = undefined;
	                            }
	                        }
	                    }
	                }

	                // try matching uastring with regexes
	                j = k = 0;
	                while (j < regex.length && !matches) {
	                    matches = regex[j++].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            return result;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80

	            ], [NAME, VERSION], [

	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
	            ], [NAME, VERSION], [

	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [

	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [

	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [

	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            /(qqbrowser)[\/\s]?([\w\.]+)/i
	                                                                                // QQBrowser
	            ], [NAME, VERSION], [

	            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
	            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
	            /JUC.+(ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [

	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [

	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [

	            /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [

	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [

	            /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
	            ], [VERSION, [NAME, 'Facebook']], [

	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [

	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [

	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [

	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]

	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////

	            , [

	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [

	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [

	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [

	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [

	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [

	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [

	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [

	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [

	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [

	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [

	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [

	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [

	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [

	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [

	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [

	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [

	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [

	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [

	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [

	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [

	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [

	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [

	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]

	            //////////////////////
	            // Media players END
	            ////////////////////*/

	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],

	        device : [[

	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [

	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
	                
	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s[6])/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
	            /(samsung);smarttv/i
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [

	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

	            /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

	            /\s(tablet)[;\/\s]/i,                                               // Unidentifiable Tablet
	            /\s(mobile)[;\/\s]/i                                                // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL]

	            /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////

	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

	            /(R1001)/i                                                          // Oppo R1001
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
	            /(X9006)/i                                                          // Oppo Find 7a
	            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R2001)/i                                                          // Oppo YOYO R2001
	            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R815)/i                                                           // Oppo Clover R815
	            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	             /(U707)/i                                                          // Oppo Find Way S
	            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            
	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

	            /////////////
	            // END TODO
	            ///////////*/

	        ],

	        engine : [[

	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(haiku)\s(\w+)/i,                                                  // Haiku
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////


	    var UAParser = function (uastring, extensions) {

	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var browser = mapper.rgx.apply(this, rgxmap.browser);
	            browser.major = util.major(browser.version);
	            return browser;
	        };
	        this.getCPU = function () {
	            return mapper.rgx.apply(this, rgxmap.cpu);
	        };
	        this.getDevice = function () {
	            return mapper.rgx.apply(this, rgxmap.device);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, rgxmap.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, rgxmap.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        this.setUA(ua);
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };


	    ///////////
	    // Export
	    //////////


	    // check js environment
	    if (typeof(exports) !== UNDEF_TYPE) {
	        // nodejs env
	        if (typeof module !== UNDEF_TYPE && module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    } else {
	        // requirejs env (optional)
	        if ("function" === FUNC_TYPE && __webpack_require__(4)) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return UAParser;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {
	            // browser env
	            window.UAParser = UAParser;
	        }
	    }

	    // jQuery/Zepto specific (optional)
	    // Note: 
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window.jQuery || window.Zepto;
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function() {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : this);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(6);

	__webpack_require__(297);

	__webpack_require__(299);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(61);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(80);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(163);
	__webpack_require__(164);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(215);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(295);
	__webpack_require__(296);
	module.exports = __webpack_require__(13);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(8)
	  , has            = __webpack_require__(9)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(22)
	  , META           = __webpack_require__(26).KEY
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(28)
	  , uid            = __webpack_require__(23)
	  , wks            = __webpack_require__(29)
	  , wksExt         = __webpack_require__(30)
	  , wksDefine      = __webpack_require__(31)
	  , keyOf          = __webpack_require__(33)
	  , enumKeys       = __webpack_require__(46)
	  , isArray        = __webpack_require__(49)
	  , anObject       = __webpack_require__(16)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(20)
	  , createDesc     = __webpack_require__(21)
	  , _create        = __webpack_require__(50)
	  , gOPNExt        = __webpack_require__(53)
	  , $GOPD          = __webpack_require__(55)
	  , $DP            = __webpack_require__(15)
	  , $keys          = __webpack_require__(34)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(54).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(48).f  = $propertyIsEnumerable;
	  __webpack_require__(47).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(32)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(13)
	  , hide      = __webpack_require__(14)
	  , redefine  = __webpack_require__(22)
	  , ctx       = __webpack_require__(24)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(16)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(10) && !__webpack_require__(11)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , hide      = __webpack_require__(14)
	  , has       = __webpack_require__(9)
	  , SRC       = __webpack_require__(23)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(13).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(23)('meta')
	  , isObject = __webpack_require__(17)
	  , has      = __webpack_require__(9)
	  , setDesc  = __webpack_require__(15).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(11)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(15).f
	  , has = __webpack_require__(9)
	  , TAG = __webpack_require__(29)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(27)('wks')
	  , uid        = __webpack_require__(23)
	  , Symbol     = __webpack_require__(8).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(29);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(8)
	  , core           = __webpack_require__(13)
	  , LIBRARY        = __webpack_require__(32)
	  , wksExt         = __webpack_require__(30)
	  , defineProperty = __webpack_require__(15).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(9)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(40)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(39);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(41)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(42)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(27)('keys')
	  , uid    = __webpack_require__(23);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(47)
	  , pIE     = __webpack_require__(48);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 48 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(16)
	  , dPs         = __webpack_require__(51)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(15)
	  , anObject = __webpack_require__(16)
	  , getKeys  = __webpack_require__(34);

	module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(54).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(48)
	  , createDesc     = __webpack_require__(21)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(20)
	  , has            = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(18)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(50)});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperty: __webpack_require__(15).f});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperties: __webpack_require__(51)});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(36)
	  , $getOwnPropertyDescriptor = __webpack_require__(55).f;

	__webpack_require__(60)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(62)
	  , $getPrototypeOf = __webpack_require__(63);

	__webpack_require__(60)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(39);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(9)
	  , toObject    = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(62)
	  , $keys    = __webpack_require__(34);

	__webpack_require__(60)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(60)('getOwnPropertyNames', function(){
	  return __webpack_require__(53).f;
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;

	__webpack_require__(60)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;

	__webpack_require__(60)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(17)
	  , meta     = __webpack_require__(26).onFreeze;

	__webpack_require__(60)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(17);

	__webpack_require__(60)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(17);

	__webpack_require__(60)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(17);

	__webpack_require__(60)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(12);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(73)});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(34)
	  , gOPS     = __webpack_require__(47)
	  , pIE      = __webpack_require__(48)
	  , toObject = __webpack_require__(62)
	  , IObject  = __webpack_require__(37)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(11)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {is: __webpack_require__(75)});

/***/ },
/* 75 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(77).set});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(17)
	  , anObject = __webpack_require__(16);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(24)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(79)
	  , test    = {};
	test[__webpack_require__(29)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(22)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(38)
	  , TAG = __webpack_require__(29)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(12);

	$export($export.P, 'Function', {bind: __webpack_require__(81)});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(25)
	  , isObject   = __webpack_require__(17)
	  , invoke     = __webpack_require__(82)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(15).f
	  , createDesc = __webpack_require__(21)
	  , has        = __webpack_require__(9)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(17)
	  , getPrototypeOf = __webpack_require__(63)
	  , HAS_INSTANCE   = __webpack_require__(29)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(15).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , $parseInt = __webpack_require__(86);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(8).parseInt
	  , $trim     = __webpack_require__(87).trim
	  , ws        = __webpack_require__(88)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , defined = __webpack_require__(39)
	  , fails   = __webpack_require__(11)
	  , spaces  = __webpack_require__(88)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(12)
	  , $parseFloat = __webpack_require__(90);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(8).parseFloat
	  , $trim       = __webpack_require__(87).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(88) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(8)
	  , has               = __webpack_require__(9)
	  , cof               = __webpack_require__(38)
	  , inheritIfRequired = __webpack_require__(92)
	  , toPrimitive       = __webpack_require__(20)
	  , fails             = __webpack_require__(11)
	  , gOPN              = __webpack_require__(54).f
	  , gOPD              = __webpack_require__(55).f
	  , dP                = __webpack_require__(15).f
	  , $trim             = __webpack_require__(87).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(50)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(10) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(22)(global, NUMBER, $Number);
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(17)
	  , setPrototypeOf = __webpack_require__(77).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , toInteger    = __webpack_require__(42)
	  , aNumberValue = __webpack_require__(94)
	  , repeat       = __webpack_require__(95)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(11)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(38);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(39);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , $fails       = __webpack_require__(11)
	  , aNumberValue = __webpack_require__(94)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(12);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(12)
	  , _isFinite = __webpack_require__(8).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(12);

	$export($export.S, 'Number', {isInteger: __webpack_require__(100)});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(17)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(12);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(12)
	  , isInteger = __webpack_require__(100)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(12);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(12);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(12)
	  , $parseFloat = __webpack_require__(90);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , $parseInt = __webpack_require__(86);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(12)
	  , log1p   = __webpack_require__(108)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(12)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(12)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(12)
	  , sign    = __webpack_require__(112);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(12)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(12)
	  , $expm1  = __webpack_require__(116);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 116 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(12)
	  , sign      = __webpack_require__(112)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(12)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(12)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {log1p: __webpack_require__(108)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {sign: __webpack_require__(112)});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(12)
	  , expm1   = __webpack_require__(116)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(12)
	  , expm1   = __webpack_require__(116)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(12)
	  , toIndex        = __webpack_require__(43)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(12)
	  , toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(41);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(87)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(131)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(132)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(39);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(32)
	  , $export        = __webpack_require__(12)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(14)
	  , has            = __webpack_require__(9)
	  , Iterators      = __webpack_require__(133)
	  , $iterCreate    = __webpack_require__(134)
	  , setToStringTag = __webpack_require__(28)
	  , getPrototypeOf = __webpack_require__(63)
	  , ITERATOR       = __webpack_require__(29)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(50)
	  , descriptor     = __webpack_require__(21)
	  , setToStringTag = __webpack_require__(28)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(14)(IteratorPrototype, __webpack_require__(29)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $at     = __webpack_require__(131)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(12)
	  , toLength  = __webpack_require__(41)
	  , context   = __webpack_require__(137)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(139)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(138)
	  , defined  = __webpack_require__(39);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(17)
	  , cof      = __webpack_require__(38)
	  , MATCH    = __webpack_require__(29)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(29)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(12)
	  , context  = __webpack_require__(137)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(139)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(95)
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(12)
	  , toLength    = __webpack_require__(41)
	  , context     = __webpack_require__(137)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(139)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(144)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , fails   = __webpack_require__(11)
	  , defined = __webpack_require__(39)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(144)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(144)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(144)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(144)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(144)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(144)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(144)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(144)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(144)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(144)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(144)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(144)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(12);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(12)
	  , toObject    = __webpack_require__(62)
	  , toPrimitive = __webpack_require__(20);

	$export($export.P + $export.F * __webpack_require__(11)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(12)
	  , fails   = __webpack_require__(11)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(22)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(29)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(162));

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(16)
	  , toPrimitive = __webpack_require__(20)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(12);

	$export($export.S, 'Array', {isArray: __webpack_require__(49)});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(24)
	  , $export        = __webpack_require__(12)
	  , toObject       = __webpack_require__(62)
	  , call           = __webpack_require__(165)
	  , isArrayIter    = __webpack_require__(166)
	  , toLength       = __webpack_require__(41)
	  , createProperty = __webpack_require__(167)
	  , getIterFn      = __webpack_require__(168);

	$export($export.S + $export.F * !__webpack_require__(169)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(16);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(133)
	  , ITERATOR   = __webpack_require__(29)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(15)
	  , createDesc      = __webpack_require__(21);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(79)
	  , ITERATOR  = __webpack_require__(29)('iterator')
	  , Iterators = __webpack_require__(133);
	module.exports = __webpack_require__(13).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(29)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(12)
	  , createProperty = __webpack_require__(167);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(12)
	  , toIObject = __webpack_require__(36)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(37) != Object || !__webpack_require__(172)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(11);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(12)
	  , html       = __webpack_require__(52)
	  , cof        = __webpack_require__(38)
	  , toIndex    = __webpack_require__(43)
	  , toLength   = __webpack_require__(41)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(11)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(12)
	  , aFunction = __webpack_require__(25)
	  , toObject  = __webpack_require__(62)
	  , fails     = __webpack_require__(11)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(172)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(12)
	  , $forEach = __webpack_require__(176)(0)
	  , STRICT   = __webpack_require__(172)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(24)
	  , IObject  = __webpack_require__(37)
	  , toObject = __webpack_require__(62)
	  , toLength = __webpack_require__(41)
	  , asc      = __webpack_require__(177);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(178);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , isArray  = __webpack_require__(49)
	  , SPECIES  = __webpack_require__(29)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $map    = __webpack_require__(176)(1);

	$export($export.P + $export.F * !__webpack_require__(172)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $filter = __webpack_require__(176)(2);

	$export($export.P + $export.F * !__webpack_require__(172)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $some   = __webpack_require__(176)(3);

	$export($export.P + $export.F * !__webpack_require__(172)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $every  = __webpack_require__(176)(4);

	$export($export.P + $export.F * !__webpack_require__(172)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $reduce = __webpack_require__(184);

	$export($export.P + $export.F * !__webpack_require__(172)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(25)
	  , toObject  = __webpack_require__(62)
	  , IObject   = __webpack_require__(37)
	  , toLength  = __webpack_require__(41);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(12)
	  , $reduce = __webpack_require__(184);

	$export($export.P + $export.F * !__webpack_require__(172)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(12)
	  , $indexOf      = __webpack_require__(40)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(12)
	  , toIObject     = __webpack_require__(36)
	  , toInteger     = __webpack_require__(42)
	  , toLength      = __webpack_require__(41)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(172)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(12);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(189)});

	__webpack_require__(190)('copyWithin');

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(62)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(41);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(29)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(12);

	$export($export.P, 'Array', {fill: __webpack_require__(192)});

	__webpack_require__(190)('fill');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(62)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(41);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(12)
	  , $find   = __webpack_require__(176)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(12)
	  , $find   = __webpack_require__(176)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(190)(KEY);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196)('Array');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(8)
	  , dP          = __webpack_require__(15)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(29)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(190)
	  , step             = __webpack_require__(198)
	  , Iterators        = __webpack_require__(133)
	  , toIObject        = __webpack_require__(36);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(132)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(8)
	  , inheritIfRequired = __webpack_require__(92)
	  , dP                = __webpack_require__(15).f
	  , gOPN              = __webpack_require__(54).f
	  , isRegExp          = __webpack_require__(138)
	  , $flags            = __webpack_require__(200)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(29)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(22)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(196)('RegExp');

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(16);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(202);
	var anObject    = __webpack_require__(16)
	  , $flags      = __webpack_require__(200)
	  , DESCRIPTORS = __webpack_require__(10)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(22)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(11)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(10) && /./g.flags != 'g')__webpack_require__(15).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(200)
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(204)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(14)
	  , redefine = __webpack_require__(22)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(39)
	  , wks      = __webpack_require__(29);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(204)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(204)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(204)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(138)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(32)
	  , global             = __webpack_require__(8)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(79)
	  , $export            = __webpack_require__(12)
	  , isObject           = __webpack_require__(17)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(209)
	  , forOf              = __webpack_require__(210)
	  , speciesConstructor = __webpack_require__(211)
	  , task               = __webpack_require__(212).set
	  , microtask          = __webpack_require__(213)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(29)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(214)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(28)($Promise, PROMISE);
	__webpack_require__(196)(PROMISE);
	Wrapper = __webpack_require__(13)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(169)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(165)
	  , isArrayIter = __webpack_require__(166)
	  , anObject    = __webpack_require__(16)
	  , toLength    = __webpack_require__(41)
	  , getIterFn   = __webpack_require__(168)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(16)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(29)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(82)
	  , html               = __webpack_require__(52)
	  , cel                = __webpack_require__(19)
	  , global             = __webpack_require__(8)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(38)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , macrotask = __webpack_require__(212).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(38)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(22);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);

	// 23.1 Map Objects
	module.exports = __webpack_require__(217)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(15).f
	  , create      = __webpack_require__(50)
	  , redefineAll = __webpack_require__(214)
	  , ctx         = __webpack_require__(24)
	  , anInstance  = __webpack_require__(209)
	  , defined     = __webpack_require__(39)
	  , forOf       = __webpack_require__(210)
	  , $iterDefine = __webpack_require__(132)
	  , step        = __webpack_require__(198)
	  , setSpecies  = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(10)
	  , fastKey     = __webpack_require__(26).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(8)
	  , $export           = __webpack_require__(12)
	  , redefine          = __webpack_require__(22)
	  , redefineAll       = __webpack_require__(214)
	  , meta              = __webpack_require__(26)
	  , forOf             = __webpack_require__(210)
	  , anInstance        = __webpack_require__(209)
	  , isObject          = __webpack_require__(17)
	  , fails             = __webpack_require__(11)
	  , $iterDetect       = __webpack_require__(169)
	  , setToStringTag    = __webpack_require__(28)
	  , inheritIfRequired = __webpack_require__(92);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(216);

	// 23.2 Set Objects
	module.exports = __webpack_require__(217)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(176)(0)
	  , redefine     = __webpack_require__(22)
	  , meta         = __webpack_require__(26)
	  , assign       = __webpack_require__(73)
	  , weak         = __webpack_require__(220)
	  , isObject     = __webpack_require__(17)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(217)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(214)
	  , getWeak           = __webpack_require__(26).getWeak
	  , anObject          = __webpack_require__(16)
	  , isObject          = __webpack_require__(17)
	  , anInstance        = __webpack_require__(209)
	  , forOf             = __webpack_require__(210)
	  , createArrayMethod = __webpack_require__(176)
	  , $has              = __webpack_require__(9)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(220);

	// 23.4 WeakSet Objects
	__webpack_require__(217)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(12)
	  , $typed       = __webpack_require__(223)
	  , buffer       = __webpack_require__(224)
	  , anObject     = __webpack_require__(16)
	  , toIndex      = __webpack_require__(43)
	  , toLength     = __webpack_require__(41)
	  , isObject     = __webpack_require__(17)
	  , ArrayBuffer  = __webpack_require__(8).ArrayBuffer
	  , speciesConstructor = __webpack_require__(211)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(11)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(196)(ARRAY_BUFFER);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , hide   = __webpack_require__(14)
	  , uid    = __webpack_require__(23)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(32)
	  , $typed         = __webpack_require__(223)
	  , hide           = __webpack_require__(14)
	  , redefineAll    = __webpack_require__(214)
	  , fails          = __webpack_require__(11)
	  , anInstance     = __webpack_require__(209)
	  , toInteger      = __webpack_require__(42)
	  , toLength       = __webpack_require__(41)
	  , gOPN           = __webpack_require__(54).f
	  , dP             = __webpack_require__(15).f
	  , arrayFill      = __webpack_require__(192)
	  , setToStringTag = __webpack_require__(28)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	$export($export.G + $export.W + $export.F * !__webpack_require__(223).ABV, {
	  DataView: __webpack_require__(224).DataView
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(10)){
	  var LIBRARY             = __webpack_require__(32)
	    , global              = __webpack_require__(8)
	    , fails               = __webpack_require__(11)
	    , $export             = __webpack_require__(12)
	    , $typed              = __webpack_require__(223)
	    , $buffer             = __webpack_require__(224)
	    , ctx                 = __webpack_require__(24)
	    , anInstance          = __webpack_require__(209)
	    , propertyDesc        = __webpack_require__(21)
	    , hide                = __webpack_require__(14)
	    , redefineAll         = __webpack_require__(214)
	    , toInteger           = __webpack_require__(42)
	    , toLength            = __webpack_require__(41)
	    , toIndex             = __webpack_require__(43)
	    , toPrimitive         = __webpack_require__(20)
	    , has                 = __webpack_require__(9)
	    , same                = __webpack_require__(75)
	    , classof             = __webpack_require__(79)
	    , isObject            = __webpack_require__(17)
	    , toObject            = __webpack_require__(62)
	    , isArrayIter         = __webpack_require__(166)
	    , create              = __webpack_require__(50)
	    , getPrototypeOf      = __webpack_require__(63)
	    , gOPN                = __webpack_require__(54).f
	    , getIterFn           = __webpack_require__(168)
	    , uid                 = __webpack_require__(23)
	    , wks                 = __webpack_require__(29)
	    , createArrayMethod   = __webpack_require__(176)
	    , createArrayIncludes = __webpack_require__(40)
	    , speciesConstructor  = __webpack_require__(211)
	    , ArrayIterators      = __webpack_require__(197)
	    , Iterators           = __webpack_require__(133)
	    , $iterDetect         = __webpack_require__(169)
	    , setSpecies          = __webpack_require__(196)
	    , arrayFill           = __webpack_require__(192)
	    , arrayCopyWithin     = __webpack_require__(189)
	    , $DP                 = __webpack_require__(15)
	    , $GOPD               = __webpack_require__(55)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(227)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(12)
	  , aFunction = __webpack_require__(25)
	  , anObject  = __webpack_require__(16)
	  , rApply    = (__webpack_require__(8).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(11)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(12)
	  , create     = __webpack_require__(50)
	  , aFunction  = __webpack_require__(25)
	  , anObject   = __webpack_require__(16)
	  , isObject   = __webpack_require__(17)
	  , fails      = __webpack_require__(11)
	  , bind       = __webpack_require__(81)
	  , rConstruct = (__webpack_require__(8).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(15)
	  , $export     = __webpack_require__(12)
	  , anObject    = __webpack_require__(16)
	  , toPrimitive = __webpack_require__(20);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(12)
	  , gOPD     = __webpack_require__(55).f
	  , anObject = __webpack_require__(16);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(12)
	  , anObject = __webpack_require__(16);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(134)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(55)
	  , getPrototypeOf = __webpack_require__(63)
	  , has            = __webpack_require__(9)
	  , $export        = __webpack_require__(12)
	  , isObject       = __webpack_require__(17)
	  , anObject       = __webpack_require__(16);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(55)
	  , $export  = __webpack_require__(12)
	  , anObject = __webpack_require__(16);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(12)
	  , getProto = __webpack_require__(63)
	  , anObject = __webpack_require__(16);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(12)
	  , anObject      = __webpack_require__(16)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(12);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(247)});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(54)
	  , gOPS     = __webpack_require__(47)
	  , anObject = __webpack_require__(16)
	  , Reflect  = __webpack_require__(8).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(12)
	  , anObject           = __webpack_require__(16)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(15)
	  , gOPD           = __webpack_require__(55)
	  , getPrototypeOf = __webpack_require__(63)
	  , has            = __webpack_require__(9)
	  , $export        = __webpack_require__(12)
	  , createDesc     = __webpack_require__(21)
	  , anObject       = __webpack_require__(16)
	  , isObject       = __webpack_require__(17);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(12)
	  , setProto = __webpack_require__(77);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(12)
	  , $includes = __webpack_require__(40)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(190)('includes');

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(12)
	  , $at     = __webpack_require__(131)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(12)
	  , $pad    = __webpack_require__(254);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(41)
	  , repeat   = __webpack_require__(95)
	  , defined  = __webpack_require__(39);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(12)
	  , $pad    = __webpack_require__(254);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(87)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(87)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(12)
	  , defined     = __webpack_require__(39)
	  , toLength    = __webpack_require__(41)
	  , isRegExp    = __webpack_require__(138)
	  , getFlags    = __webpack_require__(200)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(134)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('asyncIterator');

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31)('observable');

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(12)
	  , ownKeys        = __webpack_require__(247)
	  , toIObject      = __webpack_require__(36)
	  , gOPD           = __webpack_require__(55)
	  , createProperty = __webpack_require__(167);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(12)
	  , $values = __webpack_require__(263)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36)
	  , isEnum    = __webpack_require__(48).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(12)
	  , $entries = __webpack_require__(263)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(12)
	  , toObject        = __webpack_require__(62)
	  , aFunction       = __webpack_require__(25)
	  , $defineProperty = __webpack_require__(15);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(32)|| !__webpack_require__(11)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(8)[K];
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(12)
	  , toObject        = __webpack_require__(62)
	  , aFunction       = __webpack_require__(25)
	  , $defineProperty = __webpack_require__(15);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(12)
	  , toObject                 = __webpack_require__(62)
	  , toPrimitive              = __webpack_require__(20)
	  , getPrototypeOf           = __webpack_require__(63)
	  , getOwnPropertyDescriptor = __webpack_require__(55).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(12)
	  , toObject                 = __webpack_require__(62)
	  , toPrimitive              = __webpack_require__(20)
	  , getPrototypeOf           = __webpack_require__(63)
	  , getOwnPropertyDescriptor = __webpack_require__(55).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(266), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(12);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(271)('Map')});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(79)
	  , from    = __webpack_require__(272);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(210);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(12);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(271)('Set')});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(12);

	$export($export.S, 'System', {global: __webpack_require__(8)});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(12)
	  , cof     = __webpack_require__(38);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(12);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(281)
	  , anObject                  = __webpack_require__(16)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(215)
	  , $export = __webpack_require__(12)
	  , shared  = __webpack_require__(27)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(219)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , getPrototypeOf         = __webpack_require__(63)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(218)
	  , from                    = __webpack_require__(272)
	  , metadata                = __webpack_require__(281)
	  , anObject                = __webpack_require__(16)
	  , getPrototypeOf          = __webpack_require__(63)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(281)
	  , anObject                = __webpack_require__(16)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , getPrototypeOf         = __webpack_require__(63)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(281)
	  , anObject               = __webpack_require__(16)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(281)
	  , anObject                  = __webpack_require__(16)
	  , aFunction                 = __webpack_require__(25)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(12)
	  , microtask = __webpack_require__(213)()
	  , process   = __webpack_require__(8).process
	  , isNode    = __webpack_require__(38)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(12)
	  , global      = __webpack_require__(8)
	  , core        = __webpack_require__(13)
	  , microtask   = __webpack_require__(213)()
	  , OBSERVABLE  = __webpack_require__(29)('observable')
	  , aFunction   = __webpack_require__(25)
	  , anObject    = __webpack_require__(16)
	  , anInstance  = __webpack_require__(209)
	  , redefineAll = __webpack_require__(214)
	  , hide        = __webpack_require__(14)
	  , forOf       = __webpack_require__(210)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(196)('Observable');

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(8)
	  , $export    = __webpack_require__(12)
	  , invoke     = __webpack_require__(82)
	  , partial    = __webpack_require__(293)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(294)
	  , invoke    = __webpack_require__(82)
	  , aFunction = __webpack_require__(25);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12)
	  , $task   = __webpack_require__(212);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(197)
	  , redefine      = __webpack_require__(22)
	  , global        = __webpack_require__(8)
	  , hide          = __webpack_require__(14)
	  , Iterators     = __webpack_require__(133)
	  , wks           = __webpack_require__(29)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(298)))

/***/ },
/* 298 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(300);
	module.exports = __webpack_require__(13).RegExp.escape;

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(12)
	  , $re     = __webpack_require__(301)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createjs = __webpack_require__(303);

	var _createjs2 = _interopRequireDefault(_createjs);

	var _loaderData = __webpack_require__(305);

	var _loaderData2 = _interopRequireDefault(_loaderData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _loader = {};

	/**
	 * Create loader
	 *
	 * @param  {string}   id         - id of new loader
	 * @param  {function} progressCb - callback function during loading
	 * @param  {function} completeCb - callback function when loading is completed
	 */
	var createLoader = function createLoader(id, progressCb, completeCb) {
	    if (_loader[id] != null) {
	        throw new Error('Loader with id: ' + id + ' already exists.');
	    }

	    _loader[id] = new _createjs2.default.LoadQueue(true);

	    _loader[id].addEventListener('progress', progressCb);
	    _loader[id].addEventListener('complete', completeCb);

	    _loader[id].loadManifest(_loaderData2.default);
	};

	/**
	 * Create spy loader for unit tests
	 *
	 * @param  {string} id    - id of a loaderData
	 * @param  {string} value - return value of the new loaderData
	 */
	var createSpyLoader = function createSpyLoader(id, value) {
	    if (_loader[id] != null) {
	        throw new Error('Loader with id: ' + id + ' already exists.');
	    }

	    _loader[id] = {
	        getResult: function getResult() {
	            return value;
	        }
	    };
	};

	/**
	 * Get loader by its id
	 *
	 * @param  {string} id - id of a loaderData
	 */
	var getLoader = function getLoader(id) {
	    if (_loader[id] == null) {
	        throw new Error('Loader with id: ' + id + ' does not exist.');
	    }

	    return _loader[id];
	};

	exports.default = {
	    createLoader: createLoader,
	    createSpyLoader: createSpyLoader,
	    getLoader: getLoader
		};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	/*!
	* PreloadJS
	* Visit http://createjs.com/ for documentation, updates and examples.
	*
	* Copyright (c) 2010 gskinner.com, inc.
	*
	* Permission is hereby granted, free of charge, to any person
	* obtaining a copy of this software and associated documentation
	* files (the "Software"), to deal in the Software without
	* restriction, including without limitation the rights to use,
	* copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the
	* Software is furnished to do so, subject to the following
	* conditions:
	*
	* The above copyright notice and this permission notice shall be
	* included in all copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	* OTHER DEALINGS IN THE SOFTWARE.
	*/


	//##############################################################################
	// version.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		/**
		 * Static class holding library specific information such as the version and buildDate of the library.
		 * @class PreloadJS
		 **/
		var s = createjs.PreloadJS = createjs.PreloadJS || {};

		/**
		 * The version string for this release.
		 * @property version
		 * @type {String}
		 * @static
		 **/
		s.version = /*=version*/"0.6.2"; // injected by build process

		/**
		 * The build date for this release in UTC format.
		 * @property buildDate
		 * @type {String}
		 * @static
		 **/
		s.buildDate = /*=date*/"Thu, 26 Nov 2015 20:44:31 GMT"; // injected by build process

	})();

	//##############################################################################
	// extend.js
	//##############################################################################

	this.createjs = this.createjs||{};

	/**
	 * @class Utility Methods
	 */

	/**
	 * Sets up the prototype chain and constructor property for a new class.
	 *
	 * This should be called right after creating the class constructor.
	 *
	 * 	function MySubClass() {}
	 * 	createjs.extend(MySubClass, MySuperClass);
	 * 	MySubClass.prototype.doSomething = function() { }
	 *
	 * 	var foo = new MySubClass();
	 * 	console.log(foo instanceof MySuperClass); // true
	 * 	console.log(foo.prototype.constructor === MySubClass); // true
	 *
	 * @method extend
	 * @param {Function} subclass The subclass.
	 * @param {Function} superclass The superclass to extend.
	 * @return {Function} Returns the subclass's new prototype.
	 */
	createjs.extend = function(subclass, superclass) {
		"use strict";

		function o() { this.constructor = subclass; }
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o());
	};

	//##############################################################################
	// promote.js
	//##############################################################################

	this.createjs = this.createjs||{};

	/**
	 * @class Utility Methods
	 */

	/**
	 * Promotes any methods on the super class that were overridden, by creating an alias in the format `prefix_methodName`.
	 * It is recommended to use the super class's name as the prefix.
	 * An alias to the super class's constructor is always added in the format `prefix_constructor`.
	 * This allows the subclass to call super class methods without using `function.call`, providing better performance.
	 *
	 * For example, if `MySubClass` extends `MySuperClass`, and both define a `draw` method, then calling `promote(MySubClass, "MySuperClass")`
	 * would add a `MySuperClass_constructor` method to MySubClass and promote the `draw` method on `MySuperClass` to the
	 * prototype of `MySubClass` as `MySuperClass_draw`.
	 *
	 * This should be called after the class's prototype is fully defined.
	 *
	 * 	function ClassA(name) {
	 * 		this.name = name;
	 * 	}
	 * 	ClassA.prototype.greet = function() {
	 * 		return "Hello "+this.name;
	 * 	}
	 *
	 * 	function ClassB(name, punctuation) {
	 * 		this.ClassA_constructor(name);
	 * 		this.punctuation = punctuation;
	 * 	}
	 * 	createjs.extend(ClassB, ClassA);
	 * 	ClassB.prototype.greet = function() {
	 * 		return this.ClassA_greet()+this.punctuation;
	 * 	}
	 * 	createjs.promote(ClassB, "ClassA");
	 *
	 * 	var foo = new ClassB("World", "!?!");
	 * 	console.log(foo.greet()); // Hello World!?!
	 *
	 * @method promote
	 * @param {Function} subclass The class to promote super class methods on.
	 * @param {String} prefix The prefix to add to the promoted method names. Usually the name of the superclass.
	 * @return {Function} Returns the subclass.
	 */
	createjs.promote = function(subclass, prefix) {
		"use strict";

		var subP = subclass.prototype, supP = (Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;
		if (supP) {
			subP[(prefix+="_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) { subP[prefix + n] = supP[n]; }
			}
		}
		return subclass;
	};

	//##############################################################################
	// proxy.js
	//##############################################################################

	this.createjs = this.createjs||{};

	/**
	 * Various utilities that the CreateJS Suite uses. Utilities are created as separate files, and will be available on the
	 * createjs namespace directly.
	 *
	 * <h4>Example</h4>
	 *
	 *      myObject.addEventListener("change", createjs.proxy(myMethod, scope));
	 *
	 * @class Utility Methods
	 * @main Utility Methods
	 */

	(function() {
		"use strict";

		/**
		 * A function proxy for methods. By default, JavaScript methods do not maintain scope, so passing a method as a
		 * callback will result in the method getting called in the scope of the caller. Using a proxy ensures that the
		 * method gets called in the correct scope.
		 *
		 * Additional arguments can be passed that will be applied to the function when it is called.
		 *
		 * <h4>Example</h4>
		 *
		 *      myObject.addEventListener("event", createjs.proxy(myHandler, this, arg1, arg2));
		 *
		 *      function myHandler(arg1, arg2) {
		 *           // This gets called when myObject.myCallback is executed.
		 *      }
		 *
		 * @method proxy
		 * @param {Function} method The function to call
		 * @param {Object} scope The scope to call the method name on
		 * @param {mixed} [arg] * Arguments that are appended to the callback for additional params.
		 * @public
		 * @static
		 */
		createjs.proxy = function (method, scope) {
			var aArgs = Array.prototype.slice.call(arguments, 2);
			return function () {
				return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
			};
		}

	}());

	//##############################################################################
	// indexOf.js
	//##############################################################################

	this.createjs = this.createjs||{};

	/**
	 * @class Utility Methods
	 */

	/**
	 * Finds the first occurrence of a specified value searchElement in the passed in array, and returns the index of
	 * that value.  Returns -1 if value is not found.
	 *
	 *      var i = createjs.indexOf(myArray, myElementToFind);
	 *
	 * @method indexOf
	 * @param {Array} array Array to search for searchElement
	 * @param searchElement Element to find in array.
	 * @return {Number} The first index of searchElement in array.
	 */
	createjs.indexOf = function (array, searchElement){
		"use strict";

		for (var i = 0,l=array.length; i < l; i++) {
			if (searchElement === array[i]) {
				return i;
			}
		}
		return -1;
	};

	//##############################################################################
	// Event.js
	//##############################################################################

	this.createjs = this.createjs||{};

	(function() {
		"use strict";

	// constructor:
		/**
		 * Contains properties and methods shared by all events for use with
		 * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
		 * 
		 * Note that Event objects are often reused, so you should never
		 * rely on an event object's state outside of the call stack it was received in.
		 * @class Event
		 * @param {String} type The event type.
		 * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
		 * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
		 * @constructor
		 **/
		function Event(type, bubbles, cancelable) {
			
		
		// public properties:
			/**
			 * The type of event.
			 * @property type
			 * @type String
			 **/
			this.type = type;
		
			/**
			 * The object that generated an event.
			 * @property target
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.target = null;
		
			/**
			 * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
			 * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
			 * is generated from childObj, then a listener on parentObj would receive the event with
			 * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
			 * @property currentTarget
			 * @type Object
			 * @default null
			 * @readonly
			*/
			this.currentTarget = null;
		
			/**
			 * For bubbling events, this indicates the current event phase:<OL>
			 * 	<LI> capture phase: starting from the top parent to the target</LI>
			 * 	<LI> at target phase: currently being dispatched from the target</LI>
			 * 	<LI> bubbling phase: from the target to the top parent</LI>
			 * </OL>
			 * @property eventPhase
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.eventPhase = 0;
		
			/**
			 * Indicates whether the event will bubble through the display list.
			 * @property bubbles
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.bubbles = !!bubbles;
		
			/**
			 * Indicates whether the default behaviour of this event can be cancelled via
			 * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
			 * @property cancelable
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.cancelable = !!cancelable;
		
			/**
			 * The epoch time at which this event was created.
			 * @property timeStamp
			 * @type Number
			 * @default 0
			 * @readonly
			*/
			this.timeStamp = (new Date()).getTime();
		
			/**
			 * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
			 * on this event.
			 * @property defaultPrevented
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.defaultPrevented = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
			 * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
			 * @property propagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.propagationStopped = false;
		
			/**
			 * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
			 * on this event.
			 * @property immediatePropagationStopped
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.immediatePropagationStopped = false;
			
			/**
			 * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
			 * @property removed
			 * @type Boolean
			 * @default false
			 * @readonly
			*/
			this.removed = false;
		}
		var p = Event.prototype;

		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.

	// public methods:
		/**
		 * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true if the event is cancelable.
		 * Mirrors the DOM level 2 event standard. In general, cancelable events that have `preventDefault()` called will
		 * cancel the default behaviour associated with the event.
		 * @method preventDefault
		 **/
		p.preventDefault = function() {
			this.defaultPrevented = this.cancelable&&true;
		};

		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopPropagation
		 **/
		p.stopPropagation = function() {
			this.propagationStopped = true;
		};

		/**
		 * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
		 * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
		 * Mirrors the DOM event standard.
		 * @method stopImmediatePropagation
		 **/
		p.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = true;
		};
		
		/**
		 * Causes the active listener to be removed via removeEventListener();
		 * 
		 * 		myBtn.addEventListener("click", function(evt) {
		 * 			// do stuff...
		 * 			evt.remove(); // removes this listener.
		 * 		});
		 * 
		 * @method remove
		 **/
		p.remove = function() {
			this.removed = true;
		};
		
		/**
		 * Returns a clone of the Event instance.
		 * @method clone
		 * @return {Event} a clone of the Event instance.
		 **/
		p.clone = function() {
			return new Event(this.type, this.bubbles, this.cancelable);
		};
		
		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the instance.
		 * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
		 * @chainable
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};

		/**
		 * Returns a string representation of this object.
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[Event (type="+this.type+")]";
		};

		createjs.Event = Event;
	}());

	//##############################################################################
	// ErrorEvent.js
	//##############################################################################

	this.createjs = this.createjs||{};

	(function() {
		"use strict";

		/**
		 * A general error {{#crossLink "Event"}}{{/crossLink}}, that describes an error that occurred, as well as any details.
		 * @class ErrorEvent
		 * @param {String} [title] The error title
		 * @param {String} [message] The error description
		 * @param {Object} [data] Additional error data
		 * @constructor
		 */
		function ErrorEvent(title, message, data) {
			this.Event_constructor("error");

			/**
			 * The short error title, which indicates the type of error that occurred.
			 * @property title
			 * @type String
			 */
			this.title = title;

			/**
			 * The verbose error message, containing details about the error.
			 * @property message
			 * @type String
			 */
			this.message = message;

			/**
			 * Additional data attached to an error.
			 * @property data
			 * @type {Object}
			 */
			this.data = data;
		}

		var p = createjs.extend(ErrorEvent, createjs.Event);

		p.clone = function() {
			return new createjs.ErrorEvent(this.title, this.message, this.data);
		};

		createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");

	}());

	//##############################################################################
	// EventDispatcher.js
	//##############################################################################

	this.createjs = this.createjs||{};

	(function() {
		"use strict";


	// constructor:
		/**
		 * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
		 *
		 * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
		 * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
		 * 
		 * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
		 * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
		 * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
		 * 
		 * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
		 * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The 
		 * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
		 * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
		 * 
		 * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
		 * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also 
		 * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
		 *
		 * <h4>Example</h4>
		 * Add EventDispatcher capabilities to the "MyClass" class.
		 *
		 *      EventDispatcher.initialize(MyClass.prototype);
		 *
		 * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
		 *
		 *      instance.addEventListener("eventName", handlerMethod);
		 *      function handlerMethod(event) {
		 *          console.log(event.target + " Was Clicked");
		 *      }
		 *
		 * <b>Maintaining proper scope</b><br />
		 * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
		 * method to subscribe to events simplifies this.
		 *
		 *      instance.addEventListener("click", function(event) {
		 *          console.log(instance == this); // false, scope is ambiguous.
		 *      });
		 *      
		 *      instance.on("click", function(event) {
		 *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
		 *      });
		 * 
		 * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage
		 * scope.
		 *
		 * <b>Browser support</b>
		 * The event model in CreateJS can be used separately from the suite in any project, however the inheritance model
		 * requires modern browsers (IE9+).
		 *      
		 *
		 * @class EventDispatcher
		 * @constructor
		 **/
		function EventDispatcher() {
		
		
		// private properties:
			/**
			 * @protected
			 * @property _listeners
			 * @type Object
			 **/
			this._listeners = null;
			
			/**
			 * @protected
			 * @property _captureListeners
			 * @type Object
			 **/
			this._captureListeners = null;
		}
		var p = EventDispatcher.prototype;

		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.


	// static public methods:
		/**
		 * Static initializer to mix EventDispatcher methods into a target object or prototype.
		 * 
		 * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
		 * 		EventDispatcher.initialize(myObject); // add to a specific instance
		 * 
		 * @method initialize
		 * @static
		 * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
		 * prototype.
		 **/
		EventDispatcher.initialize = function(target) {
			target.addEventListener = p.addEventListener;
			target.on = p.on;
			target.removeEventListener = target.off =  p.removeEventListener;
			target.removeAllEventListeners = p.removeAllEventListeners;
			target.hasEventListener = p.hasEventListener;
			target.dispatchEvent = p.dispatchEvent;
			target._dispatchEvent = p._dispatchEvent;
			target.willTrigger = p.willTrigger;
		};
		

	// public methods:
		/**
		 * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
		 * multiple callbacks getting fired.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.addEventListener("click", handleClick);
		 *      function handleClick(event) {
		 *         // Click happened.
		 *      }
		 *
		 * @method addEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function | Object} Returns the listener for chaining or assignment.
		 **/
		p.addEventListener = function(type, listener, useCapture) {
			var listeners;
			if (useCapture) {
				listeners = this._captureListeners = this._captureListeners||{};
			} else {
				listeners = this._listeners = this._listeners||{};
			}
			var arr = listeners[type];
			if (arr) { this.removeEventListener(type, listener, useCapture); }
			arr = listeners[type]; // remove may have deleted the array
			if (!arr) { listeners[type] = [listener];  }
			else { arr.push(listener); }
			return listener;
		};
		
		/**
		 * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
		 * only run once, associate arbitrary data with the listener, and remove the listener.
		 * 
		 * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
		 * The wrapper function is returned for use with `removeEventListener` (or `off`).
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener, or use
		 * {{#crossLink "Event/remove"}}{{/crossLink}}. Likewise, each time you call `on` a NEW wrapper function is subscribed, so multiple calls
		 * to `on` with the same params will create multiple listeners.
		 * 
		 * <h4>Example</h4>
		 * 
		 * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
		 * 		function handleClick(evt, data) {
		 * 			data.count -= 1;
		 * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
		 * 			if (data.count == 0) {
		 * 				alert("clicked 3 times!");
		 * 				myBtn.off("click", listener);
		 * 				// alternately: evt.remove();
		 * 			}
		 * 		}
		 * 
		 * @method on
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
		 * the event is dispatched.
		 * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
		 * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
		 * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
		 * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
		 **/
		p.on = function(type, listener, scope, once, data, useCapture) {
			if (listener.handleEvent) {
				scope = scope||listener;
				listener = listener.handleEvent;
			}
			scope = scope||this;
			return this.addEventListener(type, function(evt) {
					listener.call(scope, evt, data);
					once&&evt.remove();
				}, useCapture);
		};

		/**
		 * Removes the specified event listener.
		 *
		 * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
		 * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
		 * closure will not work.
		 *
		 * <h4>Example</h4>
		 *
		 *      displayObject.removeEventListener("click", handleClick);
		 *
		 * @method removeEventListener
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.removeEventListener = function(type, listener, useCapture) {
			var listeners = useCapture ? this._captureListeners : this._listeners;
			if (!listeners) { return; }
			var arr = listeners[type];
			if (!arr) { return; }
			for (var i=0,l=arr.length; i<l; i++) {
				if (arr[i] == listener) {
					if (l==1) { delete(listeners[type]); } // allows for faster checks.
					else { arr.splice(i,1); }
					break;
				}
			}
		};
		
		/**
		 * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
		 * .on method.
		 * 
		 * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper function as the listener. See 
		 * {{#crossLink "EventDispatcher/on"}}{{/crossLink}} for an example.
		 *
		 * @method off
		 * @param {String} type The string type of the event.
		 * @param {Function | Object} listener The listener function or object.
		 * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
		 **/
		p.off = p.removeEventListener;

		/**
		 * Removes all listeners for the specified type, or all listeners of all types.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Remove all listeners
		 *      displayObject.removeAllEventListeners();
		 *
		 *      // Remove all click listeners
		 *      displayObject.removeAllEventListeners("click");
		 *
		 * @method removeAllEventListeners
		 * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
		 **/
		p.removeAllEventListeners = function(type) {
			if (!type) { this._listeners = this._captureListeners = null; }
			else {
				if (this._listeners) { delete(this._listeners[type]); }
				if (this._captureListeners) { delete(this._captureListeners[type]); }
			}
		};

		/**
		 * Dispatches the specified event to all listeners.
		 *
		 * <h4>Example</h4>
		 *
		 *      // Use a string event
		 *      this.dispatchEvent("complete");
		 *
		 *      // Use an Event instance
		 *      var event = new createjs.Event("progress");
		 *      this.dispatchEvent(event);
		 *
		 * @method dispatchEvent
		 * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
		 * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
		 * dispatchEvent will construct an Event instance if necessary with the specified type. This latter approach can
		 * be used to avoid event object instantiation for non-bubbling events that may not have any listeners.
		 * @param {Boolean} [bubbles] Specifies the `bubbles` value when a string was passed to eventObj.
		 * @param {Boolean} [cancelable] Specifies the `cancelable` value when a string was passed to eventObj.
		 * @return {Boolean} Returns false if `preventDefault()` was called on a cancelable event, true otherwise.
		 **/
		p.dispatchEvent = function(eventObj, bubbles, cancelable) {
			if (typeof eventObj == "string") {
				// skip everything if there's no listeners and it doesn't bubble:
				var listeners = this._listeners;
				if (!bubbles && (!listeners || !listeners[eventObj])) { return true; }
				eventObj = new createjs.Event(eventObj, bubbles, cancelable);
			} else if (eventObj.target && eventObj.clone) {
				// redispatching an active event object, so clone it:
				eventObj = eventObj.clone();
			}
			
			// TODO: it would be nice to eliminate this. Maybe in favour of evtObj instanceof Event? Or !!evtObj.createEvent
			try { eventObj.target = this; } catch (e) {} // try/catch allows redispatching of native events

			if (!eventObj.bubbles || !this.parent) {
				this._dispatchEvent(eventObj, 2);
			} else {
				var top=this, list=[top];
				while (top.parent) { list.push(top = top.parent); }
				var i, l=list.length;

				// capture & atTarget
				for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
					list[i]._dispatchEvent(eventObj, 1+(i==0));
				}
				// bubbling
				for (i=1; i<l && !eventObj.propagationStopped; i++) {
					list[i]._dispatchEvent(eventObj, 3);
				}
			}
			return !eventObj.defaultPrevented;
		};

		/**
		 * Indicates whether there is at least one listener for the specified event type.
		 * @method hasEventListener
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns true if there is at least one listener for the specified event.
		 **/
		p.hasEventListener = function(type) {
			var listeners = this._listeners, captureListeners = this._captureListeners;
			return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
		};
		
		/**
		 * Indicates whether there is at least one listener for the specified event type on this object or any of its
		 * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
		 * specified type is dispatched from this object, it will trigger at least one listener.
		 * 
		 * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
		 * event flow for a listener, not just this object.
		 * @method willTrigger
		 * @param {String} type The string type of the event.
		 * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
		 **/
		p.willTrigger = function(type) {
			var o = this;
			while (o) {
				if (o.hasEventListener(type)) { return true; }
				o = o.parent;
			}
			return false;
		};

		/**
		 * @method toString
		 * @return {String} a string representation of the instance.
		 **/
		p.toString = function() {
			return "[EventDispatcher]";
		};


	// private methods:
		/**
		 * @method _dispatchEvent
		 * @param {Object | String | Event} eventObj
		 * @param {Object} eventPhase
		 * @protected
		 **/
		p._dispatchEvent = function(eventObj, eventPhase) {
			var l, listeners = (eventPhase==1) ? this._captureListeners : this._listeners;
			if (eventObj && listeners) {
				var arr = listeners[eventObj.type];
				if (!arr||!(l=arr.length)) { return; }
				try { eventObj.currentTarget = this; } catch (e) {}
				try { eventObj.eventPhase = eventPhase; } catch (e) {}
				eventObj.removed = false;
				
				arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
				for (var i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
					var o = arr[i];
					if (o.handleEvent) { o.handleEvent(eventObj); }
					else { o(eventObj); }
					if (eventObj.removed) {
						this.off(eventObj.type, o, eventPhase==1);
						eventObj.removed = false;
					}
				}
			}
		};


		createjs.EventDispatcher = EventDispatcher;
	}());

	//##############################################################################
	// ProgressEvent.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function (scope) {
		"use strict";

		// constructor
		/**
		 * A CreateJS {{#crossLink "Event"}}{{/crossLink}} that is dispatched when progress changes.
		 * @class ProgressEvent
		 * @param {Number} loaded The amount that has been loaded. This can be any number relative to the total.
		 * @param {Number} [total=1] The total amount that will load. This will default to 1, so if the `loaded` value is
		 * a percentage (between 0 and 1), it can be omitted.
		 * @todo Consider having this event be a "fileprogress" event as well
		 * @constructor
		 */
		function ProgressEvent(loaded, total) {
			this.Event_constructor("progress");

			/**
			 * The amount that has been loaded (out of a total amount)
			 * @property loaded
			 * @type {Number}
			 */
			this.loaded = loaded;

			/**
			 * The total "size" of the load.
			 * @property total
			 * @type {Number}
			 * @default 1
			 */
			this.total = (total == null) ? 1 : total;

			/**
			 * The percentage (out of 1) that the load has been completed. This is calculated using `loaded/total`.
			 * @property progress
			 * @type {Number}
			 * @default 0
			 */
			this.progress = (total == 0) ? 0 : this.loaded / this.total;
		};

		var p = createjs.extend(ProgressEvent, createjs.Event);

		/**
		 * Returns a clone of the ProgressEvent instance.
		 * @method clone
		 * @return {ProgressEvent} a clone of the Event instance.
		 **/
		p.clone = function() {
			return new createjs.ProgressEvent(this.loaded, this.total);
		};

		createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");

	}(window));

	//##############################################################################
	// json3.js
	//##############################################################################

	/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(4);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);

	//##############################################################################
	// DomUtils.js
	//##############################################################################

	(function () {

		/**
		 * A few utilities for interacting with the dom.
		 * @class DomUtils
		 */
		var s = {};

		s.appendToHead = function (el) {
			s.getHead().appendChild(el)
		}

		s.getHead = function () {
			return document.head || document.getElementsByTagName("head")[0];
		}

		s.getBody = function () {
			return document.body || document.getElementsByTagName("body")[0];
		}

		createjs.DomUtils = s;

	}());

	//##############################################################################
	// DataUtils.js
	//##############################################################################

	(function () {

		/**
		 * A few data utilities for formatting different data types.
		 * @class DataUtils
		 */
		var s = {};

		// static methods
		/**
		 * Parse XML using the DOM. This is required when preloading XML or SVG.
		 * @method parseXML
		 * @param {String} text The raw text or XML that is loaded by XHR.
		 * @param {String} type The mime type of the XML. Use "text/xml" for XML, and  "image/svg+xml" for SVG parsing.
		 * @return {XML} An XML document
		 * @static
		 */
		s.parseXML = function (text, type) {
			var xml = null;
			// CocoonJS does not support XML parsing with either method.

			// Most browsers will use DOMParser
			// IE fails on certain SVG files, so we have a fallback below.
			try {
				if (window.DOMParser) {
					var parser = new DOMParser();
					xml = parser.parseFromString(text, type);
				}
			} catch (e) {
			}

			// Fallback for IE support.
			if (!xml) {
				try {
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = false;
					xml.loadXML(text);
				} catch (e) {
					xml = null;
				}
			}

			return xml;
		};

		/**
		 * Parse a string into an Object.
		 * @method parseJSON
		 * @param {String} value The loaded JSON string
		 * @returns {Object} A JavaScript object.
		 */
		s.parseJSON = function (value) {
			if (value == null) {
				return null;
			}

			try {
				return JSON.parse(value);
			} catch (e) {
				// TODO; Handle this with a custom error?
				throw e;
			}
		};

		createjs.DataUtils = s;

	}());

	//##############################################################################
	// LoadItem.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		/**
		 * All loaders accept an item containing the properties defined in this class. If a raw object is passed instead,
		 * it will not be affected, but it must contain at least a {{#crossLink "src:property"}}{{/crossLink}} property. A
		 * string path or HTML tag is also acceptable, but it will be automatically converted to a LoadItem using the
		 * {{#crossLink "create"}}{{/crossLink}} method by {{#crossLink "AbstractLoader"}}{{/crossLink}}
		 * @class LoadItem
		 * @constructor
		 * @since 0.6.0
		 */
		function LoadItem() {
			/**
			 * The source of the file that is being loaded. This property is <b>required</b>. The source can either be a
			 * string (recommended), or an HTML tag.
			 * This can also be an object, but in that case it has to include a type and be handled by a plugin.
			 * @property src
			 * @type {String}
			 * @default null
			 */
			this.src = null;

			/**
			 * The type file that is being loaded. The type of the file is usually inferred by the extension, but can also
			 * be set manually. This is helpful in cases where a file does not have an extension.
			 * @property type
			 * @type {String}
			 * @default null
			 */
			this.type = null;

			/**
			 * A string identifier which can be used to reference the loaded object. If none is provided, this will be
			 * automatically set to the {{#crossLink "src:property"}}{{/crossLink}}.
			 * @property id
			 * @type {String}
			 * @default null
			 */
			this.id = null;

			/**
			 * Determines if a manifest will maintain the order of this item, in relation to other items in the manifest
			 * that have also set the `maintainOrder` property to `true`. This only applies when the max connections has
			 * been set above 1 (using {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}). Everything with this
			 * property set to `false` will finish as it is loaded. Ordered items are combined with script tags loading in
			 * order when {{#crossLink "LoadQueue/maintainScriptOrder:property"}}{{/crossLink}} is set to `true`.
			 * @property maintainOrder
			 * @type {Boolean}
			 * @default false
			 */
			this.maintainOrder = false;

			/**
			 * A callback used by JSONP requests that defines what global method to call when the JSONP content is loaded.
			 * @property callback
			 * @type {String}
			 * @default null
			 */
			this.callback = null;

			/**
			 * An arbitrary data object, which is included with the loaded object.
			 * @property data
			 * @type {Object}
			 * @default null
			 */
			this.data = null;

			/**
			 * The request method used for HTTP calls. Both {{#crossLink "AbstractLoader/GET:property"}}{{/crossLink}} or
			 * {{#crossLink "AbstractLoader/POST:property"}}{{/crossLink}} request types are supported, and are defined as
			 * constants on {{#crossLink "AbstractLoader"}}{{/crossLink}}.
			 * @property method
			 * @type {String}
			 * @default get
			 */
			this.method = createjs.LoadItem.GET;

			/**
			 * An object hash of name/value pairs to send to the server.
			 * @property values
			 * @type {Object}
			 * @default null
			 */
			this.values = null;

			/**
			 * An object hash of headers to attach to an XHR request. PreloadJS will automatically attach some default
			 * headers when required, including "Origin", "Content-Type", and "X-Requested-With". You may override the
			 * default headers by including them in your headers object.
			 * @property headers
			 * @type {Object}
			 * @default null
			 */
			this.headers = null;

			/**
			 * Enable credentials for XHR requests.
			 * @property withCredentials
			 * @type {Boolean}
			 * @default false
			 */
			this.withCredentials = false;

			/**
			 * Set the mime type of XHR-based requests. This is automatically set to "text/plain; charset=utf-8" for text
			 * based files (json, xml, text, css, js).
			 * @property mimeType
			 * @type {String}
			 * @default null
			 */
			this.mimeType = null;

			/**
			 * Sets the crossOrigin attribute for CORS-enabled images loading cross-domain.
			 * @property crossOrigin
			 * @type {boolean}
			 * @default Anonymous
			 */
			this.crossOrigin = null;

			/**
			 * The duration in milliseconds to wait before a request times out. This only applies to tag-based and and XHR
			 * (level one) loading, as XHR (level 2) provides its own timeout event.
			 * @property loadTimeout
			 * @type {Number}
			 * @default 8000 (8 seconds)
			 */
			this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
		};

		var p = LoadItem.prototype = {};
		var s = LoadItem;

		/**
		 * Default duration in milliseconds to wait before a request times out. This only applies to tag-based and and XHR
		 * (level one) loading, as XHR (level 2) provides its own timeout event.
		 * @property LOAD_TIMEOUT_DEFAULT
		 * @type {number}
		 * @static
		 */
		s.LOAD_TIMEOUT_DEFAULT = 8000;

		/**
		 * Create a LoadItem.
		 * <ul>
		 *     <li>String-based items are converted to a LoadItem with a populated {{#crossLink "src:property"}}{{/crossLink}}.</li>
		 *     <li>LoadItem instances are returned as-is</li>
		 *     <li>Objects are returned with any needed properties added</li>
		 * </ul>
		 * @method create
		 * @param {LoadItem|String|Object} value The load item value
		 * @returns {LoadItem|Object}
		 * @static
		 */
		s.create = function (value) {
			if (typeof value == "string") {
				var item = new LoadItem();
				item.src = value;
				return item;
			} else if (value instanceof s) {
				return value;
			} else if (value instanceof Object && value.src) {
				if (value.loadTimeout == null) {
					value.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
				}
				return value;
			} else {
				throw new Error("Type not recognized.");
			}
		};

		/**
		 * Provides a chainable shortcut method for setting a number of properties on the instance.
		 *
		 * <h4>Example</h4>
		 *
		 *      var loadItem = new createjs.LoadItem().set({src:"image.png", maintainOrder:true});
		 *
		 * @method set
		 * @param {Object} props A generic object containing properties to copy to the LoadItem instance.
		 * @return {LoadItem} Returns the instance the method is called on (useful for chaining calls.)
		*/
		p.set = function(props) {
			for (var n in props) { this[n] = props[n]; }
			return this;
		};

		createjs.LoadItem = s;

	}());

	//##############################################################################
	// RequestUtils.js
	//##############################################################################

	(function () {

		/**
		 * Utilities that assist with parsing load items, and determining file types, etc.
		 * @class RequestUtils
		 */
		var s = {};

		/**
		 * The Regular Expression used to test file URLS for an absolute path.
		 * @property ABSOLUTE_PATH
		 * @type {RegExp}
		 * @static
		 */
		s.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i;

		/**
		 * The Regular Expression used to test file URLS for a relative path.
		 * @property RELATIVE_PATH
		 * @type {RegExp}
		 * @static
		 */
		s.RELATIVE_PATT = (/^[./]*?\//i);

		/**
		 * The Regular Expression used to test file URLS for an extension. Note that URIs must already have the query string
		 * removed.
		 * @property EXTENSION_PATT
		 * @type {RegExp}
		 * @static
		 */
		s.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;

		/**
		 * Parse a file path to determine the information we need to work with it. Currently, PreloadJS needs to know:
		 * <ul>
		 *     <li>If the path is absolute. Absolute paths start with a protocol (such as `http://`, `file://`, or
		 *     `//networkPath`)</li>
		 *     <li>If the path is relative. Relative paths start with `../` or `/path` (or similar)</li>
		 *     <li>The file extension. This is determined by the filename with an extension. Query strings are dropped, and
		 *     the file path is expected to follow the format `name.ext`.</li>
		 * </ul>
		 * @method parseURI
		 * @param {String} path
		 * @returns {Object} An Object with an `absolute` and `relative` Boolean values, as well as an optional 'extension`
		 * property, which is the lowercase extension.
		 * @static
		 */
		s.parseURI = function (path) {
			var info = {absolute: false, relative: false};
			if (path == null) { return info; }

			// Drop the query string
			var queryIndex = path.indexOf("?");
			if (queryIndex > -1) {
				path = path.substr(0, queryIndex);
			}

			// Absolute
			var match;
			if (s.ABSOLUTE_PATT.test(path)) {
				info.absolute = true;

				// Relative
			} else if (s.RELATIVE_PATT.test(path)) {
				info.relative = true;
			}

			// Extension
			if (match = path.match(s.EXTENSION_PATT)) {
				info.extension = match[1].toLowerCase();
			}
			return info;
		};

		/**
		 * Formats an object into a query string for either a POST or GET request.
		 * @method formatQueryString
		 * @param {Object} data The data to convert to a query string.
		 * @param {Array} [query] Existing name/value pairs to append on to this query.
		 * @static
		 */
		s.formatQueryString = function (data, query) {
			if (data == null) {
				throw new Error('You must specify data.');
			}
			var params = [];
			for (var n in data) {
				params.push(n + '=' + escape(data[n]));
			}
			if (query) {
				params = params.concat(query);
			}
			return params.join('&');
		};

		/**
		 * A utility method that builds a file path using a source and a data object, and formats it into a new path.
		 * @method buildPath
		 * @param {String} src The source path to add values to.
		 * @param {Object} [data] Object used to append values to this request as a query string. Existing parameters on the
		 * path will be preserved.
		 * @returns {string} A formatted string that contains the path and the supplied parameters.
		 * @static
		 */
		s.buildPath = function (src, data) {
			if (data == null) {
				return src;
			}

			var query = [];
			var idx = src.indexOf('?');

			if (idx != -1) {
				var q = src.slice(idx + 1);
				query = query.concat(q.split('&'));
			}

			if (idx != -1) {
				return src.slice(0, idx) + '?' + this.formatQueryString(data, query);
			} else {
				return src + '?' + this.formatQueryString(data, query);
			}
		};

		/**
		 * @method isCrossDomain
		 * @param {LoadItem|Object} item A load item with a `src` property.
		 * @return {Boolean} If the load item is loading from a different domain than the current location.
		 * @static
		 */
		s.isCrossDomain = function (item) {
			var target = document.createElement("a");
			target.href = item.src;

			var host = document.createElement("a");
			host.href = location.href;

			var crossdomain = (target.hostname != "") &&
							  (target.port != host.port ||
							   target.protocol != host.protocol ||
							   target.hostname != host.hostname);
			return crossdomain;
		};

		/**
		 * @method isLocal
		 * @param {LoadItem|Object} item A load item with a `src` property
		 * @return {Boolean} If the load item is loading from the "file:" protocol. Assume that the host must be local as
		 * well.
		 * @static
		 */
		s.isLocal = function (item) {
			var target = document.createElement("a");
			target.href = item.src;
			return target.hostname == "" && target.protocol == "file:";
		};

		/**
		 * Determine if a specific type should be loaded as a binary file. Currently, only images and items marked
		 * specifically as "binary" are loaded as binary. Note that audio is <b>not</b> a binary type, as we can not play
		 * back using an audio tag if it is loaded as binary. Plugins can change the item type to binary to ensure they get
		 * a binary result to work with. Binary files are loaded using XHR2. Types are defined as static constants on
		 * {{#crossLink "AbstractLoader"}}{{/crossLink}}.
		 * @method isBinary
		 * @param {String} type The item type.
		 * @return {Boolean} If the specified type is binary.
		 * @static
		 */
		s.isBinary = function (type) {
			switch (type) {
				case createjs.AbstractLoader.IMAGE:
				case createjs.AbstractLoader.BINARY:
					return true;
				default:
					return false;
			}
		};

		/**
		 * Check if item is a valid HTMLImageElement
		 * @method isImageTag
		 * @param {Object} item
		 * @returns {Boolean}
		 * @static
		 */
		s.isImageTag = function(item) {
			return item instanceof HTMLImageElement;
		};

		/**
		 * Check if item is a valid HTMLAudioElement
		 * @method isAudioTag
		 * @param {Object} item
		 * @returns {Boolean}
		 * @static
		 */
		s.isAudioTag = function(item) {
			if (window.HTMLAudioElement) {
				return item instanceof HTMLAudioElement;
			} else {
				return false;
			}
		};

		/**
		 * Check if item is a valid HTMLVideoElement
		 * @method isVideoTag
		 * @param {Object} item
		 * @returns {Boolean}
		 * @static
		 */
		s.isVideoTag = function(item) {
			if (window.HTMLVideoElement) {
				return item instanceof HTMLVideoElement;
			} else {
				return false;
			}
		};

		/**
		 * Determine if a specific type is a text-based asset, and should be loaded as UTF-8.
		 * @method isText
		 * @param {String} type The item type.
		 * @return {Boolean} If the specified type is text.
		 * @static
		 */
		s.isText = function (type) {
			switch (type) {
				case createjs.AbstractLoader.TEXT:
				case createjs.AbstractLoader.JSON:
				case createjs.AbstractLoader.MANIFEST:
				case createjs.AbstractLoader.XML:
				case createjs.AbstractLoader.CSS:
				case createjs.AbstractLoader.SVG:
				case createjs.AbstractLoader.JAVASCRIPT:
				case createjs.AbstractLoader.SPRITESHEET:
					return true;
				default:
					return false;
			}
		};

		/**
		 * Determine the type of the object using common extensions. Note that the type can be passed in with the load item
		 * if it is an unusual extension.
		 * @method getTypeByExtension
		 * @param {String} extension The file extension to use to determine the load type.
		 * @return {String} The determined load type (for example, <code>AbstractLoader.IMAGE</code>). Will return `null` if
		 * the type can not be determined by the extension.
		 * @static
		 */
		s.getTypeByExtension = function (extension) {
			if (extension == null) {
				return createjs.AbstractLoader.TEXT;
			}

			switch (extension.toLowerCase()) {
				case "jpeg":
				case "jpg":
				case "gif":
				case "png":
				case "webp":
				case "bmp":
					return createjs.AbstractLoader.IMAGE;
				case "ogg":
				case "mp3":
				case "webm":
					return createjs.AbstractLoader.SOUND;
				case "mp4":
				case "webm":
				case "ts":
					return createjs.AbstractLoader.VIDEO;
				case "json":
					return createjs.AbstractLoader.JSON;
				case "xml":
					return createjs.AbstractLoader.XML;
				case "css":
					return createjs.AbstractLoader.CSS;
				case "js":
					return createjs.AbstractLoader.JAVASCRIPT;
				case 'svg':
					return createjs.AbstractLoader.SVG;
				default:
					return createjs.AbstractLoader.TEXT;
			}
		};

		createjs.RequestUtils = s;

	}());

	//##############################################################################
	// AbstractLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

	// constructor
		/**
		 * The base loader, which defines all the generic methods, properties, and events. All loaders extend this class,
		 * including the {{#crossLink "LoadQueue"}}{{/crossLink}}.
		 * @class AbstractLoader
		 * @param {LoadItem|object|string} loadItem The item to be loaded.
		 * @param {Boolean} [preferXHR] Determines if the LoadItem should <em>try</em> and load using XHR, or take a
		 * tag-based approach, which can be better in cross-domain situations. Not all loaders can load using one or the
		 * other, so this is a suggested directive.
		 * @param {String} [type] The type of loader. Loader types are defined as constants on the AbstractLoader class,
		 * such as {{#crossLink "IMAGE:property"}}{{/crossLink}}, {{#crossLink "CSS:property"}}{{/crossLink}}, etc.
		 * @extends EventDispatcher
		 */
		function AbstractLoader(loadItem, preferXHR, type) {
			this.EventDispatcher_constructor();

			// public properties
			/**
			 * If the loader has completed loading. This provides a quick check, but also ensures that the different approaches
			 * used for loading do not pile up resulting in more than one `complete` {{#crossLink "Event"}}{{/crossLink}}.
			 * @property loaded
			 * @type {Boolean}
			 * @default false
			 */
			this.loaded = false;

			/**
			 * Determine if the loader was canceled. Canceled loads will not fire complete events. Note that this property
			 * is readonly, so {{#crossLink "LoadQueue"}}{{/crossLink}} queues should be closed using {{#crossLink "LoadQueue/close"}}{{/crossLink}}
			 * instead.
			 * @property canceled
			 * @type {Boolean}
			 * @default false
			 * @readonly
			 */
			this.canceled = false;

			/**
			 * The current load progress (percentage) for this item. This will be a number between 0 and 1.
			 *
			 * <h4>Example</h4>
			 *
			 *     var queue = new createjs.LoadQueue();
			 *     queue.loadFile("largeImage.png");
			 *     queue.on("progress", function() {
			 *         console.log("Progress:", queue.progress, event.progress);
			 *     });
			 *
			 * @property progress
			 * @type {Number}
			 * @default 0
			 */
			this.progress = 0;

			/**
			 * The type of item this loader will load. See {{#crossLink "AbstractLoader"}}{{/crossLink}} for a full list of
			 * supported types.
			 * @property type
			 * @type {String}
			 */
			this.type = type;

			/**
			 * A formatter function that converts the loaded raw result into the final result. For example, the JSONLoader
			 * converts a string of text into a JavaScript object. Not all loaders have a resultFormatter, and this property
			 * can be overridden to provide custom formatting.
			 *
			 * Optionally, a resultFormatter can return a callback function in cases where the formatting needs to be
			 * asynchronous, such as creating a new image. The callback function is passed 2 parameters, which are callbacks
			 * to handle success and error conditions in the resultFormatter. Note that the resultFormatter method is
			 * called in the current scope, as well as the success and error callbacks.
			 *
			 * <h4>Example asynchronous resultFormatter</h4>
			 *
			 * 	function _formatResult(loader) {
			 * 		return function(success, error) {
			 * 			if (errorCondition) { error(errorDetailEvent); }
			 * 			success(result);
			 * 		}
			 * 	}
			 * @property resultFormatter
			 * @type {Function}
			 * @default null
			 */
			this.resultFormatter = null;

			// protected properties
			/**
			 * The {{#crossLink "LoadItem"}}{{/crossLink}} this loader represents. Note that this is null in a {{#crossLink "LoadQueue"}}{{/crossLink}},
			 * but will be available on loaders such as {{#crossLink "XMLLoader"}}{{/crossLink}} and {{#crossLink "ImageLoader"}}{{/crossLink}}.
			 * @property _item
			 * @type {LoadItem|Object}
			 * @private
			 */
			if (loadItem) {
				this._item = createjs.LoadItem.create(loadItem);
			} else {
				this._item = null;
			}

			/**
			 * Whether the loader will try and load content using XHR (true) or HTML tags (false).
			 * @property _preferXHR
			 * @type {Boolean}
			 * @private
			 */
			this._preferXHR = preferXHR;

			/**
			 * The loaded result after it is formatted by an optional {{#crossLink "resultFormatter"}}{{/crossLink}}. For
			 * items that are not formatted, this will be the same as the {{#crossLink "_rawResult:property"}}{{/crossLink}}.
			 * The result is accessed using the {{#crossLink "getResult"}}{{/crossLink}} method.
			 * @property _result
			 * @type {Object|String}
			 * @private
			 */
			this._result = null;

			/**
			 * The loaded result before it is formatted. The rawResult is accessed using the {{#crossLink "getResult"}}{{/crossLink}}
			 * method, and passing `true`.
			 * @property _rawResult
			 * @type {Object|String}
			 * @private
			 */
			this._rawResult = null;

			/**
			 * A list of items that loaders load behind the scenes. This does not include the main item the loader is
			 * responsible for loading. Examples of loaders that have sub-items include the {{#crossLink "SpriteSheetLoader"}}{{/crossLink}} and
			 * {{#crossLink "ManifestLoader"}}{{/crossLink}}.
			 * @property _loadItems
			 * @type {null}
			 * @protected
			 */
			this._loadedItems = null;

			/**
			 * The attribute the items loaded using tags use for the source.
			 * @type {string}
			 * @default null
			 * @private
			 */
			this._tagSrcAttribute = null;

			/**
			 * An HTML tag (or similar) that a loader may use to load HTML content, such as images, scripts, etc.
			 * @property _tag
			 * @type {Object}
			 * @private
			 */
			this._tag = null;
		};

		var p = createjs.extend(AbstractLoader, createjs.EventDispatcher);
		var s = AbstractLoader;

		// TODO: deprecated
		// p.initialize = function() {}; // searchable for devs wondering where it is. REMOVED. See docs for details.


		/**
		 * Defines a POST request, use for a method value when loading data.
		 * @property POST
		 * @type {string}
		 * @default post
		 * @static
		 */
		s.POST = "POST";

		/**
		 * Defines a GET request, use for a method value when loading data.
		 * @property GET
		 * @type {string}
		 * @default get
		 * @static
		 */
		s.GET = "GET";

		/**
		 * The preload type for generic binary types. Note that images are loaded as binary files when using XHR.
		 * @property BINARY
		 * @type {String}
		 * @default binary
		 * @static
		 * @since 0.6.0
		 */
		s.BINARY = "binary";

		/**
		 * The preload type for css files. CSS files are loaded using a &lt;link&gt; when loaded with XHR, or a
		 * &lt;style&gt; tag when loaded with tags.
		 * @property CSS
		 * @type {String}
		 * @default css
		 * @static
		 * @since 0.6.0
		 */
		s.CSS = "css";

		/**
		 * The preload type for image files, usually png, gif, or jpg/jpeg. Images are loaded into an &lt;image&gt; tag.
		 * @property IMAGE
		 * @type {String}
		 * @default image
		 * @static
		 * @since 0.6.0
		 */
		s.IMAGE = "image";

		/**
		 * The preload type for javascript files, usually with the "js" file extension. JavaScript files are loaded into a
		 * &lt;script&gt; tag.
		 *
		 * Since version 0.4.1+, due to how tag-loaded scripts work, all JavaScript files are automatically injected into
		 * the body of the document to maintain parity between XHR and tag-loaded scripts. In version 0.4.0 and earlier,
		 * only tag-loaded scripts are injected.
		 * @property JAVASCRIPT
		 * @type {String}
		 * @default javascript
		 * @static
		 * @since 0.6.0
		 */
		s.JAVASCRIPT = "javascript";

		/**
		 * The preload type for json files, usually with the "json" file extension. JSON data is loaded and parsed into a
		 * JavaScript object. Note that if a `callback` is present on the load item, the file will be loaded with JSONP,
		 * no matter what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}} property is set to, and the JSON
		 * must contain a matching wrapper function.
		 * @property JSON
		 * @type {String}
		 * @default json
		 * @static
		 * @since 0.6.0
		 */
		s.JSON = "json";

		/**
		 * The preload type for jsonp files, usually with the "json" file extension. JSON data is loaded and parsed into a
		 * JavaScript object. You are required to pass a callback parameter that matches the function wrapper in the JSON.
		 * Note that JSONP will always be used if there is a callback present, no matter what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}}
		 * property is set to.
		 * @property JSONP
		 * @type {String}
		 * @default jsonp
		 * @static
		 * @since 0.6.0
		 */
		s.JSONP = "jsonp";

		/**
		 * The preload type for json-based manifest files, usually with the "json" file extension. The JSON data is loaded
		 * and parsed into a JavaScript object. PreloadJS will then look for a "manifest" property in the JSON, which is an
		 * Array of files to load, following the same format as the {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}
		 * method. If a "callback" is specified on the manifest object, then it will be loaded using JSONP instead,
		 * regardless of what the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}} property is set to.
		 * @property MANIFEST
		 * @type {String}
		 * @default manifest
		 * @static
		 * @since 0.6.0
		 */
		s.MANIFEST = "manifest";

		/**
		 * The preload type for sound files, usually mp3, ogg, or wav. When loading via tags, audio is loaded into an
		 * &lt;audio&gt; tag.
		 * @property SOUND
		 * @type {String}
		 * @default sound
		 * @static
		 * @since 0.6.0
		 */
		s.SOUND = "sound";

		/**
		 * The preload type for video files, usually mp4, ts, or ogg. When loading via tags, video is loaded into an
		 * &lt;video&gt; tag.
		 * @property VIDEO
		 * @type {String}
		 * @default video
		 * @static
		 * @since 0.6.0
		 */
		s.VIDEO = "video";

		/**
		 * The preload type for SpriteSheet files. SpriteSheet files are JSON files that contain string image paths.
		 * @property SPRITESHEET
		 * @type {String}
		 * @default spritesheet
		 * @static
		 * @since 0.6.0
		 */
		s.SPRITESHEET = "spritesheet";

		/**
		 * The preload type for SVG files.
		 * @property SVG
		 * @type {String}
		 * @default svg
		 * @static
		 * @since 0.6.0
		 */
		s.SVG = "svg";

		/**
		 * The preload type for text files, which is also the default file type if the type can not be determined. Text is
		 * loaded as raw text.
		 * @property TEXT
		 * @type {String}
		 * @default text
		 * @static
		 * @since 0.6.0
		 */
		s.TEXT = "text";

		/**
		 * The preload type for xml files. XML is loaded into an XML document.
		 * @property XML
		 * @type {String}
		 * @default xml
		 * @static
		 * @since 0.6.0
		 */
		s.XML = "xml";

	// Events
		/**
		 * The {{#crossLink "ProgressEvent"}}{{/crossLink}} that is fired when the overall progress changes. Prior to
		 * version 0.6.0, this was just a regular {{#crossLink "Event"}}{{/crossLink}}.
		 * @event progress
		 * @since 0.3.0
		 */

		/**
		 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when a load starts.
		 * @event loadstart
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @since 0.3.1
		 */

		/**
		 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when the entire queue has been loaded.
		 * @event complete
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @since 0.3.0
		 */

		/**
		 * The {{#crossLink "ErrorEvent"}}{{/crossLink}} that is fired when the loader encounters an error. If the error was
		 * encountered by a file, the event will contain the item that caused the error. Prior to version 0.6.0, this was
		 * just a regular {{#crossLink "Event"}}{{/crossLink}}.
		 * @event error
		 * @since 0.3.0
		 */

		/**
		 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when the loader encounters an internal file load error.
		 * This enables loaders to maintain internal queues, and surface file load errors.
		 * @event fileerror
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The even type ("fileerror")
		 * @param {LoadItem|object} The item that encountered the error
		 * @since 0.6.0
		 */

		/**
		 * The {{#crossLink "Event"}}{{/crossLink}} that is fired when a loader internally loads a file. This enables
		 * loaders such as {{#crossLink "ManifestLoader"}}{{/crossLink}} to maintain internal {{#crossLink "LoadQueue"}}{{/crossLink}}s
		 * and notify when they have loaded a file. The {{#crossLink "LoadQueue"}}{{/crossLink}} class dispatches a
		 * slightly different {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event.
		 * @event fileload
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type ("fileload")
		 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
		 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
		 * object will contain that value as a `src` property.
		 * @param {Object} result The HTML tag or parsed result of the loaded item.
		 * @param {Object} rawResult The unprocessed result, usually the raw text or binary data before it is converted
		 * to a usable object.
		 * @since 0.6.0
		 */

		/**
		 * The {{#crossLink "Event"}}{{/crossLink}} that is fired after the internal request is created, but before a load.
		 * This allows updates to the loader for specific loading needs, such as binary or XHR image loading.
		 * @event initialize
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type ("initialize")
		 * @param {AbstractLoader} loader The loader that has been initialized.
		 */


		/**
		 * Get a reference to the manifest item that is loaded by this loader. In some cases this will be the value that was
		 * passed into {{#crossLink "LoadQueue"}}{{/crossLink}} using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or
		 * {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}. However if only a String path was passed in, then it will
		 * be a {{#crossLink "LoadItem"}}{{/crossLink}}.
		 * @method getItem
		 * @return {Object} The manifest item that this loader is responsible for loading.
		 * @since 0.6.0
		 */
		p.getItem = function () {
			return this._item;
		};

		/**
		 * Get a reference to the content that was loaded by the loader (only available after the {{#crossLink "complete:event"}}{{/crossLink}}
		 * event is dispatched.
		 * @method getResult
		 * @param {Boolean} [raw=false] Determines if the returned result will be the formatted content, or the raw loaded
		 * data (if it exists).
		 * @return {Object}
		 * @since 0.6.0
		 */
		p.getResult = function (raw) {
			return raw ? this._rawResult : this._result;
		};

		/**
		 * Return the `tag` this object creates or uses for loading.
		 * @method getTag
		 * @return {Object} The tag instance
		 * @since 0.6.0
		 */
		p.getTag = function () {
			return this._tag;
		};

		/**
		 * Set the `tag` this item uses for loading.
		 * @method setTag
		 * @param {Object} tag The tag instance
		 * @since 0.6.0
		 */
		p.setTag = function(tag) {
		  this._tag = tag;
		};

		/**
		 * Begin loading the item. This method is required when using a loader by itself.
		 *
		 * <h4>Example</h4>
		 *
		 *      var queue = new createjs.LoadQueue();
		 *      queue.on("complete", handleComplete);
		 *      queue.loadManifest(fileArray, false); // Note the 2nd argument that tells the queue not to start loading yet
		 *      queue.load();
		 *
		 * @method load
		 */
		p.load = function () {
			this._createRequest();

			this._request.on("complete", this, this);
			this._request.on("progress", this, this);
			this._request.on("loadStart", this, this);
			this._request.on("abort", this, this);
			this._request.on("timeout", this, this);
			this._request.on("error", this, this);

			var evt = new createjs.Event("initialize");
			evt.loader = this._request;
			this.dispatchEvent(evt);

			this._request.load();
		};

		/**
		 * Close the the item. This will stop any open requests (although downloads using HTML tags may still continue in
		 * the background), but events will not longer be dispatched.
		 * @method cancel
		 */
		p.cancel = function () {
			this.canceled = true;
			this.destroy();
		};

		/**
		 * Clean up the loader.
		 * @method destroy
		 */
		p.destroy = function() {
			if (this._request) {
				this._request.removeAllEventListeners();
				this._request.destroy();
			}

			this._request = null;

			this._item = null;
			this._rawResult = null;
			this._result = null;

			this._loadItems = null;

			this.removeAllEventListeners();
		};

		/**
		 * Get any items loaded internally by the loader. The enables loaders such as {{#crossLink "ManifestLoader"}}{{/crossLink}}
		 * to expose items it loads internally.
		 * @method getLoadedItems
		 * @return {Array} A list of the items loaded by the loader.
		 * @since 0.6.0
		 */
		p.getLoadedItems = function () {
			return this._loadedItems;
		};


		// Private methods
		/**
		 * Create an internal request used for loading. By default, an {{#crossLink "XHRRequest"}}{{/crossLink}} or
		 * {{#crossLink "TagRequest"}}{{/crossLink}} is created, depending on the value of {{#crossLink "preferXHR:property"}}{{/crossLink}}.
		 * Other loaders may override this to use different request types, such as {{#crossLink "ManifestLoader"}}{{/crossLink}},
		 * which uses {{#crossLink "JSONLoader"}}{{/crossLink}} or {{#crossLink "JSONPLoader"}}{{/crossLink}} under the hood.
		 * @method _createRequest
		 * @protected
		 */
		p._createRequest = function() {
			if (!this._preferXHR) {
				this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
			} else {
				this._request = new createjs.XHRRequest(this._item);
			}
		};

		/**
		 * Create the HTML tag used for loading. This method does nothing by default, and needs to be implemented
		 * by loaders that require tag loading.
		 * @method _createTag
		 * @param {String} src The tag source
		 * @return {HTMLElement} The tag that was created
		 * @protected
		 */
		p._createTag = function(src) { return null; };

		/**
		 * Dispatch a loadstart {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "AbstractLoader/loadstart:event"}}{{/crossLink}}
		 * event for details on the event payload.
		 * @method _sendLoadStart
		 * @protected
		 */
		p._sendLoadStart = function () {
			if (this._isCanceled()) { return; }
			this.dispatchEvent("loadstart");
		};

		/**
		 * Dispatch a {{#crossLink "ProgressEvent"}}{{/crossLink}}.
		 * @method _sendProgress
		 * @param {Number | Object} value The progress of the loaded item, or an object containing <code>loaded</code>
		 * and <code>total</code> properties.
		 * @protected
		 */
		p._sendProgress = function (value) {
			if (this._isCanceled()) { return; }
			var event = null;
			if (typeof(value) == "number") {
				this.progress = value;
				event = new createjs.ProgressEvent(this.progress);
			} else {
				event = value;
				this.progress = value.loaded / value.total;
				event.progress = this.progress;
				if (isNaN(this.progress) || this.progress == Infinity) { this.progress = 0; }
			}
			this.hasEventListener("progress") && this.dispatchEvent(event);
		};

		/**
		 * Dispatch a complete {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}} event
		 * @method _sendComplete
		 * @protected
		 */
		p._sendComplete = function () {
			if (this._isCanceled()) { return; }

			this.loaded = true;

			var event = new createjs.Event("complete");
			event.rawResult = this._rawResult;

			if (this._result != null) {
				event.result = this._result;
			}

			this.dispatchEvent(event);
		};

		/**
		 * Dispatch an error {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "AbstractLoader/error:event"}}{{/crossLink}}
		 * event for details on the event payload.
		 * @method _sendError
		 * @param {ErrorEvent} event The event object containing specific error properties.
		 * @protected
		 */
		p._sendError = function (event) {
			if (this._isCanceled() || !this.hasEventListener("error")) { return; }
			if (event == null) {
				event = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY"); // TODO: Populate error
			}
			this.dispatchEvent(event);
		};

		/**
		 * Determine if the load has been canceled. This is important to ensure that method calls or asynchronous events
		 * do not cause issues after the queue has been cleaned up.
		 * @method _isCanceled
		 * @return {Boolean} If the loader has been canceled.
		 * @protected
		 */
		p._isCanceled = function () {
			if (window.createjs == null || this.canceled) {
				return true;
			}
			return false;
		};

		/**
		 * A custom result formatter function, which is called just before a request dispatches its complete event. Most
		 * loader types already have an internal formatter, but this can be user-overridden for custom formatting. The
		 * formatted result will be available on Loaders using {{#crossLink "getResult"}}{{/crossLink}}, and passing `true`.
		 * @property resultFormatter
		 * @type Function
		 * @return {Object} The formatted result
		 * @since 0.6.0
		 */
		p.resultFormatter = null;

		/**
		 * Handle events from internal requests. By default, loaders will handle, and redispatch the necessary events, but
		 * this method can be overridden for custom behaviours.
		 * @method handleEvent
		 * @param {Event} event The event that the internal request dispatches.
		 * @protected
		 * @since 0.6.0
		 */
		p.handleEvent = function (event) {
			switch (event.type) {
				case "complete":
					this._rawResult = event.target._response;
					var result = this.resultFormatter && this.resultFormatter(this);
					if (result instanceof Function) {
						result.call(this,
								createjs.proxy(this._resultFormatSuccess, this),
								createjs.proxy(this._resultFormatFailed, this)
						);
					} else {
						this._result =  result || this._rawResult;
						this._sendComplete();
					}
					break;
				case "progress":
					this._sendProgress(event);
					break;
				case "error":
					this._sendError(event);
					break;
				case "loadstart":
					this._sendLoadStart();
					break;
				case "abort":
				case "timeout":
					if (!this._isCanceled()) {
						this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + event.type.toUpperCase() + "_ERROR"));
					}
					break;
			}
		};

		/**
		 * The "success" callback passed to {{#crossLink "AbstractLoader/resultFormatter"}}{{/crossLink}} asynchronous
		 * functions.
		 * @method _resultFormatSuccess
		 * @param {Object} result The formatted result
		 * @private
		 */
		p._resultFormatSuccess = function (result) {
			this._result = result;
			this._sendComplete();
		};

		/**
		 * The "error" callback passed to {{#crossLink "AbstractLoader/resultFormatter"}}{{/crossLink}} asynchronous
		 * functions.
		 * @method _resultFormatSuccess
		 * @param {Object} error The error event
		 * @private
		 */
		p._resultFormatFailed = function (event) {
			this._sendError(event);
		};

		/**
		 * @method buildPath
		 * @protected
		 * @deprecated Use the {{#crossLink "RequestUtils"}}{{/crossLink}} method {{#crossLink "RequestUtils/buildPath"}}{{/crossLink}}
		 * instead.
		 */
		p.buildPath = function (src, data) {
			return createjs.RequestUtils.buildPath(src, data);
		};

		/**
		 * @method toString
		 * @return {String} a string representation of the instance.
		 */
		p.toString = function () {
			return "[PreloadJS AbstractLoader]";
		};

		createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");

	}());

	//##############################################################################
	// AbstractMediaLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * The AbstractMediaLoader is a base class that handles some of the shared methods and properties of loaders that
		 * handle HTML media elements, such as Video and Audio.
		 * @class AbstractMediaLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @param {String} type The type of media to load. Usually "video" or "audio".
		 * @extends AbstractLoader
		 * @constructor
		 */
		function AbstractMediaLoader(loadItem, preferXHR, type) {
			this.AbstractLoader_constructor(loadItem, preferXHR, type);

			// public properties
			this.resultFormatter = this._formatResult;

			// protected properties
			this._tagSrcAttribute = "src";

	        this.on("initialize", this._updateXHR, this);
		};

		var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);

		// static properties
		// public methods
		p.load = function () {
			// TagRequest will handle most of this, but Sound / Video need a few custom properties, so just handle them here.
			if (!this._tag) {
				this._tag = this._createTag(this._item.src);
			}

			this._tag.preload = "auto";
			this._tag.load();

			this.AbstractLoader_load();
		};

		// protected methods
		/**
		 * Creates a new tag for loading if it doesn't exist yet.
		 * @method _createTag
		 * @private
		 */
		p._createTag = function () {};


		p._createRequest = function() {
			if (!this._preferXHR) {
				this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
			} else {
				this._request = new createjs.XHRRequest(this._item);
			}
		};

	    // protected methods
	    /**
	     * Before the item loads, set its mimeType and responseType.
	     * @property _updateXHR
	     * @param {Event} event
	     * @private
	     */
	    p._updateXHR = function (event) {
	        // Only exists for XHR
	        if (event.loader.setResponseType) {
	            event.loader.setResponseType("blob");
	        }
	    };

		/**
		 * The result formatter for media files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {HTMLVideoElement|HTMLAudioElement}
		 * @private
		 */
		p._formatResult = function (loader) {
			this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
			this._tag.onstalled = null;
			if (this._preferXHR) {
	            var URL = window.URL || window.webkitURL;
	            var result = loader.getResult(true);

				loader.getTag().src = URL.createObjectURL(result);
			}
			return loader.getTag();
		};

		createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");

	}());

	//##############################################################################
	// AbstractRequest.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		/**
		 * A base class for actual data requests, such as {{#crossLink "XHRRequest"}}{{/crossLink}}, {{#crossLink "TagRequest"}}{{/crossLink}},
		 * and {{#crossLink "MediaRequest"}}{{/crossLink}}. PreloadJS loaders will typically use a data loader under the
		 * hood to get data.
		 * @class AbstractRequest
		 * @param {LoadItem} item
		 * @constructor
		 */
		var AbstractRequest = function (item) {
			this._item = item;
		};

		var p = createjs.extend(AbstractRequest, createjs.EventDispatcher);

		// public methods
		/**
		 * Begin a load.
		 * @method load
		 */
		p.load =  function() {};

		/**
		 * Clean up a request.
		 * @method destroy
		 */
		p.destroy = function() {};

		/**
		 * Cancel an in-progress request.
		 * @method cancel
		 */
		p.cancel = function() {};

		createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");

	}());

	//##############################################################################
	// TagRequest.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * An {{#crossLink "AbstractRequest"}}{{/crossLink}} that loads HTML tags, such as images and scripts.
		 * @class TagRequest
		 * @param {LoadItem} loadItem
		 * @param {HTMLElement} tag
		 * @param {String} srcAttribute The tag attribute that specifies the source, such as "src", "href", etc.
		 */
		function TagRequest(loadItem, tag, srcAttribute) {
			this.AbstractRequest_constructor(loadItem);

			// protected properties
			/**
			 * The HTML tag instance that is used to load.
			 * @property _tag
			 * @type {HTMLElement}
			 * @protected
			 */
			this._tag = tag;

			/**
			 * The tag attribute that specifies the source, such as "src", "href", etc.
			 * @property _tagSrcAttribute
			 * @type {String}
			 * @protected
			 */
			this._tagSrcAttribute = srcAttribute;

			/**
			 * A method closure used for handling the tag load event.
			 * @property _loadedHandler
			 * @type {Function}
			 * @private
			 */
			this._loadedHandler = createjs.proxy(this._handleTagComplete, this);

			/**
			 * Determines if the element was added to the DOM automatically by PreloadJS, so it can be cleaned up after.
			 * @property _addedToDOM
			 * @type {Boolean}
			 * @private
			 */
			this._addedToDOM = false;

			/**
			 * Determines what the tags initial style.visibility was, so we can set it correctly after a load.
			 *
			 * @type {null}
			 * @private
			 */
			this._startTagVisibility = null;
		};

		var p = createjs.extend(TagRequest, createjs.AbstractRequest);

		// public methods
		p.load = function () {
			this._tag.onload = createjs.proxy(this._handleTagComplete, this);
			this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
			this._tag.onerror = createjs.proxy(this._handleError, this);

			var evt = new createjs.Event("initialize");
			evt.loader = this._tag;

			this.dispatchEvent(evt);

			this._hideTag();

			this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);

			this._tag[this._tagSrcAttribute] = this._item.src;

			// wdg:: Append the tag AFTER setting the src, or SVG loading on iOS will fail.
			if (this._tag.parentNode == null) {
				window.document.body.appendChild(this._tag);
				this._addedToDOM = true;
			}
		};

		p.destroy = function() {
			this._clean();
			this._tag = null;

			this.AbstractRequest_destroy();
		};

		// private methods
		/**
		 * Handle the readyStateChange event from a tag. We need this in place of the `onload` callback (mainly SCRIPT
		 * and LINK tags), but other cases may exist.
		 * @method _handleReadyStateChange
		 * @private
		 */
		p._handleReadyStateChange = function () {
			clearTimeout(this._loadTimeout);
			// This is strictly for tags in browsers that do not support onload.
			var tag = this._tag;

			// Complete is for old IE support.
			if (tag.readyState == "loaded" || tag.readyState == "complete") {
				this._handleTagComplete();
			}
		};

		/**
		 * Handle any error events from the tag.
		 * @method _handleError
		 * @protected
		 */
		p._handleError = function() {
			this._clean();
			this.dispatchEvent("error");
		};

		/**
		 * Handle the tag's onload callback.
		 * @method _handleTagComplete
		 * @private
		 */
		p._handleTagComplete = function () {
			this._rawResult = this._tag;
			this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;

			this._clean();
			this._showTag();

			this.dispatchEvent("complete");
		};

		/**
		 * The tag request has not loaded within the time specified in loadTimeout.
		 * @method _handleError
		 * @param {Object} event The XHR error event.
		 * @private
		 */
		p._handleTimeout = function () {
			this._clean();
			this.dispatchEvent(new createjs.Event("timeout"));
		};

		/**
		 * Remove event listeners, but don't destroy the request object
		 * @method _clean
		 * @private
		 */
		p._clean = function() {
			this._tag.onload = null;
			this._tag.onreadystatechange = null;
			this._tag.onerror = null;
			if (this._addedToDOM && this._tag.parentNode != null) {
				this._tag.parentNode.removeChild(this._tag);
			}
			clearTimeout(this._loadTimeout);
		};

		p._hideTag = function() {
			this._startTagVisibility = this._tag.style.visibility;
			this._tag.style.visibility = "hidden";
		};

		p._showTag = function() {
			this._tag.style.visibility = this._startTagVisibility;
		};

		/**
		 * Handle a stalled audio event. The main place this happens is with HTMLAudio in Chrome when playing back audio
		 * that is already in a load, but not complete.
		 * @method _handleStalled
		 * @private
		 */
		p._handleStalled = function () {
			//Ignore, let the timeout take care of it. Sometimes its not really stopped.
		};

		createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");

	}());

	//##############################################################################
	// MediaTagRequest.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * An {{#crossLink "TagRequest"}}{{/crossLink}} that loads HTML tags for video and audio.
		 * @class MediaTagRequest
		 * @param {LoadItem} loadItem
		 * @param {HTMLAudioElement|HTMLVideoElement} tag
		 * @param {String} srcAttribute The tag attribute that specifies the source, such as "src", "href", etc.
		 * @constructor
		 */
		function MediaTagRequest(loadItem, tag, srcAttribute) {
			this.AbstractRequest_constructor(loadItem);

			// protected properties
			this._tag = tag;
			this._tagSrcAttribute = srcAttribute;
			this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
		};

		var p = createjs.extend(MediaTagRequest, createjs.TagRequest);
		var s = MediaTagRequest;

		// public methods
		p.load = function () {
			var sc = createjs.proxy(this._handleStalled, this);
			this._stalledCallback = sc;

			var pc = createjs.proxy(this._handleProgress, this);
			this._handleProgress = pc;

			this._tag.addEventListener("stalled", sc);
			this._tag.addEventListener("progress", pc);

			// This will tell us when audio is buffered enough to play through, but not when its loaded.
			// The tag doesn't keep loading in Chrome once enough has buffered, and we have decided that behaviour is sufficient.
			this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, false); // canplaythrough callback doesn't work in Chrome, so we use an event.

			this.TagRequest_load();
		};

		// private methods
		p._handleReadyStateChange = function () {
			clearTimeout(this._loadTimeout);
			// This is strictly for tags in browsers that do not support onload.
			var tag = this._tag;

			// Complete is for old IE support.
			if (tag.readyState == "loaded" || tag.readyState == "complete") {
				this._handleTagComplete();
			}
		};

		p._handleStalled = function () {
			//Ignore, let the timeout take care of it. Sometimes its not really stopped.
		};

		/**
		 * An XHR request has reported progress.
		 * @method _handleProgress
		 * @param {Object} event The XHR progress event.
		 * @private
		 */
		p._handleProgress = function (event) {
			if (!event || event.loaded > 0 && event.total == 0) {
				return; // Sometimes we get no "total", so just ignore the progress event.
			}

			var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
			this.dispatchEvent(newEvent);
		};

		// protected methods
		p._clean = function () {
			this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
			this._tag.removeEventListener("stalled", this._stalledCallback);
			this._tag.removeEventListener("progress", this._progressCallback);

			this.TagRequest__clean();
		};

		createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");

	}());

	//##############################################################################
	// XHRRequest.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

	// constructor
		/**
		 * A preloader that loads items using XHR requests, usually XMLHttpRequest. However XDomainRequests will be used
		 * for cross-domain requests if possible, and older versions of IE fall back on to ActiveX objects when necessary.
		 * XHR requests load the content as text or binary data, provide progress and consistent completion events, and
		 * can be canceled during load. Note that XHR is not supported in IE 6 or earlier, and is not recommended for
		 * cross-domain loading.
		 * @class XHRRequest
		 * @constructor
		 * @param {Object} item The object that defines the file to load. Please see the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
		 * for an overview of supported file properties.
		 * @extends AbstractLoader
		 */
		function XHRRequest (item) {
			this.AbstractRequest_constructor(item);

			// protected properties
			/**
			 * A reference to the XHR request used to load the content.
			 * @property _request
			 * @type {XMLHttpRequest | XDomainRequest | ActiveX.XMLHTTP}
			 * @private
			 */
			this._request = null;

			/**
			 * A manual load timeout that is used for browsers that do not support the onTimeout event on XHR (XHR level 1,
			 * typically IE9).
			 * @property _loadTimeout
			 * @type {Number}
			 * @private
			 */
			this._loadTimeout = null;

			/**
			 * The browser's XHR (XMLHTTPRequest) version. Supported versions are 1 and 2. There is no official way to detect
			 * the version, so we use capabilities to make a best guess.
			 * @property _xhrLevel
			 * @type {Number}
			 * @default 1
			 * @private
			 */
			this._xhrLevel = 1;

			/**
			 * The response of a loaded file. This is set because it is expensive to look up constantly. This property will be
			 * null until the file is loaded.
			 * @property _response
			 * @type {mixed}
			 * @private
			 */
			this._response = null;

			/**
			 * The response of the loaded file before it is modified. In most cases, content is converted from raw text to
			 * an HTML tag or a formatted object which is set to the <code>result</code> property, but the developer may still
			 * want to access the raw content as it was loaded.
			 * @property _rawResponse
			 * @type {String|Object}
			 * @private
			 */
			this._rawResponse = null;

			this._canceled = false;

			// Setup our event handlers now.
			this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
			this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
			this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
			this._handleErrorProxy = createjs.proxy(this._handleError, this);
			this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
			this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
			this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);

			if (!this._createXHR(item)) {
				//TODO: Throw error?
			}
		};

		var p = createjs.extend(XHRRequest, createjs.AbstractRequest);

	// static properties
		/**
		 * A list of XMLHTTP object IDs to try when building an ActiveX object for XHR requests in earlier versions of IE.
		 * @property ACTIVEX_VERSIONS
		 * @type {Array}
		 * @since 0.4.2
		 * @private
		 */
		XHRRequest.ACTIVEX_VERSIONS = [
			"Msxml2.XMLHTTP.6.0",
			"Msxml2.XMLHTTP.5.0",
			"Msxml2.XMLHTTP.4.0",
			"MSXML2.XMLHTTP.3.0",
			"MSXML2.XMLHTTP",
			"Microsoft.XMLHTTP"
		];

	// Public methods
		/**
		 * Look up the loaded result.
		 * @method getResult
		 * @param {Boolean} [raw=false] Return a raw result instead of a formatted result. This applies to content
		 * loaded via XHR such as scripts, XML, CSS, and Images. If there is no raw result, the formatted result will be
		 * returned instead.
		 * @return {Object} A result object containing the content that was loaded, such as:
		 * <ul>
		 *      <li>An image tag (&lt;image /&gt;) for images</li>
		 *      <li>A script tag for JavaScript (&lt;script /&gt;). Note that scripts loaded with tags may be added to the
		 *      HTML head.</li>
		 *      <li>A style tag for CSS (&lt;style /&gt;)</li>
		 *      <li>Raw text for TEXT</li>
		 *      <li>A formatted JavaScript object defined by JSON</li>
		 *      <li>An XML document</li>
		 *      <li>An binary arraybuffer loaded by XHR</li>
		 * </ul>
		 * Note that if a raw result is requested, but not found, the result will be returned instead.
		 */
		p.getResult = function (raw) {
			if (raw && this._rawResponse) {
				return this._rawResponse;
			}
			return this._response;
		};

		// Overrides abstract method in AbstractRequest
		p.cancel = function () {
			this.canceled = true;
			this._clean();
			this._request.abort();
		};

		// Overrides abstract method in AbstractLoader
		p.load = function () {
			if (this._request == null) {
				this._handleError();
				return;
			}

			//Events
			if (this._request.addEventListener != null) {
				this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
				this._request.addEventListener("progress", this._handleProgressProxy, false);
				this._request.addEventListener("abort", this._handleAbortProxy, false);
				this._request.addEventListener("error", this._handleErrorProxy, false);
				this._request.addEventListener("timeout", this._handleTimeoutProxy, false);

				// Note: We don't get onload in all browsers (earlier FF and IE). onReadyStateChange handles these.
				this._request.addEventListener("load", this._handleLoadProxy, false);
				this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
			} else {
				// IE9 support
				this._request.onloadstart = this._handleLoadStartProxy;
				this._request.onprogress = this._handleProgressProxy;
				this._request.onabort = this._handleAbortProxy;
				this._request.onerror = this._handleErrorProxy;
				this._request.ontimeout = this._handleTimeoutProxy;

				// Note: We don't get onload in all browsers (earlier FF and IE). onReadyStateChange handles these.
				this._request.onload = this._handleLoadProxy;
				this._request.onreadystatechange = this._handleReadyStateChangeProxy;
			}

			// Set up a timeout if we don't have XHR2
			if (this._xhrLevel == 1) {
				this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
			}

			// Sometimes we get back 404s immediately, particularly when there is a cross origin request.  // note this does not catch in Chrome
			try {
				if (!this._item.values || this._item.method == createjs.AbstractLoader.GET) {
					this._request.send();
				} else if (this._item.method == createjs.AbstractLoader.POST) {
					this._request.send(createjs.RequestUtils.formatQueryString(this._item.values));
				}
			} catch (error) {
				this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, error));
			}
		};

		p.setResponseType = function (type) {
			// Some old browsers doesn't support blob, so we convert arraybuffer to blob after response is downloaded
			if (type === 'blob') {
				type = window.URL ? 'blob' : 'arraybuffer';
				this._responseType = type;
			}
			this._request.responseType = type;
		};

		/**
		 * Get all the response headers from the XmlHttpRequest.
		 *
		 * <strong>From the docs:</strong> Return all the HTTP headers, excluding headers that are a case-insensitive match
		 * for Set-Cookie or Set-Cookie2, as a single string, with each header line separated by a U+000D CR U+000A LF pair,
		 * excluding the status line, and with each header name and header value separated by a U+003A COLON U+0020 SPACE
		 * pair.
		 * @method getAllResponseHeaders
		 * @return {String}
		 * @since 0.4.1
		 */
		p.getAllResponseHeaders = function () {
			if (this._request.getAllResponseHeaders instanceof Function) {
				return this._request.getAllResponseHeaders();
			} else {
				return null;
			}
		};

		/**
		 * Get a specific response header from the XmlHttpRequest.
		 *
		 * <strong>From the docs:</strong> Returns the header field value from the response of which the field name matches
		 * header, unless the field name is Set-Cookie or Set-Cookie2.
		 * @method getResponseHeader
		 * @param {String} header The header name to retrieve.
		 * @return {String}
		 * @since 0.4.1
		 */
		p.getResponseHeader = function (header) {
			if (this._request.getResponseHeader instanceof Function) {
				return this._request.getResponseHeader(header);
			} else {
				return null;
			}
		};

	// protected methods
		/**
		 * The XHR request has reported progress.
		 * @method _handleProgress
		 * @param {Object} event The XHR progress event.
		 * @private
		 */
		p._handleProgress = function (event) {
			if (!event || event.loaded > 0 && event.total == 0) {
				return; // Sometimes we get no "total", so just ignore the progress event.
			}

			var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
			this.dispatchEvent(newEvent);
		};

		/**
		 * The XHR request has reported a load start.
		 * @method _handleLoadStart
		 * @param {Object} event The XHR loadStart event.
		 * @private
		 */
		p._handleLoadStart = function (event) {
			clearTimeout(this._loadTimeout);
			this.dispatchEvent("loadstart");
		};

		/**
		 * The XHR request has reported an abort event.
		 * @method handleAbort
		 * @param {Object} event The XHR abort event.
		 * @private
		 */
		p._handleAbort = function (event) {
			this._clean();
			this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, event));
		};

		/**
		 * The XHR request has reported an error event.
		 * @method _handleError
		 * @param {Object} event The XHR error event.
		 * @private
		 */
		p._handleError = function (event) {
			this._clean();
			this.dispatchEvent(new createjs.ErrorEvent(event.message));
		};

		/**
		 * The XHR request has reported a readyState change. Note that older browsers (IE 7 & 8) do not provide an onload
		 * event, so we must monitor the readyStateChange to determine if the file is loaded.
		 * @method _handleReadyStateChange
		 * @param {Object} event The XHR readyStateChange event.
		 * @private
		 */
		p._handleReadyStateChange = function (event) {
			if (this._request.readyState == 4) {
				this._handleLoad();
			}
		};

		/**
		 * The XHR request has completed. This is called by the XHR request directly, or by a readyStateChange that has
		 * <code>request.readyState == 4</code>. Only the first call to this method will be processed.
		 * @method _handleLoad
		 * @param {Object} event The XHR load event.
		 * @private
		 */
		p._handleLoad = function (event) {
			if (this.loaded) {
				return;
			}
			this.loaded = true;

			var error = this._checkError();
			if (error) {
				this._handleError(error);
				return;
			}

			this._response = this._getResponse();
			// Convert arraybuffer back to blob
			if (this._responseType === 'arraybuffer') {
				try {
					this._response = new Blob([this._response]);
				} catch (e) {
					// Fallback to use BlobBuilder if Blob constructor is not supported
					// Tested on Android 2.3 ~ 4.2 and iOS5 safari
					window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
					if (e.name === 'TypeError' && window.BlobBuilder) {
						var builder = new BlobBuilder();
						builder.append(this._response);
						this._response = builder.getBlob();
					}
				}
			}
			this._clean();

			this.dispatchEvent(new createjs.Event("complete"));
		};

		/**
		 * The XHR request has timed out. This is called by the XHR request directly, or via a <code>setTimeout</code>
		 * callback.
		 * @method _handleTimeout
		 * @param {Object} [event] The XHR timeout event. This is occasionally null when called by the backup setTimeout.
		 * @private
		 */
		p._handleTimeout = function (event) {
			this._clean();

			this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, event));
		};

	// Protected
		/**
		 * Determine if there is an error in the current load. This checks the status of the request for problem codes. Note
		 * that this does not check for an actual response. Currently, it only checks for 404 or 0 error code.
		 * @method _checkError
		 * @return {int} If the request status returns an error code.
		 * @private
		 */
		p._checkError = function () {
			//LM: Probably need additional handlers here, maybe 501
			var status = parseInt(this._request.status);

			switch (status) {
				case 404:   // Not Found
				case 0:     // Not Loaded
					return new Error(status);
			}
			return null;
		};

		/**
		 * Validate the response. Different browsers have different approaches, some of which throw errors when accessed
		 * in other browsers. If there is no response, the <code>_response</code> property will remain null.
		 * @method _getResponse
		 * @private
		 */
		p._getResponse = function () {
			if (this._response != null) {
				return this._response;
			}

			if (this._request.response != null) {
				return this._request.response;
			}

			// Android 2.2 uses .responseText
			try {
				if (this._request.responseText != null) {
					return this._request.responseText;
				}
			} catch (e) {
			}

			// When loading XML, IE9 does not return .response, instead it returns responseXML.xml
			try {
				if (this._request.responseXML != null) {
					return this._request.responseXML;
				}
			} catch (e) {
			}

			return null;
		};

		/**
		 * Create an XHR request. Depending on a number of factors, we get totally different results.
		 * <ol><li>Some browsers get an <code>XDomainRequest</code> when loading cross-domain.</li>
		 *      <li>XMLHttpRequest are created when available.</li>
		 *      <li>ActiveX.XMLHTTP objects are used in older IE browsers.</li>
		 *      <li>Text requests override the mime type if possible</li>
		 *      <li>Origin headers are sent for crossdomain requests in some browsers.</li>
		 *      <li>Binary loads set the response type to "arraybuffer"</li></ol>
		 * @method _createXHR
		 * @param {Object} item The requested item that is being loaded.
		 * @return {Boolean} If an XHR request or equivalent was successfully created.
		 * @private
		 */
		p._createXHR = function (item) {
			// Check for cross-domain loads. We can't fully support them, but we can try.
			var crossdomain = createjs.RequestUtils.isCrossDomain(item);
			var headers = {};

			// Create the request. Fallback to whatever support we have.
			var req = null;
			if (window.XMLHttpRequest) {
				req = new XMLHttpRequest();
				// This is 8 or 9, so use XDomainRequest instead.
				if (crossdomain && req.withCredentials === undefined && window.XDomainRequest) {
					req = new XDomainRequest();
				}
			} else { // Old IE versions use a different approach
				for (var i = 0, l = s.ACTIVEX_VERSIONS.length; i < l; i++) {
					var axVersion = s.ACTIVEX_VERSIONS[i];
					try {
						req = new ActiveXObject(axVersion);
						break;
					} catch (e) {
					}
				}
				if (req == null) {
					return false;
				}
			}

			// Default to utf-8 for Text requests.
			if (item.mimeType == null && createjs.RequestUtils.isText(item.type)) {
				item.mimeType = "text/plain; charset=utf-8";
			}

			// IE9 doesn't support overrideMimeType(), so we need to check for it.
			if (item.mimeType && req.overrideMimeType) {
				req.overrideMimeType(item.mimeType);
			}

			// Determine the XHR level
			this._xhrLevel = (typeof req.responseType === "string") ? 2 : 1;

			var src = null;
			if (item.method == createjs.AbstractLoader.GET) {
				src = createjs.RequestUtils.buildPath(item.src, item.values);
			} else {
				src = item.src;
			}

			// Open the request.  Set cross-domain flags if it is supported (XHR level 1 only)
			req.open(item.method || createjs.AbstractLoader.GET, src, true);

			if (crossdomain && req instanceof XMLHttpRequest && this._xhrLevel == 1) {
				headers["Origin"] = location.origin;
			}

			// To send data we need to set the Content-type header)
			if (item.values && item.method == createjs.AbstractLoader.POST) {
				headers["Content-Type"] = "application/x-www-form-urlencoded";
			}

			if (!crossdomain && !headers["X-Requested-With"]) {
				headers["X-Requested-With"] = "XMLHttpRequest";
			}

			if (item.headers) {
				for (var n in item.headers) {
					headers[n] = item.headers[n];
				}
			}

			for (n in headers) {
				req.setRequestHeader(n, headers[n])
			}

			if (req instanceof XMLHttpRequest && item.withCredentials !== undefined) {
				req.withCredentials = item.withCredentials;
			}

			this._request = req;

			return true;
		};

		/**
		 * A request has completed (or failed or canceled), and needs to be disposed.
		 * @method _clean
		 * @private
		 */
		p._clean = function () {
			clearTimeout(this._loadTimeout);

			if (this._request.removeEventListener != null) {
				this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
				this._request.removeEventListener("progress", this._handleProgressProxy);
				this._request.removeEventListener("abort", this._handleAbortProxy);
				this._request.removeEventListener("error", this._handleErrorProxy);
				this._request.removeEventListener("timeout", this._handleTimeoutProxy);
				this._request.removeEventListener("load", this._handleLoadProxy);
				this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy);
			} else {
				this._request.onloadstart = null;
				this._request.onprogress = null;
				this._request.onabort = null;
				this._request.onerror = null;
				this._request.ontimeout = null;
				this._request.onload = null;
				this._request.onreadystatechange = null;
			}
		};

		p.toString = function () {
			return "[PreloadJS XHRRequest]";
		};

		createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");

	}());

	//##############################################################################
	// LoadQueue.js
	//##############################################################################

	this.createjs = this.createjs || {};

	/*
	 TODO: WINDOWS ISSUES
	 * No error for HTML audio in IE 678
	 * SVG no failure error in IE 67 (maybe 8) TAGS AND XHR
	 * No script complete handler in IE 67 TAGS (XHR is fine)
	 * No XML/JSON in IE6 TAGS
	 * Need to hide loading SVG in Opera TAGS
	 * No CSS onload/readystatechange in Safari or Android TAGS (requires rule checking)
	 * SVG no load or failure in Opera XHR
	 * Reported issues with IE7/8
	 */

	(function () {
		"use strict";

	// constructor
		/**
		 * The LoadQueue class is the main API for preloading content. LoadQueue is a load manager, which can preload either
		 * a single file, or queue of files.
		 *
		 * <b>Creating a Queue</b><br />
		 * To use LoadQueue, create a LoadQueue instance. If you want to force tag loading where possible, set the preferXHR
		 * argument to false.
		 *
		 *      var queue = new createjs.LoadQueue(true);
		 *
		 * <b>Listening for Events</b><br />
		 * Add any listeners you want to the queue. Since PreloadJS 0.3.0, the {{#crossLink "EventDispatcher"}}{{/crossLink}}
		 * lets you add as many listeners as you want for events. You can subscribe to the following events:<ul>
		 *     <li>{{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}}: fired when a queue completes loading all
		 *     files</li>
		 *     <li>{{#crossLink "AbstractLoader/error:event"}}{{/crossLink}}: fired when the queue encounters an error with
		 *     any file.</li>
		 *     <li>{{#crossLink "AbstractLoader/progress:event"}}{{/crossLink}}: Progress for the entire queue has
		 *     changed.</li>
		 *     <li>{{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}}: A single file has completed loading.</li>
		 *     <li>{{#crossLink "LoadQueue/fileprogress:event"}}{{/crossLink}}: Progress for a single file has changes. Note
		 *     that only files loaded with XHR (or possibly by plugins) will fire progress events other than 0 or 100%.</li>
		 * </ul>
		 *
		 *      queue.on("fileload", handleFileLoad, this);
		 *      queue.on("complete", handleComplete, this);
		 *
		 * <b>Adding files and manifests</b><br />
		 * Add files you want to load using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or add multiple files at a
		 * time using a list or a manifest definition using {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}. Files are
		 * appended to the end of the active queue, so you can use these methods as many times as you like, whenever you
		 * like.
		 *
		 *      queue.loadFile("filePath/file.jpg");
		 *      queue.loadFile({id:"image", src:"filePath/file.jpg"});
		 *      queue.loadManifest(["filePath/file.jpg", {id:"image", src:"filePath/file.jpg"}]);
		 *
		 *      // Use an external manifest
		 *      queue.loadManifest("path/to/manifest.json");
		 *      queue.loadManifest({src:"manifest.json", type:"manifest"});
		 *
		 * If you pass `false` as the `loadNow` parameter, the queue will not kick of the load of the files, but it will not
		 * stop if it has already been started. Call the {{#crossLink "AbstractLoader/load"}}{{/crossLink}} method to begin
		 * a paused queue. Note that a paused queue will automatically resume when new files are added to it with a
		 * `loadNow` argument of `true`.
		 *
		 *      queue.load();
		 *
		 * <b>File Types</b><br />
		 * The file type of a manifest item is auto-determined by the file extension. The pattern matching in PreloadJS
		 * should handle the majority of standard file and url formats, and works with common file extensions. If you have
		 * either a non-standard file extension, or are serving the file using a proxy script, then you can pass in a
		 * <code>type</code> property with any manifest item.
		 *
		 *      queue.loadFile({src:"path/to/myFile.mp3x", type:createjs.AbstractLoader.SOUND});
		 *
		 *      // Note that PreloadJS will not read a file extension from the query string
		 *      queue.loadFile({src:"http://server.com/proxy?file=image.jpg", type:createjs.AbstractLoader.IMAGE});
		 *
		 * Supported types are defined on the {{#crossLink "AbstractLoader"}}{{/crossLink}} class, and include:
		 * <ul>
		 *     <li>{{#crossLink "AbstractLoader/BINARY:property"}}{{/crossLink}}: Raw binary data via XHR</li>
		 *     <li>{{#crossLink "AbstractLoader/CSS:property"}}{{/crossLink}}: CSS files</li>
		 *     <li>{{#crossLink "AbstractLoader/IMAGE:property"}}{{/crossLink}}: Common image formats</li>
		 *     <li>{{#crossLink "AbstractLoader/JAVASCRIPT:property"}}{{/crossLink}}: JavaScript files</li>
		 *     <li>{{#crossLink "AbstractLoader/JSON:property"}}{{/crossLink}}: JSON data</li>
		 *     <li>{{#crossLink "AbstractLoader/JSONP:property"}}{{/crossLink}}: JSON files cross-domain</li>
		 *     <li>{{#crossLink "AbstractLoader/MANIFEST:property"}}{{/crossLink}}: A list of files to load in JSON format, see
		 *     {{#crossLink "AbstractLoader/loadManifest"}}{{/crossLink}}</li>
		 *     <li>{{#crossLink "AbstractLoader/SOUND:property"}}{{/crossLink}}: Audio file formats</li>
		 *     <li>{{#crossLink "AbstractLoader/SPRITESHEET:property"}}{{/crossLink}}: JSON SpriteSheet definitions. This
		 *     will also load sub-images, and provide a {{#crossLink "SpriteSheet"}}{{/crossLink}} instance.</li>
		 *     <li>{{#crossLink "AbstractLoader/SVG:property"}}{{/crossLink}}: SVG files</li>
		 *     <li>{{#crossLink "AbstractLoader/TEXT:property"}}{{/crossLink}}: Text files - XHR only</li>
	     *     <li>{{#crossLink "AbstractLoader/VIDEO:property"}}{{/crossLink}}: Video objects</li>
		 *     <li>{{#crossLink "AbstractLoader/XML:property"}}{{/crossLink}}: XML data</li>
		 * </ul>
		 *
		 * <em>Note: Loader types used to be defined on LoadQueue, but have been moved to AbstractLoader for better
		 * portability of loader classes, which can be used individually now. The properties on LoadQueue still exist, but
		 * are deprecated.</em>
		 *
		 * <b>Handling Results</b><br />
		 * When a file is finished downloading, a {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event is
		 * dispatched. In an example above, there is an event listener snippet for fileload. Loaded files are usually a
		 * formatted object that can be used immediately, including:
		 * <ul>
		 *     <li>Binary: The binary loaded result</li>
		 *     <li>CSS: A &lt;link /&gt; tag</li>
		 *     <li>Image: An &lt;img /&gt; tag</li>
		 *     <li>JavaScript: A &lt;script /&gt; tag</li>
		 *     <li>JSON/JSONP: A formatted JavaScript Object</li>
		 *     <li>Manifest: A JavaScript object.
		 *     <li>Sound: An &lt;audio /&gt; tag</a>
		 *     <li>SpriteSheet: A {{#crossLink "SpriteSheet"}}{{/crossLink}} instance, containing loaded images.
		 *     <li>SVG: An &lt;object /&gt; tag</li>
		 *     <li>Text: Raw text</li>
	     *     <li>Video: A Video DOM node</li>
		 *     <li>XML: An XML DOM node</li>
		 * </ul>
		 *
		 *      function handleFileLoad(event) {
		 *          var item = event.item; // A reference to the item that was passed in to the LoadQueue
		 *          var type = item.type;
		 *
		 *          // Add any images to the page body.
		 *          if (type == createjs.LoadQueue.IMAGE) {
		 *              document.body.appendChild(event.result);
		 *          }
		 *      }
		 *
		 * At any time after the file has been loaded (usually after the queue has completed), any result can be looked up
		 * via its "id" using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}. If no id was provided, then the
		 * "src" or file path can be used instead, including the `path` defined by a manifest, but <strong>not including</strong>
		 * a base path defined on the LoadQueue. It is recommended to always pass an id if you want to look up content.
		 *
		 *      var image = queue.getResult("image");
		 *      document.body.appendChild(image);
		 *
		 * Raw loaded content can be accessed using the <code>rawResult</code> property of the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}}
		 * event, or can be looked up using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}, passing `true` as the 2nd
		 * argument. This is only applicable for content that has been parsed for the browser, specifically: JavaScript,
		 * CSS, XML, SVG, and JSON objects, or anything loaded with XHR.
		 *
		 *      var image = queue.getResult("image", true); // load the binary image data loaded with XHR.
		 *
		 * <b>Plugins</b><br />
		 * LoadQueue has a simple plugin architecture to help process and preload content. For example, to preload audio,
		 * make sure to install the <a href="http://soundjs.com">SoundJS</a> Sound class, which will help load HTML audio,
		 * Flash audio, and WebAudio files. This should be installed <strong>before</strong> loading any audio files.
		 *
		 *      queue.installPlugin(createjs.Sound);
		 *
		 * <h4>Known Browser Issues</h4>
		 * <ul>
		 *     <li>Browsers without audio support can not load audio files.</li>
		 *     <li>Safari on Mac OS X can only play HTML audio if QuickTime is installed</li>
		 *     <li>HTML Audio tags will only download until their <code>canPlayThrough</code> event is fired. Browsers other
		 *     than Chrome will continue to download in the background.</li>
		 *     <li>When loading scripts using tags, they are automatically added to the document.</li>
		 *     <li>Scripts loaded via XHR may not be properly inspectable with browser tools.</li>
		 *     <li>IE6 and IE7 (and some other browsers) may not be able to load XML, Text, or JSON, since they require
		 *     XHR to work.</li>
		 *     <li>Content loaded via tags will not show progress, and will continue to download in the background when
		 *     canceled, although no events will be dispatched.</li>
		 * </ul>
		 *
		 * @class LoadQueue
		 * @param {Boolean} [preferXHR=true] Determines whether the preload instance will favor loading with XHR (XML HTTP
		 * Requests), or HTML tags. When this is `false`, the queue will use tag loading when possible, and fall back on XHR
		 * when necessary.
		 * @param {String} [basePath=""] A path that will be prepended on to the source parameter of all items in the queue
		 * before they are loaded.  Sources beginning with a protocol such as `http://` or a relative path such as `../`
		 * will not receive a base path.
		 * @param {String|Boolean} [crossOrigin=""] An optional flag to support images loaded from a CORS-enabled server. To
		 * use it, set this value to `true`, which will default the crossOrigin property on images to "Anonymous". Any
		 * string value will be passed through, but only "" and "Anonymous" are recommended. <strong>Note: The crossOrigin
		 * parameter is deprecated. Use LoadItem.crossOrigin instead</strong>
		 *
		 * @constructor
		 * @extends AbstractLoader
		 */
		function LoadQueue (preferXHR, basePath, crossOrigin) {
			this.AbstractLoader_constructor();

			/**
			 * An array of the plugins registered using {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}.
			 * @property _plugins
			 * @type {Array}
			 * @private
			 * @since 0.6.1
			 */
			this._plugins = [];

			/**
			 * An object hash of callbacks that are fired for each file type before the file is loaded, giving plugins the
			 * ability to override properties of the load. Please see the {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}
			 * method for more information.
			 * @property _typeCallbacks
			 * @type {Object}
			 * @private
			 */
			this._typeCallbacks = {};

			/**
			 * An object hash of callbacks that are fired for each file extension before the file is loaded, giving plugins the
			 * ability to override properties of the load. Please see the {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}}
			 * method for more information.
			 * @property _extensionCallbacks
			 * @type {null}
			 * @private
			 */
			this._extensionCallbacks = {};

			/**
			 * The next preload queue to process when this one is complete. If an error is thrown in the current queue, and
			 * {{#crossLink "LoadQueue/stopOnError:property"}}{{/crossLink}} is `true`, the next queue will not be processed.
			 * @property next
			 * @type {LoadQueue}
			 * @default null
			 */
			this.next = null;

			/**
			 * Ensure loaded scripts "complete" in the order they are specified. Loaded scripts are added to the document head
			 * once they are loaded. Scripts loaded via tags will load one-at-a-time when this property is `true`, whereas
			 * scripts loaded using XHR can load in any order, but will "finish" and be added to the document in the order
			 * specified.
			 *
			 * Any items can be set to load in order by setting the {{#crossLink "maintainOrder:property"}}{{/crossLink}}
			 * property on the load item, or by ensuring that only one connection can be open at a time using
			 * {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}. Note that when the `maintainScriptOrder` property
			 * is set to `true`, scripts items are automatically set to `maintainOrder=true`, and changing the
			 * `maintainScriptOrder` to `false` during a load will not change items already in a queue.
			 *
			 * <h4>Example</h4>
			 *
			 *      var queue = new createjs.LoadQueue();
			 *      queue.setMaxConnections(3); // Set a higher number to load multiple items at once
			 *      queue.maintainScriptOrder = true; // Ensure scripts are loaded in order
			 *      queue.loadManifest([
			 *          "script1.js",
			 *          "script2.js",
			 *          "image.png", // Load any time
			 *          {src: "image2.png", maintainOrder: true} // Will wait for script2.js
			 *          "image3.png",
			 *          "script3.js" // Will wait for image2.png before loading (or completing when loading with XHR)
			 *      ]);
			 *
			 * @property maintainScriptOrder
			 * @type {Boolean}
			 * @default true
			 */
			this.maintainScriptOrder = true;

			/**
			 * Determines if the LoadQueue will stop processing the current queue when an error is encountered.
			 * @property stopOnError
			 * @type {Boolean}
			 * @default false
			 */
			this.stopOnError = false;

			/**
			 * The number of maximum open connections that a loadQueue tries to maintain. Please see
			 * {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}} for more information.
			 * @property _maxConnections
			 * @type {Number}
			 * @default 1
			 * @private
			 */
			this._maxConnections = 1;

			/**
			 * An internal list of all the default Loaders that are included with PreloadJS. Before an item is loaded, the
			 * available loader list is iterated, in the order they are included, and as soon as a loader indicates it can
			 * handle the content, it will be selected. The default loader, ({{#crossLink "TextLoader"}}{{/crossLink}} is
			 * last in the list, so it will be used if no other match is found. Typically, loaders will match based on the
			 * {{#crossLink "LoadItem/type"}}{{/crossLink}}, which is automatically determined using the file extension of
			 * the {{#crossLink "LoadItem/src:property"}}{{/crossLink}}.
			 *
			 * Loaders can be removed from PreloadJS by simply not including them.
			 *
			 * Custom loaders installed using {{#crossLink "registerLoader"}}{{/crossLink}} will be prepended to this list
			 * so that they are checked first.
			 * @property _availableLoaders
			 * @type {Array}
			 * @private
			 * @since 0.6.0
			 */
			this._availableLoaders = [
				createjs.ImageLoader,
				createjs.JavaScriptLoader,
				createjs.CSSLoader,
				createjs.JSONLoader,
				createjs.JSONPLoader,
				createjs.SoundLoader,
				createjs.ManifestLoader,
				createjs.SpriteSheetLoader,
				createjs.XMLLoader,
				createjs.SVGLoader,
				createjs.BinaryLoader,
				createjs.VideoLoader,
				createjs.TextLoader
			];

			/**
			 * The number of built in loaders, so they can't be removed by {{#crossLink "unregisterLoader"}}{{/crossLink}.
					 * @property _defaultLoaderLength
			 * @type {Number}
			 * @private
			 * @since 0.6.0
			 */
			this._defaultLoaderLength = this._availableLoaders.length;

			this.init(preferXHR, basePath, crossOrigin);
		}

		var p = createjs.extend(LoadQueue, createjs.AbstractLoader);
		var s = LoadQueue;

		/**
		 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
		 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
		 * for details.
		 *
		 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
		 *
		 * @method initialize
		 * @protected
		 * @deprecated
		 */
		// p.initialize = function() {}; // searchable for devs wondering where it is.

		/**
		 * An internal initialization method, which is used for initial set up, but also to reset the LoadQueue.
		 * @method init
		 * @param preferXHR
		 * @param basePath
		 * @param crossOrigin
		 * @private
		 */
		p.init = function (preferXHR, basePath, crossOrigin) {

			// public properties
			/**
			 * @property useXHR
			 * @type {Boolean}
			 * @readonly
			 * @default true
			 * @deprecated Use preferXHR instead.
			 */
			this.useXHR = true;

			/**
			 * Try and use XMLHttpRequest (XHR) when possible. Note that LoadQueue will default to tag loading or XHR
			 * loading depending on the requirements for a media type. For example, HTML audio can not be loaded with XHR,
			 * and plain text can not be loaded with tags, so it will default the the correct type instead of using the
			 * user-defined type.
			 * @type {Boolean}
			 * @default true
			 * @since 0.6.0
			 */
			this.preferXHR = true; //TODO: Get/Set
			this._preferXHR = true;
			this.setPreferXHR(preferXHR);

			// protected properties
			/**
			 * Whether the queue is currently paused or not.
			 * @property _paused
			 * @type {boolean}
			 * @private
			 */
			this._paused = false;

			/**
			 * A path that will be prepended on to the item's {{#crossLink "LoadItem/src:property"}}{{/crossLink}}. The
			 * `_basePath` property will only be used if an item's source is relative, and does not include a protocol such
			 * as `http://`, or a relative path such as `../`.
			 * @property _basePath
			 * @type {String}
			 * @private
			 * @since 0.3.1
			 */
			this._basePath = basePath;

			/**
			 * An optional flag to set on images that are loaded using PreloadJS, which enables CORS support. Images loaded
			 * cross-domain by servers that support CORS require the crossOrigin flag to be loaded and interacted with by
			 * a canvas. When loading locally, or with a server with no CORS support, this flag can cause other security issues,
			 * so it is recommended to only set it if you are sure the server supports it. Currently, supported values are ""
			 * and "Anonymous".
			 * @property _crossOrigin
			 * @type {String}
			 * @default ""
			 * @private
			 * @since 0.4.1
			 */
			this._crossOrigin = crossOrigin;

			/**
			 * Determines if the loadStart event was dispatched already. This event is only fired one time, when the first
			 * file is requested.
			 * @property _loadStartWasDispatched
			 * @type {Boolean}
			 * @default false
			 * @private
			 */
			this._loadStartWasDispatched = false;

			/**
			 * Determines if there is currently a script loading. This helps ensure that only a single script loads at once when
			 * using a script tag to do preloading.
			 * @property _currentlyLoadingScript
			 * @type {Boolean}
			 * @private
			 */
			this._currentlyLoadingScript = null;

			/**
			 * An array containing the currently downloading files.
			 * @property _currentLoads
			 * @type {Array}
			 * @private
			 */
			this._currentLoads = [];

			/**
			 * An array containing the queued items that have not yet started downloading.
			 * @property _loadQueue
			 * @type {Array}
			 * @private
			 */
			this._loadQueue = [];

			/**
			 * An array containing downloads that have not completed, so that the LoadQueue can be properly reset.
			 * @property _loadQueueBackup
			 * @type {Array}
			 * @private
			 */
			this._loadQueueBackup = [];

			/**
			 * An object hash of items that have finished downloading, indexed by the {{#crossLink "LoadItem"}}{{/crossLink}}
			 * id.
			 * @property _loadItemsById
			 * @type {Object}
			 * @private
			 */
			this._loadItemsById = {};

			/**
			 * An object hash of items that have finished downloading, indexed by {{#crossLink "LoadItem"}}{{/crossLink}}
			 * source.
			 * @property _loadItemsBySrc
			 * @type {Object}
			 * @private
			 */
			this._loadItemsBySrc = {};

			/**
			 * An object hash of loaded items, indexed by the ID of the {{#crossLink "LoadItem"}}{{/crossLink}}.
			 * @property _loadedResults
			 * @type {Object}
			 * @private
			 */
			this._loadedResults = {};

			/**
			 * An object hash of un-parsed loaded items, indexed by the ID of the {{#crossLink "LoadItem"}}{{/crossLink}}.
			 * @property _loadedRawResults
			 * @type {Object}
			 * @private
			 */
			this._loadedRawResults = {};

			/**
			 * The number of items that have been requested. This helps manage an overall progress without knowing how large
			 * the files are before they are downloaded. This does not include items inside of loaders such as the
			 * {{#crossLink "ManifestLoader"}}{{/crossLink}}.
			 * @property _numItems
			 * @type {Number}
			 * @default 0
			 * @private
			 */
			this._numItems = 0;

			/**
			 * The number of items that have completed loaded. This helps manage an overall progress without knowing how large
			 * the files are before they are downloaded.
			 * @property _numItemsLoaded
			 * @type {Number}
			 * @default 0
			 * @private
			 */
			this._numItemsLoaded = 0;

			/**
			 * A list of scripts in the order they were requested. This helps ensure that scripts are "completed" in the right
			 * order.
			 * @property _scriptOrder
			 * @type {Array}
			 * @private
			 */
			this._scriptOrder = [];

			/**
			 * A list of scripts that have been loaded. Items are added to this list as <code>null</code> when they are
			 * requested, contain the loaded item if it has completed, but not been dispatched to the user, and <code>true</true>
			 * once they are complete and have been dispatched.
			 * @property _loadedScripts
			 * @type {Array}
			 * @private
			 */
			this._loadedScripts = [];

			/**
			 * The last progress amount. This is used to suppress duplicate progress events.
			 * @property _lastProgress
			 * @type {Number}
			 * @private
			 * @since 0.6.0
			 */
			this._lastProgress = NaN;

		};

	// static properties
		/**
		 * The time in milliseconds to assume a load has failed. An {{#crossLink "AbstractLoader/error:event"}}{{/crossLink}}
		 * event is dispatched if the timeout is reached before any data is received.
		 * @property loadTimeout
		 * @type {Number}
		 * @default 8000
		 * @static
		 * @since 0.4.1
		 * @deprecated In favour of {{#crossLink "LoadItem/LOAD_TIMEOUT_DEFAULT:property}}{{/crossLink}} property.
		 */
		s.loadTimeout = 8000;

		/**
		 * The time in milliseconds to assume a load has failed.
		 * @property LOAD_TIMEOUT
		 * @type {Number}
		 * @default 0
		 * @deprecated in favor of the {{#crossLink "LoadQueue/loadTimeout:property"}}{{/crossLink}} property.
		 */
		s.LOAD_TIMEOUT = 0;

	// Preload Types
		/**
		 * @property BINARY
		 * @type {String}
		 * @default binary
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/BINARY:property"}}{{/crossLink}} instead.
		 */
		s.BINARY = createjs.AbstractLoader.BINARY;

		/**
		 * @property CSS
		 * @type {String}
		 * @default css
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/CSS:property"}}{{/crossLink}} instead.
		 */
		s.CSS = createjs.AbstractLoader.CSS;

		/**
		 * @property IMAGE
		 * @type {String}
		 * @default image
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/CSS:property"}}{{/crossLink}} instead.
		 */
		s.IMAGE = createjs.AbstractLoader.IMAGE;

		/**
		 * @property JAVASCRIPT
		 * @type {String}
		 * @default javascript
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/JAVASCRIPT:property"}}{{/crossLink}} instead.
		 */
		s.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT;

		/**
		 * @property JSON
		 * @type {String}
		 * @default json
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/JSON:property"}}{{/crossLink}} instead.
		 */
		s.JSON = createjs.AbstractLoader.JSON;

		/**
		 * @property JSONP
		 * @type {String}
		 * @default jsonp
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/JSONP:property"}}{{/crossLink}} instead.
		 */
		s.JSONP = createjs.AbstractLoader.JSONP;

		/**
		 * @property MANIFEST
		 * @type {String}
		 * @default manifest
		 * @static
		 * @since 0.4.1
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/MANIFEST:property"}}{{/crossLink}} instead.
		 */
		s.MANIFEST = createjs.AbstractLoader.MANIFEST;

		/**
		 * @property SOUND
		 * @type {String}
		 * @default sound
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/JAVASCRIPT:property"}}{{/crossLink}} instead.
		 */
		s.SOUND = createjs.AbstractLoader.SOUND;

		/**
		 * @property VIDEO
		 * @type {String}
		 * @default video
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/JAVASCRIPT:property"}}{{/crossLink}} instead.
		 */
		s.VIDEO = createjs.AbstractLoader.VIDEO;

		/**
		 * @property SVG
		 * @type {String}
		 * @default svg
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/SVG:property"}}{{/crossLink}} instead.
		 */
		s.SVG = createjs.AbstractLoader.SVG;

		/**
		 * @property TEXT
		 * @type {String}
		 * @default text
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/TEXT:property"}}{{/crossLink}} instead.
		 */
		s.TEXT = createjs.AbstractLoader.TEXT;

		/**
		 * @property XML
		 * @type {String}
		 * @default xml
		 * @static
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/XML:property"}}{{/crossLink}} instead.
		 */
		s.XML = createjs.AbstractLoader.XML;

		/**
		 * @property POST
		 * @type {string}
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/POST:property"}}{{/crossLink}} instead.
		 */
		s.POST = createjs.AbstractLoader.POST;

		/**
		 * @property GET
		 * @type {string}
		 * @deprecated Use the AbstractLoader {{#crossLink "AbstractLoader/GET:property"}}{{/crossLink}} instead.
		 */
		s.GET = createjs.AbstractLoader.GET;

	// events
		/**
		 * This event is fired when an individual file has loaded, and been processed.
		 * @event fileload
		 * @param {Object} target The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
		 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
		 * object will contain that value as a `src` property.
		 * @param {Object} result The HTML tag or parsed result of the loaded item.
		 * @param {Object} rawResult The unprocessed result, usually the raw text or binary data before it is converted
		 * to a usable object.
		 * @since 0.3.0
		 */

		/**
		 * This {{#crossLink "ProgressEvent"}}{{/crossLink}} that is fired when an an individual file's progress changes.
		 * @event fileprogress
		 * @since 0.3.0
		 */

		/**
		 * This event is fired when an individual file starts to load.
		 * @event filestart
		 * @param {Object} The object that dispatched the event.
		 * @param {String} type The event type.
		 * @param {Object} item The file item which was specified in the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
		 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}} call. If only a string path or tag was specified, the
		 * object will contain that value as a property.
		 */

		/**
		 * Although it extends {{#crossLink "AbstractLoader"}}{{/crossLink}}, the `initialize` event is never fired from
		 * a LoadQueue instance.
		 * @event initialize
		 * @private
		 */

	// public methods
		/**
		 * Register a custom loaders class. New loaders are given precedence over loaders added earlier and default loaders.
		 * It is recommended that loaders extend {{#crossLink "AbstractLoader"}}{{/crossLink}}. Loaders can only be added
		 * once, and will be prepended to the list of available loaders.
		 * @method registerLoader
		 * @param {Function|AbstractLoader} loader The AbstractLoader class to add.
		 * @since 0.6.0
		 */
		p.registerLoader = function (loader) {
			if (!loader || !loader.canLoadItem) {
				throw new Error("loader is of an incorrect type.");
			} else if (this._availableLoaders.indexOf(loader) != -1) {
				throw new Error("loader already exists."); //LM: Maybe just silently fail here
			}

			this._availableLoaders.unshift(loader);
		};

		/**
		 * Remove a custom loader added using {{#crossLink "registerLoader"}}{{/crossLink}}. Only custom loaders can be
		 * unregistered, the default loaders will always be available.
		 * @method unregisterLoader
		 * @param {Function|AbstractLoader} loader The AbstractLoader class to remove
		 */
		p.unregisterLoader = function (loader) {
			var idx = this._availableLoaders.indexOf(loader);
			if (idx != -1 && idx < this._defaultLoaderLength - 1) {
				this._availableLoaders.splice(idx, 1);
			}
		};

		/**
		 * @method setUseXHR
		 * @param {Boolean} value The new useXHR value to set.
		 * @return {Boolean} The new useXHR value. If XHR is not supported by the browser, this will return false, even if
		 * the provided value argument was true.
		 * @since 0.3.0
		 * @deprecated use the {{#crossLink "LoadQueue/preferXHR:property"}}{{/crossLink}} property, or the
		 * {{#crossLink "LoadQueue/setUseXHR"}}{{/crossLink}} method instead.
		 */
		p.setUseXHR = function (value) {
			return this.setPreferXHR(value);
		};

		/**
		 * Change the {{#crossLink "preferXHR:property"}}{{/crossLink}} value. Note that if this is set to `true`, it may
		 * fail, or be ignored depending on the browser's capabilities and the load type.
		 * @method setPreferXHR
		 * @param {Boolean} value
		 * @returns {Boolean} The value of {{#crossLink "preferXHR"}}{{/crossLink}} that was successfully set.
		 * @since 0.6.0
		 */
		p.setPreferXHR = function (value) {
			// Determine if we can use XHR. XHR defaults to TRUE, but the browser may not support it.
			//TODO: Should we be checking for the other XHR types? Might have to do a try/catch on the different types similar to createXHR.
			this.preferXHR = (value != false && window.XMLHttpRequest != null);
			return this.preferXHR;
		};

		/**
		 * Stops all queued and loading items, and clears the queue. This also removes all internal references to loaded
		 * content, and allows the queue to be used again.
		 * @method removeAll
		 * @since 0.3.0
		 */
		p.removeAll = function () {
			this.remove();
		};

		/**
		 * Stops an item from being loaded, and removes it from the queue. If nothing is passed, all items are removed.
		 * This also removes internal references to loaded item(s).
		 *
		 * <h4>Example</h4>
		 *
		 *      queue.loadManifest([
		 *          {src:"test.png", id:"png"},
		 *          {src:"test.jpg", id:"jpg"},
		 *          {src:"test.mp3", id:"mp3"}
		 *      ]);
		 *      queue.remove("png"); // Single item by ID
		 *      queue.remove("png", "test.jpg"); // Items as arguments. Mixed id and src.
		 *      queue.remove(["test.png", "jpg"]); // Items in an Array. Mixed id and src.
		 *
		 * @method remove
		 * @param {String | Array} idsOrUrls* The id or ids to remove from this queue. You can pass an item, an array of
		 * items, or multiple items as arguments.
		 * @since 0.3.0
		 */
		p.remove = function (idsOrUrls) {
			var args = null;

			if (idsOrUrls && !Array.isArray(idsOrUrls)) {
				args = [idsOrUrls];
			} else if (idsOrUrls) {
				args = idsOrUrls;
			} else if (arguments.length > 0) {
				return;
			}

			var itemsWereRemoved = false;

			// Destroy everything
			if (!args) {
				this.close();
				for (var n in this._loadItemsById) {
					this._disposeItem(this._loadItemsById[n]);
				}
				this.init(this.preferXHR, this._basePath);

				// Remove specific items
			} else {
				while (args.length) {
					var item = args.pop();
					var r = this.getResult(item);

					//Remove from the main load Queue
					for (i = this._loadQueue.length - 1; i >= 0; i--) {
						loadItem = this._loadQueue[i].getItem();
						if (loadItem.id == item || loadItem.src == item) {
							this._loadQueue.splice(i, 1)[0].cancel();
							break;
						}
					}

					//Remove from the backup queue
					for (i = this._loadQueueBackup.length - 1; i >= 0; i--) {
						loadItem = this._loadQueueBackup[i].getItem();
						if (loadItem.id == item || loadItem.src == item) {
							this._loadQueueBackup.splice(i, 1)[0].cancel();
							break;
						}
					}

					if (r) {
						this._disposeItem(this.getItem(item));
					} else {
						for (var i = this._currentLoads.length - 1; i >= 0; i--) {
							var loadItem = this._currentLoads[i].getItem();
							if (loadItem.id == item || loadItem.src == item) {
								this._currentLoads.splice(i, 1)[0].cancel();
								itemsWereRemoved = true;
								break;
							}
						}
					}
				}

				// If this was called during a load, try to load the next item.
				if (itemsWereRemoved) {
					this._loadNext();
				}
			}
		};

		/**
		 * Stops all open loads, destroys any loaded items, and resets the queue, so all items can
		 * be reloaded again by calling {{#crossLink "AbstractLoader/load"}}{{/crossLink}}. Items are not removed from the
		 * queue. To remove items use the {{#crossLink "LoadQueue/remove"}}{{/crossLink}} or
		 * {{#crossLink "LoadQueue/removeAll"}}{{/crossLink}} method.
		 * @method reset
		 * @since 0.3.0
		 */
		p.reset = function () {
			this.close();
			for (var n in this._loadItemsById) {
				this._disposeItem(this._loadItemsById[n]);
			}

			//Reset the queue to its start state
			var a = [];
			for (var i = 0, l = this._loadQueueBackup.length; i < l; i++) {
				a.push(this._loadQueueBackup[i].getItem());
			}

			this.loadManifest(a, false);
		};

		/**
		 * Register a plugin. Plugins can map to load types (sound, image, etc), or specific extensions (png, mp3, etc).
		 * Currently, only one plugin can exist per type/extension.
		 *
		 * When a plugin is installed, a <code>getPreloadHandlers()</code> method will be called on it. For more information
		 * on this method, check out the {{#crossLink "SamplePlugin/getPreloadHandlers"}}{{/crossLink}} method in the
		 * {{#crossLink "SamplePlugin"}}{{/crossLink}} class.
		 *
		 * Before a file is loaded, a matching plugin has an opportunity to modify the load. If a `callback` is returned
		 * from the {{#crossLink "SamplePlugin/getPreloadHandlers"}}{{/crossLink}} method, it will be invoked first, and its
		 * result may cancel or modify the item. The callback method can also return a `completeHandler` to be fired when
		 * the file is loaded, or a `tag` object, which will manage the actual download. For more information on these
		 * methods, check out the {{#crossLink "SamplePlugin/preloadHandler"}}{{/crossLink}} and {{#crossLink "SamplePlugin/fileLoadHandler"}}{{/crossLink}}
		 * methods on the {{#crossLink "SamplePlugin"}}{{/crossLink}}.
		 *
		 * @method installPlugin
		 * @param {Function} plugin The plugin class to install.
		 */
		p.installPlugin = function (plugin) {
			if (plugin == null) {
				return;
			}

			if (plugin.getPreloadHandlers != null) {
				this._plugins.push(plugin);
				var map = plugin.getPreloadHandlers();
				map.scope = plugin;

				if (map.types != null) {
					for (var i = 0, l = map.types.length; i < l; i++) {
						this._typeCallbacks[map.types[i]] = map;
					}
				}

				if (map.extensions != null) {
					for (i = 0, l = map.extensions.length; i < l; i++) {
						this._extensionCallbacks[map.extensions[i]] = map;
					}
				}
			}
		};

		/**
		 * Set the maximum number of concurrent connections. Note that browsers and servers may have a built-in maximum
		 * number of open connections, so any additional connections may remain in a pending state until the browser
		 * opens the connection. When loading scripts using tags, and when {{#crossLink "LoadQueue/maintainScriptOrder:property"}}{{/crossLink}}
		 * is `true`, only one script is loaded at a time due to browser limitations.
		 *
		 * <h4>Example</h4>
		 *
		 *      var queue = new createjs.LoadQueue();
		 *      queue.setMaxConnections(10); // Allow 10 concurrent loads
		 *
		 * @method setMaxConnections
		 * @param {Number} value The number of concurrent loads to allow. By default, only a single connection per LoadQueue
		 * is open at any time.
		 */
		p.setMaxConnections = function (value) {
			this._maxConnections = value;
			if (!this._paused && this._loadQueue.length > 0) {
				this._loadNext();
			}
		};

		/**
		 * Load a single file. To add multiple files at once, use the {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}
		 * method.
		 *
		 * Files are always appended to the current queue, so this method can be used multiple times to add files.
		 * To clear the queue first, use the {{#crossLink "AbstractLoader/close"}}{{/crossLink}} method.
		 * @method loadFile
		 * @param {LoadItem|Object|String} file The file object or path to load. A file can be either
		 * <ul>
		 *     <li>A {{#crossLink "LoadItem"}}{{/crossLink}} instance</li>
		 *     <li>An object containing properties defined by {{#crossLink "LoadItem"}}{{/crossLink}}</li>
		 *     <li>OR A string path to a resource. Note that this kind of load item will be converted to a {{#crossLink "LoadItem"}}{{/crossLink}}
		 *     in the background.</li>
		 * </ul>
		 * @param {Boolean} [loadNow=true] Kick off an immediate load (true) or wait for a load call (false). The default
		 * value is true. If the queue is paused using {{#crossLink "LoadQueue/setPaused"}}{{/crossLink}}, and the value is
		 * `true`, the queue will resume automatically.
		 * @param {String} [basePath] A base path that will be prepended to each file. The basePath argument overrides the
		 * path specified in the constructor. Note that if you load a manifest using a file of type {{#crossLink "AbstractLoader/MANIFEST:property"}}{{/crossLink}},
		 * its files will <strong>NOT</strong> use the basePath parameter. <strong>The basePath parameter is deprecated.</strong>
		 * This parameter will be removed in a future version. Please either use the `basePath` parameter in the LoadQueue
		 * constructor, or a `path` property in a manifest definition.
		 */
		p.loadFile = function (file, loadNow, basePath) {
			if (file == null) {
				var event = new createjs.ErrorEvent("PRELOAD_NO_FILE");
				this._sendError(event);
				return;
			}
			this._addItem(file, null, basePath);

			if (loadNow !== false) {
				this.setPaused(false);
			} else {
				this.setPaused(true);
			}
		};

		/**
		 * Load an array of files. To load a single file, use the {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} method.
		 * The files in the manifest are requested in the same order, but may complete in a different order if the max
		 * connections are set above 1 using {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}}. Scripts will load
		 * in the right order as long as {{#crossLink "LoadQueue/maintainScriptOrder"}}{{/crossLink}} is true (which is
		 * default).
		 *
		 * Files are always appended to the current queue, so this method can be used multiple times to add files.
		 * To clear the queue first, use the {{#crossLink "AbstractLoader/close"}}{{/crossLink}} method.
		 * @method loadManifest
		 * @param {Array|String|Object} manifest An list of files to load. The loadManifest call supports four types of
		 * manifests:
		 * <ol>
		 *     <li>A string path, which points to a manifest file, which is a JSON file that contains a "manifest" property,
		 *     which defines the list of files to load, and can optionally contain a "path" property, which will be
		 *     prepended to each file in the list.</li>
		 *     <li>An object which defines a "src", which is a JSON or JSONP file. A "callback" can be defined for JSONP
		 *     file. The JSON/JSONP file should contain a "manifest" property, which defines the list of files to load,
		 *     and can optionally contain a "path" property, which will be prepended to each file in the list.</li>
		 *     <li>An object which contains a "manifest" property, which defines the list of files to load, and can
		 *     optionally contain a "path" property, which will be prepended to each file in the list.</li>
		 *     <li>An Array of files to load.</li>
		 * </ol>
		 *
		 * Each "file" in a manifest can be either:
		 * <ul>
		 *     <li>A {{#crossLink "LoadItem"}}{{/crossLink}} instance</li>
		 *     <li>An object containing properties defined by {{#crossLink "LoadItem"}}{{/crossLink}}</li>
		 *     <li>OR A string path to a resource. Note that this kind of load item will be converted to a {{#crossLink "LoadItem"}}{{/crossLink}}
		 *     in the background.</li>
		 * </ul>
		 *
		 * @param {Boolean} [loadNow=true] Kick off an immediate load (true) or wait for a load call (false). The default
		 * value is true. If the queue is paused using {{#crossLink "LoadQueue/setPaused"}}{{/crossLink}} and this value is
		 * `true`, the queue will resume automatically.
		 * @param {String} [basePath] A base path that will be prepended to each file. The basePath argument overrides the
		 * path specified in the constructor. Note that if you load a manifest using a file of type {{#crossLink "LoadQueue/MANIFEST:property"}}{{/crossLink}},
		 * its files will <strong>NOT</strong> use the basePath parameter. <strong>The basePath parameter is deprecated.</strong>
		 * This parameter will be removed in a future version. Please either use the `basePath` parameter in the LoadQueue
		 * constructor, or a `path` property in a manifest definition.
		 */
		p.loadManifest = function (manifest, loadNow, basePath) {
			var fileList = null;
			var path = null;

			// Array-based list of items
			if (Array.isArray(manifest)) {
				if (manifest.length == 0) {
					var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
					this._sendError(event);
					return;
				}
				fileList = manifest;

				// String-based. Only file manifests can be specified this way. Any other types will cause an error when loaded.
			} else if (typeof(manifest) === "string") {
				fileList = [
					{
						src: manifest,
						type: s.MANIFEST
					}
				];

			} else if (typeof(manifest) == "object") {

				// An object that defines a manifest path
				if (manifest.src !== undefined) {
					if (manifest.type == null) {
						manifest.type = s.MANIFEST;
					} else if (manifest.type != s.MANIFEST) {
						var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
						this._sendError(event);
					}
					fileList = [manifest];

					// An object that defines a manifest
				} else if (manifest.manifest !== undefined) {
					fileList = manifest.manifest;
					path = manifest.path;
				}

				// Unsupported. This will throw an error.
			} else {
				var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
				this._sendError(event);
				return;
			}

			for (var i = 0, l = fileList.length; i < l; i++) {
				this._addItem(fileList[i], path, basePath);
			}

			if (loadNow !== false) {
				this.setPaused(false);
			} else {
				this.setPaused(true);
			}

		};

		/**
		 * Start a LoadQueue that was created, but not automatically started.
		 * @method load
		 */
		p.load = function () {
			this.setPaused(false);
		};

		/**
		 * Look up a {{#crossLink "LoadItem"}}{{/crossLink}} using either the "id" or "src" that was specified when loading it. Note that if no "id" was
		 * supplied with the load item, the ID will be the "src", including a `path` property defined by a manifest. The
		 * `basePath` will not be part of the ID.
		 * @method getItem
		 * @param {String} value The <code>id</code> or <code>src</code> of the load item.
		 * @return {Object} The load item that was initially requested using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}}
		 * or {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}. This object is also returned via the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}}
		 * event as the `item` parameter.
		 */
		p.getItem = function (value) {
			return this._loadItemsById[value] || this._loadItemsBySrc[value];
		};

		/**
		 * Look up a loaded result using either the "id" or "src" that was specified when loading it. Note that if no "id"
		 * was supplied with the load item, the ID will be the "src", including a `path` property defined by a manifest. The
		 * `basePath` will not be part of the ID.
		 * @method getResult
		 * @param {String} value The <code>id</code> or <code>src</code> of the load item.
		 * @param {Boolean} [rawResult=false] Return a raw result instead of a formatted result. This applies to content
		 * loaded via XHR such as scripts, XML, CSS, and Images. If there is no raw result, the formatted result will be
		 * returned instead.
		 * @return {Object} A result object containing the content that was loaded, such as:
		 * <ul>
		 *      <li>An image tag (&lt;image /&gt;) for images</li>
		 *      <li>A script tag for JavaScript (&lt;script /&gt;). Note that scripts are automatically added to the HTML
		 *      DOM.</li>
		 *      <li>A style tag for CSS (&lt;style /&gt; or &lt;link &gt;)</li>
		 *      <li>Raw text for TEXT</li>
		 *      <li>A formatted JavaScript object defined by JSON</li>
		 *      <li>An XML document</li>
		 *      <li>A binary arraybuffer loaded by XHR</li>
		 *      <li>An audio tag (&lt;audio &gt;) for HTML audio. Note that it is recommended to use SoundJS APIs to play
		 *      loaded audio. Specifically, audio loaded by Flash and WebAudio will return a loader object using this method
		 *      which can not be used to play audio back.</li>
		 * </ul>
		 * This object is also returned via the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event as the 'item`
		 * parameter. Note that if a raw result is requested, but not found, the result will be returned instead.
		 */
		p.getResult = function (value, rawResult) {
			var item = this._loadItemsById[value] || this._loadItemsBySrc[value];
			if (item == null) {
				return null;
			}
			var id = item.id;
			if (rawResult && this._loadedRawResults[id]) {
				return this._loadedRawResults[id];
			}
			return this._loadedResults[id];
		};

		/**
		 * Generate an list of items loaded by this queue.
		 * @method getItems
		 * @param {Boolean} loaded Determines if only items that have been loaded should be returned. If false, in-progress
		 * and failed load items will also be included.
		 * @returns {Array} A list of objects that have been loaded. Each item includes the {{#crossLink "LoadItem"}}{{/crossLink}},
		 * result, and rawResult.
		 * @since 0.6.0
		 */
		p.getItems = function (loaded) {
			var arr = [];
			for (var n in this._loadItemsById) {
				var item = this._loadItemsById[n];
				var result = this.getResult(n);
				if (loaded === true && result == null) {
					continue;
				}
				arr.push({
					item: item,
					result: result,
					rawResult: this.getResult(n, true)
				});
			}
			return arr;
		};

		/**
		 * Pause or resume the current load. Active loads will not be cancelled, but the next items in the queue will not
		 * be processed when active loads complete. LoadQueues are not paused by default.
		 *
		 * Note that if new items are added to the queue using {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} or
		 * {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}, a paused queue will be resumed, unless the `loadNow`
		 * argument is `false`.
		 * @method setPaused
		 * @param {Boolean} value Whether the queue should be paused or not.
		 */
		p.setPaused = function (value) {
			this._paused = value;
			if (!this._paused) {
				this._loadNext();
			}
		};

		/**
		 * Close the active queue. Closing a queue completely empties the queue, and prevents any remaining items from
		 * starting to download. Note that currently any active loads will remain open, and events may be processed.
		 *
		 * To stop and restart a queue, use the {{#crossLink "LoadQueue/setPaused"}}{{/crossLink}} method instead.
		 * @method close
		 */
		p.close = function () {
			while (this._currentLoads.length) {
				this._currentLoads.pop().cancel();
			}
			this._scriptOrder.length = 0;
			this._loadedScripts.length = 0;
			this.loadStartWasDispatched = false;
			this._itemCount = 0;
			this._lastProgress = NaN;
		};

	// protected methods
		/**
		 * Add an item to the queue. Items are formatted into a usable object containing all the properties necessary to
		 * load the content. The load queue is populated with the loader instance that handles preloading, and not the load
		 * item that was passed in by the user. To look up the load item by id or src, use the {{#crossLink "LoadQueue.getItem"}}{{/crossLink}}
		 * method.
		 * @method _addItem
		 * @param {String|Object} value The item to add to the queue.
		 * @param {String} [path] An optional path prepended to the `src`. The path will only be prepended if the src is
		 * relative, and does not start with a protocol such as `http://`, or a path like `../`. If the LoadQueue was
		 * provided a {{#crossLink "_basePath"}}{{/crossLink}}, then it will optionally be prepended after.
		 * @param {String} [basePath] <strong>Deprecated</strong>An optional basePath passed into a {{#crossLink "LoadQueue/loadManifest"}}{{/crossLink}}
		 * or {{#crossLink "LoadQueue/loadFile"}}{{/crossLink}} call. This parameter will be removed in a future tagged
		 * version.
		 * @private
		 */
		p._addItem = function (value, path, basePath) {
			var item = this._createLoadItem(value, path, basePath); // basePath and manifest path are added to the src.
			if (item == null) {
				return;
			} // Sometimes plugins or types should be skipped.
			var loader = this._createLoader(item);
			if (loader != null) {
				if ("plugins" in loader) {
					loader.plugins = this._plugins;
				}
				item._loader = loader;
				this._loadQueue.push(loader);
				this._loadQueueBackup.push(loader);

				this._numItems++;
				this._updateProgress();

				// Only worry about script order when using XHR to load scripts. Tags are only loading one at a time.
				if ((this.maintainScriptOrder
						&& item.type == createjs.LoadQueue.JAVASCRIPT
							//&& loader instanceof createjs.XHRLoader //NOTE: Have to track all JS files this way
						)
						|| item.maintainOrder === true) {
					this._scriptOrder.push(item);
					this._loadedScripts.push(null);
				}
			}
		};

		/**
		 * Create a refined {{#crossLink "LoadItem"}}{{/crossLink}}, which contains all the required properties. The type of
		 * item is determined by browser support, requirements based on the file type, and developer settings. For example,
		 * XHR is only used for file types that support it in new browsers.
		 *
		 * Before the item is returned, any plugins registered to handle the type or extension will be fired, which may
		 * alter the load item.
		 * @method _createLoadItem
		 * @param {String | Object | HTMLAudioElement | HTMLImageElement} value The item that needs to be preloaded.
		 * @param {String} [path] A path to prepend to the item's source. Sources beginning with http:// or similar will
		 * not receive a path. Since PreloadJS 0.4.1, the src will be modified to include the `path` and {{#crossLink "LoadQueue/_basePath:property"}}{{/crossLink}}
		 * when it is added.
		 * @param {String} [basePath] <strong>Deprectated</strong> A base path to prepend to the items source in addition to
		 * the path argument.
		 * @return {Object} The loader instance that will be used.
		 * @private
		 */
		p._createLoadItem = function (value, path, basePath) {
			var item = createjs.LoadItem.create(value);
			if (item == null) {
				return null;
			}

			var bp = ""; // Store the generated basePath
			var useBasePath = basePath || this._basePath;

			if (item.src instanceof Object) {
				if (!item.type) {
					return null;
				} // the the src is an object, type is required to pass off to plugin
				if (path) {
					bp = path;
					var pathMatch = createjs.RequestUtils.parseURI(path);
					// Also append basePath
					if (useBasePath != null && !pathMatch.absolute && !pathMatch.relative) {
						bp = useBasePath + bp;
					}
				} else if (useBasePath != null) {
					bp = useBasePath;
				}
			} else {
				// Determine Extension, etc.
				var match = createjs.RequestUtils.parseURI(item.src);
				if (match.extension) {
					item.ext = match.extension;
				}
				if (item.type == null) {
					item.type = createjs.RequestUtils.getTypeByExtension(item.ext);
				}

				// Inject path & basePath
				var autoId = item.src;
				if (!match.absolute && !match.relative) {
					if (path) {
						bp = path;
						var pathMatch = createjs.RequestUtils.parseURI(path);
						autoId = path + autoId;
						// Also append basePath
						if (useBasePath != null && !pathMatch.absolute && !pathMatch.relative) {
							bp = useBasePath + bp;
						}
					} else if (useBasePath != null) {
						bp = useBasePath;
					}
				}
				item.src = bp + item.src;
			}
			item.path = bp;

			// If there's no id, set one now.
			if (item.id === undefined || item.id === null || item.id === "") {
				item.id = autoId;
			}

			// Give plugins a chance to modify the loadItem:
			var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
			if (customHandler) {
				// Plugins are now passed both the full source, as well as a combined path+basePath (appropriately)
				var result = customHandler.callback.call(customHandler.scope, item, this);

				// The plugin will handle the load, or has canceled it. Ignore it.
				if (result === false) {
					return null;

					// Load as normal:
				} else if (result === true) {
					// Do Nothing

					// Result is a loader class:
				} else if (result != null) {
					item._loader = result;
				}

				// Update the extension in case the type changed:
				match = createjs.RequestUtils.parseURI(item.src);
				if (match.extension != null) {
					item.ext = match.extension;
				}
			}

			// Store the item for lookup. This also helps clean-up later.
			this._loadItemsById[item.id] = item;
			this._loadItemsBySrc[item.src] = item;

			if (item.crossOrigin == null) {
				item.crossOrigin = this._crossOrigin;
			}

			return item;
		};

		/**
		 * Create a loader for a load item.
		 * @method _createLoader
		 * @param {Object} item A formatted load item that can be used to generate a loader.
		 * @return {AbstractLoader} A loader that can be used to load content.
		 * @private
		 */
		p._createLoader = function (item) {
			if (item._loader != null) { // A plugin already specified a loader
				return item._loader;
			}

			// Initially, try and use the provided/supported XHR mode:
			var preferXHR = this.preferXHR;

			for (var i = 0; i < this._availableLoaders.length; i++) {
				var loader = this._availableLoaders[i];
				if (loader && loader.canLoadItem(item)) {
					return new loader(item, preferXHR);
				}
			}

			// TODO: Log error (requires createjs.log)
			return null;
		};

		/**
		 * Load the next item in the queue. If the queue is empty (all items have been loaded), then the complete event
		 * is processed. The queue will "fill up" any empty slots, up to the max connection specified using
		 * {{#crossLink "LoadQueue.setMaxConnections"}}{{/crossLink}} method. The only exception is scripts that are loaded
		 * using tags, which have to be loaded one at a time to maintain load order.
		 * @method _loadNext
		 * @private
		 */
		p._loadNext = function () {
			if (this._paused) {
				return;
			}

			// Only dispatch loadstart event when the first file is loaded.
			if (!this._loadStartWasDispatched) {
				this._sendLoadStart();
				this._loadStartWasDispatched = true;
			}

			// The queue has completed.
			if (this._numItems == this._numItemsLoaded) {
				this.loaded = true;
				this._sendComplete();

				// Load the next queue, if it has been defined.
				if (this.next && this.next.load) {
					this.next.load();
				}
			} else {
				this.loaded = false;
			}

			// Must iterate forwards to load in the right order.
			for (var i = 0; i < this._loadQueue.length; i++) {
				if (this._currentLoads.length >= this._maxConnections) {
					break;
				}
				var loader = this._loadQueue[i];

				// Determine if we should be only loading one tag-script at a time:
				// Note: maintainOrder items don't do anything here because we can hold onto their loaded value
				if (!this._canStartLoad(loader)) {
					continue;
				}
				this._loadQueue.splice(i, 1);
				i--;
				this._loadItem(loader);
			}
		};

		/**
		 * Begin loading an item. Event listeners are not added to the loaders until the load starts.
		 * @method _loadItem
		 * @param {AbstractLoader} loader The loader instance to start. Currently, this will be an XHRLoader or TagLoader.
		 * @private
		 */
		p._loadItem = function (loader) {
			loader.on("fileload", this._handleFileLoad, this);
			loader.on("progress", this._handleProgress, this);
			loader.on("complete", this._handleFileComplete, this);
			loader.on("error", this._handleError, this);
			loader.on("fileerror", this._handleFileError, this);
			this._currentLoads.push(loader);
			this._sendFileStart(loader.getItem());
			loader.load();
		};

		/**
		 * The callback that is fired when a loader loads a file. This enables loaders like {{#crossLink "ManifestLoader"}}{{/crossLink}}
		 * to maintain internal queues, but for this queue to dispatch the {{#crossLink "fileload:event"}}{{/crossLink}}
		 * events.
		 * @param {Event} event The {{#crossLink "AbstractLoader/fileload:event"}}{{/crossLink}} event from the loader.
		 * @private
		 * @since 0.6.0
		 */
		p._handleFileLoad = function (event) {
			event.target = null;
			this.dispatchEvent(event);
		};

		/**
		 * The callback that is fired when a loader encounters an error from an internal file load operation. This enables
		 * loaders like M
		 * @param event
		 * @private
		 */
		p._handleFileError = function (event) {
			var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, event.item);
			this._sendError(newEvent);
		};

		/**
		 * The callback that is fired when a loader encounters an error. The queue will continue loading unless {{#crossLink "LoadQueue/stopOnError:property"}}{{/crossLink}}
		 * is set to `true`.
		 * @method _handleError
		 * @param {ErrorEvent} event The error event, containing relevant error information.
		 * @private
		 */
		p._handleError = function (event) {
			var loader = event.target;
			this._numItemsLoaded++;

			this._finishOrderedItem(loader, true);
			this._updateProgress();

			var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, loader.getItem());
			// TODO: Propagate actual error message.

			this._sendError(newEvent);

			if (!this.stopOnError) {
				this._removeLoadItem(loader);
				this._cleanLoadItem(loader);
				this._loadNext();
			} else {
				this.setPaused(true);
			}
		};

		/**
		 * An item has finished loading. We can assume that it is totally loaded, has been parsed for immediate use, and
		 * is available as the "result" property on the load item. The raw text result for a parsed item (such as JSON, XML,
		 * CSS, JavaScript, etc) is available as the "rawResult" property, and can also be looked up using {{#crossLink "LoadQueue/getResult"}}{{/crossLink}}.
		 * @method _handleFileComplete
		 * @param {Event} event The event object from the loader.
		 * @private
		 */
		p._handleFileComplete = function (event) {
			var loader = event.target;
			var item = loader.getItem();

			var result = loader.getResult();
			this._loadedResults[item.id] = result;
			var rawResult = loader.getResult(true);
			if (rawResult != null && rawResult !== result) {
				this._loadedRawResults[item.id] = rawResult;
			}

			this._saveLoadedItems(loader);

			// Remove the load item
			this._removeLoadItem(loader);

			if (!this._finishOrderedItem(loader)) {
				// The item was NOT managed, so process it now
				this._processFinishedLoad(item, loader);
			}

			// Clean up the load item
			this._cleanLoadItem(loader);
		};

		/**
		 * Some loaders might load additional content, other than the item they were passed (such as {{#crossLink "ManifestLoader"}}{{/crossLink}}).
		 * Any items exposed by the loader using {{#crossLink "AbstractLoader/getLoadItems"}}{{/crossLink}} are added to the
		 * LoadQueue's look-ups, including {{#crossLink "getItem"}}{{/crossLink}} and {{#crossLink "getResult"}}{{/crossLink}}
		 * methods.
		 * @method _saveLoadedItems
		 * @param {AbstractLoader} loader
		 * @protected
		 * @since 0.6.0
		 */
		p._saveLoadedItems = function (loader) {
			// TODO: Not sure how to handle this. Would be nice to expose the items.
			// Loaders may load sub-items. This adds them to this queue
			var list = loader.getLoadedItems();
			if (list === null) {
				return;
			}

			for (var i = 0; i < list.length; i++) {
				var item = list[i].item;

				// Store item lookups
				this._loadItemsBySrc[item.src] = item;
				this._loadItemsById[item.id] = item;

				// Store loaded content
				this._loadedResults[item.id] = list[i].result;
				this._loadedRawResults[item.id] = list[i].rawResult;
			}
		};

		/**
		 * Flag an item as finished. If the item's order is being managed, then ensure that it is allowed to finish, and if
		 * so, trigger prior items to trigger as well.
		 * @method _finishOrderedItem
		 * @param {AbstractLoader} loader
		 * @param {Boolean} loadFailed
		 * @return {Boolean} If the item's order is being managed. This allows the caller to take an alternate
		 * behaviour if it is.
		 * @private
		 */
		p._finishOrderedItem = function (loader, loadFailed) {
			var item = loader.getItem();

			if ((this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT)
					|| item.maintainOrder) {

				//TODO: Evaluate removal of the _currentlyLoadingScript
				if (loader instanceof createjs.JavaScriptLoader) {
					this._currentlyLoadingScript = false;
				}

				var index = createjs.indexOf(this._scriptOrder, item);
				if (index == -1) {
					return false;
				} // This loader no longer exists
				this._loadedScripts[index] = (loadFailed === true) ? true : item;

				this._checkScriptLoadOrder();
				return true;
			}

			return false;
		};

		/**
		 * Ensure the scripts load and dispatch in the correct order. When using XHR, scripts are stored in an array in the
		 * order they were added, but with a "null" value. When they are completed, the value is set to the load item,
		 * and then when they are processed and dispatched, the value is set to `true`. This method simply
		 * iterates the array, and ensures that any loaded items that are not preceded by a `null` value are
		 * dispatched.
		 * @method _checkScriptLoadOrder
		 * @private
		 */
		p._checkScriptLoadOrder = function () {
			var l = this._loadedScripts.length;

			for (var i = 0; i < l; i++) {
				var item = this._loadedScripts[i];
				if (item === null) {
					break;
				} // This is still loading. Do not process further.
				if (item === true) {
					continue;
				} // This has completed, and been processed. Move on.

				var loadItem = this._loadedResults[item.id];
				if (item.type == createjs.LoadQueue.JAVASCRIPT) {
					// Append script tags to the head automatically.
					createjs.DomUtils.appendToHead(loadItem);
				}

				var loader = item._loader;
				this._processFinishedLoad(item, loader);
				this._loadedScripts[i] = true;
			}
		};

		/**
		 * A file has completed loading, and the LoadQueue can move on. This triggers the complete event, and kick-starts
		 * the next item.
		 * @method _processFinishedLoad
		 * @param {LoadItem|Object} item
		 * @param {AbstractLoader} loader
		 * @protected
		 */
		p._processFinishedLoad = function (item, loader) {
			this._numItemsLoaded++;

			// Since LoadQueue needs maintain order, we can't append scripts in the loader.
			// So we do it here instead. Or in _checkScriptLoadOrder();
			if (!this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT) {
				var tag = loader.getTag();
				createjs.DomUtils.appendToHead(tag);
			}

			this._updateProgress();
			this._sendFileComplete(item, loader);
			this._loadNext();
		};

		/**
		 * Ensure items with `maintainOrder=true` that are before the specified item have loaded. This only applies to
		 * JavaScript items that are being loaded with a TagLoader, since they have to be loaded and completed <strong>before</strong>
		 * the script can even be started, since it exist in the DOM while loading.
		 * @method _canStartLoad
		 * @param {AbstractLoader} loader The loader for the item
		 * @return {Boolean} Whether the item can start a load or not.
		 * @private
		 */
		p._canStartLoad = function (loader) {
			if (!this.maintainScriptOrder || loader.preferXHR) {
				return true;
			}
			var item = loader.getItem();
			if (item.type != createjs.LoadQueue.JAVASCRIPT) {
				return true;
			}
			if (this._currentlyLoadingScript) {
				return false;
			}

			var index = this._scriptOrder.indexOf(item);
			var i = 0;
			while (i < index) {
				var checkItem = this._loadedScripts[i];
				if (checkItem == null) {
					return false;
				}
				i++;
			}
			this._currentlyLoadingScript = true;
			return true;
		};

		/**
		 * A load item is completed or was canceled, and needs to be removed from the LoadQueue.
		 * @method _removeLoadItem
		 * @param {AbstractLoader} loader A loader instance to remove.
		 * @private
		 */
		p._removeLoadItem = function (loader) {
			var l = this._currentLoads.length;
			for (var i = 0; i < l; i++) {
				if (this._currentLoads[i] == loader) {
					this._currentLoads.splice(i, 1);
					break;
				}
			}
		};

		/**
		 * Remove unneeded references from a loader.
		 *
		 * @param loader
		 * @private
		 */
		p._cleanLoadItem = function(loader) {
			var item = loader.getItem();
			if (item) {
				delete item._loader;
			}
		}

		/**
		 * An item has dispatched progress. Propagate that progress, and update the LoadQueue's overall progress.
		 * @method _handleProgress
		 * @param {ProgressEvent} event The progress event from the item.
		 * @private
		 */
		p._handleProgress = function (event) {
			var loader = event.target;
			this._sendFileProgress(loader.getItem(), loader.progress);
			this._updateProgress();
		};

		/**
		 * Overall progress has changed, so determine the new progress amount and dispatch it. This changes any time an
		 * item dispatches progress or completes. Note that since we don't always know the actual filesize of items before
		 * they are loaded. In this case, we define a "slot" for each item (1 item in 10 would get 10%), and then append
		 * loaded progress on top of the already-loaded items.
		 *
		 * For example, if 5/10 items have loaded, and item 6 is 20% loaded, the total progress would be:
		 * <ul>
		 *      <li>5/10 of the items in the queue (50%)</li>
		 *      <li>plus 20% of item 6's slot (2%)</li>
		 *      <li>equals 52%</li>
		 * </ul>
		 * @method _updateProgress
		 * @private
		 */
		p._updateProgress = function () {
			var loaded = this._numItemsLoaded / this._numItems; // Fully Loaded Progress
			var remaining = this._numItems - this._numItemsLoaded;
			if (remaining > 0) {
				var chunk = 0;
				for (var i = 0, l = this._currentLoads.length; i < l; i++) {
					chunk += this._currentLoads[i].progress;
				}
				loaded += (chunk / remaining) * (remaining / this._numItems);
			}

			if (this._lastProgress != loaded) {
				this._sendProgress(loaded);
				this._lastProgress = loaded;
			}
		};

		/**
		 * Clean out item results, to free them from memory. Mainly, the loaded item and results are cleared from internal
		 * hashes.
		 * @method _disposeItem
		 * @param {LoadItem|Object} item The item that was passed in for preloading.
		 * @private
		 */
		p._disposeItem = function (item) {
			delete this._loadedResults[item.id];
			delete this._loadedRawResults[item.id];
			delete this._loadItemsById[item.id];
			delete this._loadItemsBySrc[item.src];
		};

		/**
		 * Dispatch a "fileprogress" {{#crossLink "Event"}}{{/crossLink}}. Please see the LoadQueue {{#crossLink "LoadQueue/fileprogress:event"}}{{/crossLink}}
		 * event for details on the event payload.
		 * @method _sendFileProgress
		 * @param {LoadItem|Object} item The item that is being loaded.
		 * @param {Number} progress The amount the item has been loaded (between 0 and 1).
		 * @protected
		 */
		p._sendFileProgress = function (item, progress) {
			if (this._isCanceled() || this._paused) {
				return;
			}
			if (!this.hasEventListener("fileprogress")) {
				return;
			}

			//LM: Rework ProgressEvent to support this?
			var event = new createjs.Event("fileprogress");
			event.progress = progress;
			event.loaded = progress;
			event.total = 1;
			event.item = item;

			this.dispatchEvent(event);
		};

		/**
		 * Dispatch a fileload {{#crossLink "Event"}}{{/crossLink}}. Please see the {{#crossLink "LoadQueue/fileload:event"}}{{/crossLink}} event for
		 * details on the event payload.
		 * @method _sendFileComplete
		 * @param {LoadItemObject} item The item that is being loaded.
		 * @param {AbstractLoader} loader
		 * @protected
		 */
		p._sendFileComplete = function (item, loader) {
			if (this._isCanceled() || this._paused) {
				return;
			}

			var event = new createjs.Event("fileload");
			event.loader = loader;
			event.item = item;
			event.result = this._loadedResults[item.id];
			event.rawResult = this._loadedRawResults[item.id];

			// This calls a handler specified on the actual load item. Currently, the SoundJS plugin uses this.
			if (item.completeHandler) {
				item.completeHandler(event);
			}

			this.hasEventListener("fileload") && this.dispatchEvent(event);
		};

		/**
		 * Dispatch a filestart {{#crossLink "Event"}}{{/crossLink}} immediately before a file starts to load. Please see
		 * the {{#crossLink "LoadQueue/filestart:event"}}{{/crossLink}} event for details on the event payload.
		 * @method _sendFileStart
		 * @param {LoadItem|Object} item The item that is being loaded.
		 * @protected
		 */
		p._sendFileStart = function (item) {
			var event = new createjs.Event("filestart");
			event.item = item;
			this.hasEventListener("filestart") && this.dispatchEvent(event);
		};

		p.toString = function () {
			return "[PreloadJS LoadQueue]";
		};

		createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader");
	}());

	//##############################################################################
	// TextLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for Text files.
		 * @class TextLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function TextLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.TEXT);
		};

		var p = createjs.extend(TextLoader, createjs.AbstractLoader);
		var s = TextLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader loads items that are of type {{#crossLink "AbstractLoader/TEXT:property"}}{{/crossLink}},
		 * but is also the default loader if a file type can not be determined.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.TEXT;
		};

		createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader");

	}());

	//##############################################################################
	// BinaryLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for binary files. This is useful for loading web audio, or content that requires an ArrayBuffer.
		 * @class BinaryLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function BinaryLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.BINARY);
			this.on("initialize", this._updateXHR, this);
		};

		var p = createjs.extend(BinaryLoader, createjs.AbstractLoader);
		var s = BinaryLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/BINARY:property"}}{{/crossLink}}
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.BINARY;
		};

		// private methods
		/**
		 * Before the item loads, set the response type to "arraybuffer"
		 * @property _updateXHR
		 * @param {Event} event
		 * @private
		 */
		p._updateXHR = function (event) {
			event.loader.setResponseType("arraybuffer");
		};

		createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader");

	}());

	//##############################################################################
	// CSSLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for CSS files.
		 * @class CSSLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractLoader
		 * @constructor
		 */
		function CSSLoader(loadItem, preferXHR) {
			this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.CSS);

			// public properties
			this.resultFormatter = this._formatResult;

			// protected properties
			this._tagSrcAttribute = "href";

			if (preferXHR) {
				this._tag = document.createElement("style");
			} else {
				this._tag = document.createElement("link");
			}

			this._tag.rel = "stylesheet";
			this._tag.type = "text/css";
		};

		var p = createjs.extend(CSSLoader, createjs.AbstractLoader);
		var s = CSSLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/CSS:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.CSS;
		};

		// protected methods
		/**
		 * The result formatter for CSS files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {HTMLLinkElement|HTMLStyleElement}
		 * @private
		 */
		p._formatResult = function (loader) {
			if (this._preferXHR) {
				var tag = loader.getTag();

				if (tag.styleSheet) { // IE
					tag.styleSheet.cssText = loader.getResult(true);
				} else {
					var textNode = document.createTextNode(loader.getResult(true));
					tag.appendChild(textNode);
				}
			} else {
				tag = this._tag;
			}

			createjs.DomUtils.appendToHead(tag);

			return tag;
		};

		createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader");

	}());

	//##############################################################################
	// ImageLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for image files.
		 * @class ImageLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractLoader
		 * @constructor
		 */
		function ImageLoader (loadItem, preferXHR) {
			this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.IMAGE);

			// public properties
			this.resultFormatter = this._formatResult;

			// protected properties
			this._tagSrcAttribute = "src";

			// Check if the preload item is already a tag.
			if (createjs.RequestUtils.isImageTag(loadItem)) {
				this._tag = loadItem;
			} else if (createjs.RequestUtils.isImageTag(loadItem.src)) {
				this._tag = loadItem.src;
			} else if (createjs.RequestUtils.isImageTag(loadItem.tag)) {
				this._tag = loadItem.tag;
			}

			if (this._tag != null) {
				this._preferXHR = false;
			} else {
				this._tag = document.createElement("img");
			}

			this.on("initialize", this._updateXHR, this);
		};

		var p = createjs.extend(ImageLoader, createjs.AbstractLoader);
		var s = ImageLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/IMAGE:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.IMAGE;
		};

		// public methods
		p.load = function () {
			if (this._tag.src != "" && this._tag.complete) {
				this._sendComplete();
				return;
			}

			var crossOrigin = this._item.crossOrigin;
			if (crossOrigin == true) { crossOrigin = "Anonymous"; }
			if (crossOrigin != null && !createjs.RequestUtils.isLocal(this._item.src)) {
				this._tag.crossOrigin = crossOrigin;
			}

			this.AbstractLoader_load();
		};

		// protected methods
		/**
		 * Before the item loads, set its mimeType and responseType.
		 * @property _updateXHR
		 * @param {Event} event
		 * @private
		 */
		p._updateXHR = function (event) {
			event.loader.mimeType = 'text/plain; charset=x-user-defined-binary';

			// Only exists for XHR
			if (event.loader.setResponseType) {
				event.loader.setResponseType("blob");
			}
		};

		/**
		 * The result formatter for Image files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {HTMLImageElement}
		 * @private
		 */
		p._formatResult = function (loader) {
			return this._formatImage;
		};

		/**
		 * The asynchronous image formatter function. This is required because images have
		 * a short delay before they are ready.
		 * @method _formatImage
		 * @param {Function} successCallback The method to call when the result has finished formatting
		 * @param {Function} errorCallback The method to call if an error occurs during formatting
		 * @private
		 */
		p._formatImage = function (successCallback, errorCallback) {
			var tag = this._tag;
			var URL = window.URL || window.webkitURL;

			if (!this._preferXHR) {
				//document.body.removeChild(tag);
			} else if (URL) {
				var objURL = URL.createObjectURL(this.getResult(true));
				tag.src = objURL;

				tag.addEventListener("load", this._cleanUpURL, false);
				tag.addEventListener("error", this._cleanUpURL, false);
			} else {
				tag.src = this._item.src;
			}

			if (tag.complete) {
				successCallback(tag);
			} else {
	            tag.onload = createjs.proxy(function() {
	                successCallback(this._tag);
	            }, this);

	            tag.onerror = createjs.proxy(function() {
	                errorCallback(_this._tag);
	            }, this);
			}
		};

		/**
		 * Clean up the ObjectURL, the tag is done with it. Note that this function is run
		 * as an event listener without a proxy/closure, as it doesn't require it - so do not
		 * include any functionality that requires scope without changing it.
		 * @method _cleanUpURL
		 * @param event
		 * @private
		 */
		p._cleanUpURL = function (event) {
			var URL = window.URL || window.webkitURL;
			URL.revokeObjectURL(event.target.src);
		};

		createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader");

	}());

	//##############################################################################
	// JavaScriptLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for JavaScript files.
		 * @class JavaScriptLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractLoader
		 * @constructor
		 */
		function JavaScriptLoader(loadItem, preferXHR) {
			this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.JAVASCRIPT);

			// public properties
			this.resultFormatter = this._formatResult;

			// protected properties
			this._tagSrcAttribute = "src";
			this.setTag(document.createElement("script"));
		};

		var p = createjs.extend(JavaScriptLoader, createjs.AbstractLoader);
		var s = JavaScriptLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/JAVASCRIPT:property"}}{{/crossLink}}
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.JAVASCRIPT;
		};

		// protected methods
		/**
		 * The result formatter for JavaScript files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {HTMLLinkElement|HTMLStyleElement}
		 * @private
		 */
		p._formatResult = function (loader) {
			var tag = loader.getTag();
			if (this._preferXHR) {
				tag.text = loader.getResult(true);
			}
			return tag;
		};

		createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader");

	}());

	//##############################################################################
	// JSONLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for JSON files. To load JSON cross-domain, use JSONP and the {{#crossLink "JSONPLoader"}}{{/crossLink}}
		 * instead. To load JSON-formatted manifests, use {{#crossLink "ManifestLoader"}}{{/crossLink}}, and to
		 * load EaselJS SpriteSheets, use {{#crossLink "SpriteSheetLoader"}}{{/crossLink}}.
		 * @class JSONLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function JSONLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.JSON);

			// public properties
			this.resultFormatter = this._formatResult;
		};

		var p = createjs.extend(JSONLoader, createjs.AbstractLoader);
		var s = JSONLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/JSON:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.JSON;
		};

		// protected methods
		/**
		 * The result formatter for JSON files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {HTMLLinkElement|HTMLStyleElement}
		 * @private
		 */
		p._formatResult = function (loader) {
			var json = null;
			try {
				json = createjs.DataUtils.parseJSON(loader.getResult(true));
			} catch (e) {
				var event = new createjs.ErrorEvent("JSON_FORMAT", null, e);
				this._sendError(event);
				return e;
			}

			return json;
		};

		createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader");

	}());

	//##############################################################################
	// JSONPLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for JSONP files, which are JSON-formatted text files, wrapped in a callback. To load regular JSON
		 * without a callback use the {{#crossLink "JSONLoader"}}{{/crossLink}} instead. To load JSON-formatted manifests,
		 * use {{#crossLink "ManifestLoader"}}{{/crossLink}}, and to load EaselJS SpriteSheets, use
		 * {{#crossLink "SpriteSheetLoader"}}{{/crossLink}}.
		 *
		 * JSONP is a format that provides a solution for loading JSON files cross-domain <em>without</em> requiring CORS.
		 * JSONP files are loaded as JavaScript, and the "callback" is executed once they are loaded. The callback in the
		 * JSONP must match the callback passed to the loadItem.
		 *
		 * <h4>Example JSONP</h4>
		 *
		 * 		callbackName({
		 * 			"name": "value",
		 *	 		"num": 3,
		 *			"obj": { "bool":true }
		 * 		});
		 *
		 * <h4>Example</h4>
		 *
		 * 		var loadItem = {id:"json", type:"jsonp", src:"http://server.com/text.json", callback:"callbackName"}
		 * 		var queue = new createjs.LoadQueue();
		 * 		queue.on("complete", handleComplete);
		 * 		queue.loadItem(loadItem);
		 *
		 * 		function handleComplete(event) }
		 * 			var json = queue.getResult("json");
		 * 			console.log(json.obj.bool); // true
		 * 		}
		 *
		 * Note that JSONP files loaded concurrently require a <em>unique</em> callback. To ensure JSONP files are loaded
		 * in order, either use the {{#crossLink "LoadQueue/setMaxConnections"}}{{/crossLink}} method (set to 1),
		 * or set {{#crossLink "LoadItem/maintainOrder:property"}}{{/crossLink}} on items with the same callback.
		 *
		 * @class JSONPLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function JSONPLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, false, createjs.AbstractLoader.JSONP);
			this.setTag(document.createElement("script"));
			this.getTag().type = "text/javascript";
		};

		var p = createjs.extend(JSONPLoader, createjs.AbstractLoader);
		var s = JSONPLoader;


		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/JSONP:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.JSONP;
		};

		// public methods
		p.cancel = function () {
			this.AbstractLoader_cancel();
			this._dispose();
		};

		/**
		 * Loads the JSONp file.  Because of the unique loading needs of JSONp
		 * we don't use the AbstractLoader.load() method.
		 *
		 * @method load
		 *
		 */
		p.load = function () {
			if (this._item.callback == null) {
				throw new Error('callback is required for loading JSONP requests.');
			}

			// TODO: Look into creating our own iFrame to handle the load
			// In the first attempt, FF did not get the result
			//   result instanceof Object did not work either
			//   so we would need to clone the result.
			if (window[this._item.callback] != null) {
				throw new Error(
					"JSONP callback '" +
					this._item.callback +
					"' already exists on window. You need to specify a different callback or re-name the current one.");
			}

			window[this._item.callback] = createjs.proxy(this._handleLoad, this);
			window.document.body.appendChild(this._tag);

			this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);

			// Load the tag
			this._tag.src = this._item.src;
		};

		// private methods
		/**
		 * Handle the JSONP callback, which is a public method defined on `window`.
		 * @method _handleLoad
		 * @param {Object} data The formatted JSON data.
		 * @private
		 */
		p._handleLoad = function (data) {
			this._result = this._rawResult = data;
			this._sendComplete();

			this._dispose();
		};

		/**
		 * The tag request has not loaded within the time specfied in loadTimeout.
		 * @method _handleError
		 * @param {Object} event The XHR error event.
		 * @private
		 */
		p._handleTimeout = function () {
			this._dispose();
			this.dispatchEvent(new createjs.ErrorEvent("timeout"));
		};

		/**
		 * Clean up the JSONP load. This clears out the callback and script tag that this loader creates.
		 * @method _dispose
		 * @private
		 */
		p._dispose = function () {
			window.document.body.removeChild(this._tag);
			delete window[this._item.callback];

			clearTimeout(this._loadTimeout);
		};

		createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader");

	}());

	//##############################################################################
	// ManifestLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for JSON manifests. Items inside the manifest are loaded before the loader completes. To load manifests
		 * using JSONP, specify a {{#crossLink "LoadItem/callback:property"}}{{/crossLink}} as part of the
		 * {{#crossLink "LoadItem"}}{{/crossLink}}.
		 *
		 * The list of files in the manifest must be defined on the top-level JSON object in a `manifest` property. This
		 * example shows a sample manifest definition, as well as how to to include a sub-manifest.
		 *
		 * 		{
		 * 			"path": "assets/",
		 *	 	    "manifest": [
		 *				"image.png",
		 *				{"src": "image2.png", "id":"image2"},
		 *				{"src": "sub-manifest.json", "type":"manifest", "callback":"jsonCallback"}
		 *	 	    ]
		 *	 	}
		 *
		 * When a ManifestLoader has completed loading, the parent loader (usually a {{#crossLink "LoadQueue"}}{{/crossLink}},
		 * but could also be another ManifestLoader) will inherit all the loaded items, so you can access them directly.
		 *
		 * Note that the {{#crossLink "JSONLoader"}}{{/crossLink}} and {{#crossLink "JSONPLoader"}}{{/crossLink}} are
		 * higher priority loaders, so manifests <strong>must</strong> set the {{#crossLink "LoadItem"}}{{/crossLink}}
		 * {{#crossLink "LoadItem/type:property"}}{{/crossLink}} property to {{#crossLink "AbstractLoader/MANIFEST:property"}}{{/crossLink}}.
		 * @class ManifestLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function ManifestLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, null, createjs.AbstractLoader.MANIFEST);

		// Public Properties
			/**
			 * An array of the plugins registered using {{#crossLink "LoadQueue/installPlugin"}}{{/crossLink}},
			 * used to pass plugins to new LoadQueues that may be created.
			 * @property _plugins
			 * @type {Array}
			 * @private
			 * @since 0.6.1
			 */
			this.plugins = null;


		// Protected Properties
			/**
			 * An internal {{#crossLink "LoadQueue"}}{{/crossLink}} that loads the contents of the manifest.
			 * @property _manifestQueue
			 * @type {LoadQueue}
			 * @private
			 */
			this._manifestQueue = null;
		};

		var p = createjs.extend(ManifestLoader, createjs.AbstractLoader);
		var s = ManifestLoader;

		// static properties
		/**
		 * The amount of progress that the manifest itself takes up.
		 * @property MANIFEST_PROGRESS
		 * @type {number}
		 * @default 0.25 (25%)
		 * @private
		 * @static
		 */
		s.MANIFEST_PROGRESS = 0.25;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/MANIFEST:property"}}{{/crossLink}}
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.MANIFEST;
		};

		// public methods
		p.load = function () {
			this.AbstractLoader_load();
		};

		// protected methods
		p._createRequest = function() {
			var callback = this._item.callback;
			if (callback != null) {
				this._request = new createjs.JSONPLoader(this._item);
			} else {
				this._request = new createjs.JSONLoader(this._item);
			}
		};

		p.handleEvent = function (event) {
			switch (event.type) {
				case "complete":
					this._rawResult = event.target.getResult(true);
					this._result = event.target.getResult();
					this._sendProgress(s.MANIFEST_PROGRESS);
					this._loadManifest(this._result);
					return;
				case "progress":
					event.loaded *= s.MANIFEST_PROGRESS;
					this.progress = event.loaded / event.total;
					if (isNaN(this.progress) || this.progress == Infinity) { this.progress = 0; }
					this._sendProgress(event);
					return;
			}
			this.AbstractLoader_handleEvent(event);
		};

		p.destroy = function() {
			this.AbstractLoader_destroy();
			this._manifestQueue.close();
		};

		/**
		 * Create and load the manifest items once the actual manifest has been loaded.
		 * @method _loadManifest
		 * @param {Object} json
		 * @private
		 */
		p._loadManifest = function (json) {
			if (json && json.manifest) {
				var queue = this._manifestQueue = new createjs.LoadQueue();
				queue.on("fileload", this._handleManifestFileLoad, this);
				queue.on("progress", this._handleManifestProgress, this);
				queue.on("complete", this._handleManifestComplete, this, true);
				queue.on("error", this._handleManifestError, this, true);
				for(var i = 0, l = this.plugins.length; i < l; i++) {	// conserve order of plugins
					queue.installPlugin(this.plugins[i]);
				}
				queue.loadManifest(json);
			} else {
				this._sendComplete();
			}
		};

		/**
		 * An item from the {{#crossLink "_manifestQueue:property"}}{{/crossLink}} has completed.
		 * @method _handleManifestFileLoad
		 * @param {Event} event
		 * @private
		 */
		p._handleManifestFileLoad = function (event) {
			event.target = null;
			this.dispatchEvent(event);
		};

		/**
		 * The manifest has completed loading. This triggers the {{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}}
		 * {{#crossLink "Event"}}{{/crossLink}} from the ManifestLoader.
		 * @method _handleManifestComplete
		 * @param {Event} event
		 * @private
		 */
		p._handleManifestComplete = function (event) {
			this._loadedItems = this._manifestQueue.getItems(true);
			this._sendComplete();
		};

		/**
		 * The manifest has reported progress.
		 * @method _handleManifestProgress
		 * @param {ProgressEvent} event
		 * @private
		 */
		p._handleManifestProgress = function (event) {
			this.progress = event.progress * (1 - s.MANIFEST_PROGRESS) + s.MANIFEST_PROGRESS;
			this._sendProgress(this.progress);
		};

		/**
		 * The manifest has reported an error with one of the files.
		 * @method _handleManifestError
		 * @param {ErrorEvent} event
		 * @private
		 */
		p._handleManifestError = function (event) {
			var newEvent = new createjs.Event("fileerror");
			newEvent.item = event.data;
			this.dispatchEvent(newEvent);
		};

		createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader");

	}());

	//##############################################################################
	// SoundLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for HTML audio files. PreloadJS can not load WebAudio files, as a WebAudio context is required, which
		 * should be created by either a library playing the sound (such as <a href="http://soundjs.com">SoundJS</a>, or an
		 * external framework that handles audio playback. To load content that can be played by WebAudio, use the
		 * {{#crossLink "BinaryLoader"}}{{/crossLink}}, and handle the audio context decoding manually.
		 * @class SoundLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractMediaLoader
		 * @constructor
		 */
		function SoundLoader(loadItem, preferXHR) {
			this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SOUND);

			// protected properties
			if (createjs.RequestUtils.isAudioTag(loadItem)) {
				this._tag = loadItem;
			} else if (createjs.RequestUtils.isAudioTag(loadItem.src)) {
				this._tag = loadItem;
			} else if (createjs.RequestUtils.isAudioTag(loadItem.tag)) {
				this._tag = createjs.RequestUtils.isAudioTag(loadItem) ? loadItem : loadItem.src;
			}

			if (this._tag != null) {
				this._preferXHR = false;
			}
		};

		var p = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
		var s = SoundLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/SOUND:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.SOUND;
		};

		// protected methods
		p._createTag = function (src) {
			var tag = document.createElement("audio");
			tag.autoplay = false;
			tag.preload = "none";

			//LM: Firefox fails when this the preload="none" for other tags, but it needs to be "none" to ensure PreloadJS works.
			tag.src = src;
			return tag;
		};

		createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");

	}());

	//##############################################################################
	// VideoLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for video files.
		 * @class VideoLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractMediaLoader
		 * @constructor
		 */
		function VideoLoader(loadItem, preferXHR) {
			this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.VIDEO);

			if (createjs.RequestUtils.isVideoTag(loadItem) || createjs.RequestUtils.isVideoTag(loadItem.src)) {
				this.setTag(createjs.RequestUtils.isVideoTag(loadItem)?loadItem:loadItem.src);

				// We can't use XHR for a tag that's passed in.
				this._preferXHR = false;
			} else {
				this.setTag(this._createTag());
			}
		};

		var p = createjs.extend(VideoLoader, createjs.AbstractMediaLoader);
		var s = VideoLoader;

		/**
		 * Create a new video tag
		 *
		 * @returns {HTMLElement}
		 * @private
		 */
		p._createTag = function () {
			return document.createElement("video");
		};

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/VIDEO:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.VIDEO;
		};

		createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader");

	}());

	//##############################################################################
	// SpriteSheetLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for EaselJS SpriteSheets. Images inside the spritesheet definition are loaded before the loader
		 * completes. To load SpriteSheets using JSONP, specify a {{#crossLink "LoadItem/callback:property"}}{{/crossLink}}
		 * as part of the {{#crossLink "LoadItem"}}{{/crossLink}}. Note that the {{#crossLink "JSONLoader"}}{{/crossLink}}
		 * and {{#crossLink "JSONPLoader"}}{{/crossLink}} are higher priority loaders, so SpriteSheets <strong>must</strong>
		 * set the {{#crossLink "LoadItem"}}{{/crossLink}} {{#crossLink "LoadItem/type:property"}}{{/crossLink}} property
		 * to {{#crossLink "AbstractLoader/SPRITESHEET:property"}}{{/crossLink}}.
		 *
		 * The {{#crossLink "LoadItem"}}{{/crossLink}} {{#crossLink "LoadItem/crossOrigin:property"}}{{/crossLink}} as well
		 * as the {{#crossLink "LoadQueue's"}}{{/crossLink}} `basePath` argument and {{#crossLink "LoadQueue/_preferXHR"}}{{/crossLink}}
		 * property supplied to the {{#crossLink "LoadQueue"}}{{/crossLink}} are passed on to the sub-manifest that loads
		 * the SpriteSheet images.
		 *
		 * Note that the SpriteSheet JSON does not respect the {{#crossLink "LoadQueue/_preferXHR:property"}}{{/crossLink}}
		 * property, which should instead be determined by the presence of a {{#crossLink "LoadItem/callback:property"}}{{/crossLink}}
		 * property on the SpriteSheet load item. This is because the JSON loaded will have a different format depending on
		 * if it is loaded as JSON, so just changing `preferXHR` is not enough to change how it is loaded.
		 * @class SpriteSheetLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function SpriteSheetLoader(loadItem, preferXHR) {
			this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SPRITESHEET);

			// protected properties
			/**
			 * An internal queue which loads the SpriteSheet's images.
			 * @method _manifestQueue
			 * @type {LoadQueue}
			 * @private
			 */
			this._manifestQueue = null;
		}

		var p = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader);
		var s = SpriteSheetLoader;

		// static properties
		/**
		 * The amount of progress that the manifest itself takes up.
		 * @property SPRITESHEET_PROGRESS
		 * @type {number}
		 * @default 0.25 (25%)
		 * @private
		 * @static
		 */
		s.SPRITESHEET_PROGRESS = 0.25;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/SPRITESHEET:property"}}{{/crossLink}}
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.SPRITESHEET;
		};

		// public methods
		p.destroy = function() {
			this.AbstractLoader_destroy;
			this._manifestQueue.close();
		};

		// protected methods
		p._createRequest = function() {
			var callback = this._item.callback;
			if (callback != null) {
				this._request = new createjs.JSONPLoader(this._item);
			} else {
				this._request = new createjs.JSONLoader(this._item);
			}
		};

		p.handleEvent = function (event) {
			switch (event.type) {
				case "complete":
					this._rawResult = event.target.getResult(true);
					this._result = event.target.getResult();
					this._sendProgress(s.SPRITESHEET_PROGRESS);
					this._loadManifest(this._result);
					return;
				case "progress":
					event.loaded *= s.SPRITESHEET_PROGRESS;
					this.progress = event.loaded / event.total;
					if (isNaN(this.progress) || this.progress == Infinity) { this.progress = 0; }
					this._sendProgress(event);
					return;
			}
			this.AbstractLoader_handleEvent(event);
		};

		/**
		 * Create and load the images once the SpriteSheet JSON has been loaded.
		 * @method _loadManifest
		 * @param {Object} json
		 * @private
		 */
		p._loadManifest = function (json) {
			if (json && json.images) {
				var queue = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
				queue.on("complete", this._handleManifestComplete, this, true);
				queue.on("fileload", this._handleManifestFileLoad, this);
				queue.on("progress", this._handleManifestProgress, this);
				queue.on("error", this._handleManifestError, this, true);
				queue.loadManifest(json.images);
			}
		};

		/**
		 * An item from the {{#crossLink "_manifestQueue:property"}}{{/crossLink}} has completed.
		 * @method _handleManifestFileLoad
		 * @param {Event} event
		 * @private
		 */
		p._handleManifestFileLoad = function (event) {
			var image = event.result;
			if (image != null) {
				var images = this.getResult().images;
				var pos = images.indexOf(event.item.src);
				images[pos] = image;
			}
		};

		/**
		 * The images have completed loading. This triggers the {{#crossLink "AbstractLoader/complete:event"}}{{/crossLink}}
		 * {{#crossLink "Event"}}{{/crossLink}} from the SpriteSheetLoader.
		 * @method _handleManifestComplete
		 * @param {Event} event
		 * @private
		 */
		p._handleManifestComplete = function (event) {
			this._result = new createjs.SpriteSheet(this._result);
			this._loadedItems = this._manifestQueue.getItems(true);
			this._sendComplete();
		};

		/**
		 * The images {{#crossLink "LoadQueue"}}{{/crossLink}} has reported progress.
		 * @method _handleManifestProgress
		 * @param {ProgressEvent} event
		 * @private
		 */
		p._handleManifestProgress = function (event) {
			this.progress = event.progress * (1 - s.SPRITESHEET_PROGRESS) + s.SPRITESHEET_PROGRESS;
			this._sendProgress(this.progress);
		};

		/**
		 * An image has reported an error.
		 * @method _handleManifestError
		 * @param {ErrorEvent} event
		 * @private
		 */
		p._handleManifestError = function (event) {
			var newEvent = new createjs.Event("fileerror");
			newEvent.item = event.data;
			this.dispatchEvent(newEvent);
		};

		createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader");

	}());

	//##############################################################################
	// SVGLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for SVG files.
		 * @class SVGLoader
		 * @param {LoadItem|Object} loadItem
		 * @param {Boolean} preferXHR
		 * @extends AbstractLoader
		 * @constructor
		 */
		function SVGLoader(loadItem, preferXHR) {
			this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SVG);

			// public properties
			this.resultFormatter = this._formatResult;

			// protected properties
			this._tagSrcAttribute = "data";

			if (preferXHR) {
				this.setTag(document.createElement("svg"));
			} else {
				this.setTag(document.createElement("object"));
				this.getTag().type = "image/svg+xml";
			}
		};

		var p = createjs.extend(SVGLoader, createjs.AbstractLoader);
		var s = SVGLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/SVG:property"}}{{/crossLink}}
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.SVG;
		};

		// protected methods
		/**
		 * The result formatter for SVG files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {Object}
		 * @private
		 */
		p._formatResult = function (loader) {
			// mime should be image/svg+xml, but Opera requires text/xml
			var xml = createjs.DataUtils.parseXML(loader.getResult(true), "text/xml");
			var tag = loader.getTag();

			if (!this._preferXHR && document.body.contains(tag)) {
				document.body.removeChild(tag);
			}

			if (xml.documentElement != null) {
				tag.appendChild(xml.documentElement);
				tag.style.visibility = "visible";
				return tag;
			} else { // For browsers that don't support SVG, just give them the XML. (IE 9-8)
				return xml;
			}
		};

		createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader");

	}());

	//##############################################################################
	// XMLLoader.js
	//##############################################################################

	this.createjs = this.createjs || {};

	(function () {
		"use strict";

		// constructor
		/**
		 * A loader for CSS files.
		 * @class XMLLoader
		 * @param {LoadItem|Object} loadItem
		 * @extends AbstractLoader
		 * @constructor
		 */
		function XMLLoader(loadItem) {
			this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.XML);

			// public properties
			this.resultFormatter = this._formatResult;
		};

		var p = createjs.extend(XMLLoader, createjs.AbstractLoader);
		var s = XMLLoader;

		// static methods
		/**
		 * Determines if the loader can load a specific item. This loader can only load items that are of type
		 * {{#crossLink "AbstractLoader/XML:property"}}{{/crossLink}}.
		 * @method canLoadItem
		 * @param {LoadItem|Object} item The LoadItem that a LoadQueue is trying to load.
		 * @returns {Boolean} Whether the loader can load the item.
		 * @static
		 */
		s.canLoadItem = function (item) {
			return item.type == createjs.AbstractLoader.XML;
		};

		// protected methods
		/**
		 * The result formatter for XML files.
		 * @method _formatResult
		 * @param {AbstractLoader} loader
		 * @returns {XMLDocument}
		 * @private
		 */
		p._formatResult = function (loader) {
			return createjs.DataUtils.parseXML(loader.getResult(true), "text/xml");
		};

		createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader");

	}());

	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.createjs;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(304)(module), (function() { return this; }())))

/***/ },
/* 304 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loaderCommon = __webpack_require__(306);

	var _loaderCommon2 = _interopRequireDefault(_loaderCommon);

	var _loaderNoRetina = __webpack_require__(307);

	var _loaderNoRetina2 = _interopRequireDefault(_loaderNoRetina);

	var _loaderRetina = __webpack_require__(308);

	var _loaderRetina2 = _interopRequireDefault(_loaderRetina);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isRetina = window.devicePixelRatio > 1,
	    data;

	if (isRetina) {
	    data = _loaderCommon2.default.concat(_loaderRetina2.default);
	    data.push({ id: 'assets-css', src: 'css/assets/assets-retina.css' });
	} else {
	    data = _loaderCommon2.default.concat(_loaderNoRetina2.default);
	    data.push({ id: 'assets-css', src: 'css/assets/assets-no-retina.css' });
	}

		exports.default = data;

/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "app-data",
			"src": "data/data.json"
		}
	];

/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "plane",
			"src": "assets/images/plane.png"
		}
	];

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "plane",
			"src": "assets/images/plane_2x.png"
		}
	];

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _version = __webpack_require__(310);

	var _version2 = _interopRequireDefault(_version);

	var _appSettings = __webpack_require__(311);

	var _appSettings2 = _interopRequireDefault(_appSettings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Print version info
	 */
	var version = function version() {
	    var el;

	    if (!_appSettings2.default.renderVersionInfo) {
	        return;
	    }

	    // print version to console
	    if (console && console.log) {
	        console.log('\n%cv' + _version2.default.version + '%c %c' + _version2.default.time + '%c\n\n', 'color: #ffffff; background: #00aa00; padding: 1px 5px;', 'color: #ffffff; background: #d1eeee; padding: 1px 5px;', 'color: #ffffff; background: #00aa00; padding: 1px 5px;', 'background: #ffffff;');
	    }

	    // print version to page
	    el = document.createElement('div');
	    el.className = 'version';
	    el.innerHTML = '<div class="version">' + 'v' + _version2.default.version + ' <span>| ' + _version2.default.time + '</span>' + '</div>';

	    document.body.appendChild(el);
	};

		exports.default = version;

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = {
		"version": "0.0.0",
		"time": "00.00.0000 00:00:00 (+0000)"
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var appSettings = {};

	/**
	 * Helper method for detecting production enviroment
	 *
	 * @return {Boolean} - 'true' for production enviroment, 'false' for development
	 */
	appSettings.isProduction = function () {
	    var host = window.location.hostname;

	    if (host === 'localhost') {
	        return false;
	    }

	    return true;
	};

	/**
	 * Helper method for detecting development enviroment
	 *
	 * @return {Boolean} - 'false' for production enviroment, 'true' for development
	 */
	appSettings.isNotProduction = function () {
	    return !appSettings.isProduction();
	};

	/**
	 * Print version info on the page
	 *
	 * @type {Boolean}
	 */
	appSettings.renderVersionInfo = true;

		exports.default = appSettings;

/***/ },
/* 312 */
/***/ function(module, exports) {

	module.exports = {
		"loader": {
			"start": "0%",
			"progress": "%"
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=maps/main.js.map