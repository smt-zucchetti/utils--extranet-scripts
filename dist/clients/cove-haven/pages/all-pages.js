/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cms;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/little-loader/lib/little-loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/little-loader/lib/little-loader.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("/**\n * Script loading is difficult thanks to IE. We need callbacks to fire\n * immediately following the script's execution, with no other scripts\n * running in between. If other scripts on the page are able to run\n * between our script and its callback, bad things can happen, such as\n * `jQuery.noConflict` not being called in time, resulting in plugins\n * latching onto our version of jQuery, etc.\n *\n * For IE<10 we use a relatively well-documented \"preloading\" strategy,\n * which ensures that the script is ready to execute *before* appending\n * it to the DOM. That way when it is finally appended, it is\n * executed immediately.\n *\n * References:\n * - http://www.html5rocks.com/en/tutorials/speed/script-loading/\n * - http://blog.getify.com/ie11-please-bring-real-script-preloading-back/\n * - https://github.com/jrburke/requirejs/issues/526\n * - https://connect.microsoft.com/IE/feedback/details/729164/\n *           ie10-dynamic-script-element-fires-loaded-readystate-prematurely\n */\n(function () {\n\n  // Global state.\n  var pendingScripts = {};\n  var scriptCounter = 0;\n\n  /**\n   * Insert script into the DOM\n   *\n   * @param {Object} script Script DOM object\n   * @returns {void}\n   */\n  var _addScript = function (script) {\n    // Get the first script element, we're just going to use it\n    // as a reference for where to insert ours. Do NOT try to do\n    // this just once at the top and then re-use the same script\n    // as a reference later. Some weird loaders *remove* script\n    // elements after the browser has executed their contents,\n    // so the same reference might not have a parentNode later.\n    var firstScript = document.getElementsByTagName(\"script\")[0];\n\n    // Append the script to the DOM, triggering execution.\n    firstScript.parentNode.insertBefore(script, firstScript);\n  };\n\n  /**\n   * Load Script.\n   *\n   * @param {String}            src       URI of script\n   * @param {Function|Object}   callback  (Optional) Called on script load completion,\n   *                                      or options object\n   * @param {Object}            context   (Optional) Callback context (`this`)\n   * @returns {void}\n   */\n  var _lload = function (src, callback, context) {\n    /*eslint max-statements: [2, 32]*/\n    var setup;\n\n    if (callback && typeof callback !== \"function\") {\n      context = callback.context || context;\n      setup = callback.setup;\n      callback = callback.callback;\n    }\n\n    var script = document.createElement(\"script\");\n    var done = false;\n    var err;\n    var _cleanup; // _must_ be set below.\n\n    /**\n     * Final handler for error or completion.\n     *\n     * **Note**: Will only be called _once_.\n     *\n     * @returns {void}\n     */\n    var _finish = function () {\n      // Only call once.\n      if (done) { return; }\n      done = true;\n\n      // Internal cleanup.\n      _cleanup();\n\n      // Callback.\n      if (callback) {\n        callback.call(context, err);\n      }\n    };\n\n    /**\n     * Error handler\n     *\n     * @returns {void}\n     */\n    var _error = function () {\n      err = new Error(src || \"EMPTY\");\n      _finish();\n    };\n\n    if (script.readyState && !(\"async\" in script)) {\n      /*eslint-disable consistent-return*/\n\n      // This section is only for IE<10. Some other old browsers may\n      // satisfy the above condition and enter this branch, but we don't\n      // support those browsers anyway.\n\n      var id = scriptCounter++;\n      var isReady = { loaded: true, complete: true };\n      var inserted = false;\n\n      // Clear out listeners, state.\n      _cleanup = function () {\n        script.onreadystatechange = script.onerror = null;\n        pendingScripts[id] = void 0;\n      };\n\n      // Attach the handler before setting src, otherwise we might\n      // miss events (consider that IE could fire them synchronously\n      // upon setting src, for example).\n      script.onreadystatechange = function () {\n        var firstState = script.readyState;\n\n        // Protect against any errors from state change randomness.\n        if (err) { return; }\n\n        if (!inserted && isReady[firstState]) {\n          inserted = true;\n\n          // Append to DOM.\n          _addScript(script);\n        }\n\n        // --------------------------------------------------------------------\n        //                       GLORIOUS IE8 HACKAGE!!!\n        // --------------------------------------------------------------------\n        //\n        // Oh IE8, how you disappoint. IE8 won't call `script.onerror`, so\n        // we have to resort to drastic measures.\n        // See, e.g. http://www.quirksmode.org/dom/events/error.html#t02\n        //\n        // As with all things development, there's a Stack Overflow comment that\n        // asserts the following combinations of state changes in IE8 indicate a\n        // script load error. And crazily, it seems to work!\n        //\n        // http://stackoverflow.com/a/18840568/741892\n        //\n        // The `script.readyState` transitions we're interested are:\n        //\n        // * If state starts as `loaded`\n        // * Call `script.children`, which _should_ change state to `complete`\n        // * If state is now `loading`, then **we have a load error**\n        //\n        // For the reader's amusement, here is HeadJS's catalog of various\n        // `readyState` transitions in normal operation for IE:\n        // https://github.com/headjs/headjs/blob/master/src/2.0.0/load.js#L379-L419\n        if (firstState === \"loaded\") {\n          // The act of accessing the property should change the script's\n          // `readyState`.\n          //\n          // And, oh yeah, this hack is so hacky-ish we need the following\n          // eslint disable...\n          /*eslint-disable no-unused-expressions*/\n          script.children;\n          /*eslint-enable no-unused-expressions*/\n\n          if (script.readyState === \"loading\") {\n            // State transitions indicate we've hit the load error.\n            //\n            // **Note**: We are not intending to _return_ a value, just have\n            // a shorter short-circuit code path here.\n            return _error();\n          }\n        }\n\n        // It's possible for readyState to be \"complete\" immediately\n        // after we insert (and execute) the script in the branch\n        // above. So check readyState again here and react without\n        // waiting for another onreadystatechange.\n        if (script.readyState === \"complete\") {\n          _finish();\n        }\n      };\n\n      // Onerror handler _may_ work here.\n      script.onerror = _error;\n\n      // Since we're not appending the script to the DOM yet, the\n      // reference to our script element might get garbage collected\n      // when this function ends, without onreadystatechange ever being\n      // fired. This has been witnessed to happen. Adding it to\n      // `pendingScripts` ensures this can't happen.\n      pendingScripts[id] = script;\n\n      // call the setup callback to mutate the script tag\n      if (setup) {\n        setup.call(context, script);\n      }\n\n      // This triggers a request for the script, but its contents won't\n      // be executed until we append it to the DOM.\n      script.src = src;\n\n      // In some cases, the readyState is already \"loaded\" immediately\n      // after setting src. It's a lie! Don't append to the DOM until\n      // the onreadystatechange event says so.\n\n    } else {\n      // This section is for modern browsers, including IE10+.\n\n      // Clear out listeners.\n      _cleanup = function () {\n        script.onload = script.onerror = null;\n      };\n\n      script.onerror = _error;\n      script.onload = _finish;\n      script.async = true;\n      script.charset = \"utf-8\";\n\n      // call the setup callback to mutate the script tag\n      if (setup) {\n        setup.call(context, script);\n      }\n\n      script.src = src;\n\n      // Append to DOM.\n      _addScript(script);\n    }\n  };\n\n  // UMD wrapper.\n  /*global define:false*/\n  if (true) {\n    // CommonJS\n    module.exports = _lload;\n\n  } else {}\n}());\n\n\n//# sourceURL=webpack://cms/./node_modules/little-loader/lib/little-loader.js?");

/***/ }),

/***/ "./src/clients/cove-haven/pages/all-pages.js":
/*!***************************************************!*\
  !*** ./src/clients/cove-haven/pages/all-pages.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var little_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! little-loader */ \"./node_modules/little-loader/lib/little-loader.js\");\n/* harmony import */ var little_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(little_loader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _submodules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../submodules/main */ \"./src/clients/cove-haven/submodules/main.js\");\n\n\n\nfunction getURLParameter(name) \n{\n    return decodeURI(\n        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]\n    );\n}\n\nfunction setCookie(c_name,value,exdays) \n{\n    var exdate=new Date();\n    exdate.setDate(exdate.getDate() + exdays);\n    var c_value=escape(value) + ((exdays==null) ? \"\" : \"; path=/; expires=\"+exdate.toUTCString());\n    document.cookie=c_name + \"=\" + c_value;\n}\n\nfunction getCookie(c_name) {\n    var i,x,y,ARRcookies=document.cookie.split(\";\");\n    for(i=0;i<ARRcookies.length;i++) \n    {\n        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf(\"=\"));\n        y=ARRcookies[i].substr(ARRcookies[i].indexOf(\"=\")+1);\n        x=x.replace(/^\\s+|\\s+$/g,\"\");\n        \n        if(x==c_name) \n        {\n            return unescape(y);\n        }\n    }\n}\n\nfunction checkCookie(c_name) \n{\n    var c_value=getCookie(c_name);\n    if(c_value!=null && c_value!=\"\") \n    {\n        return c_value;\n    }\n    return false;\n}\n\nvar source_parameter = getURLParameter('source');\n\nif(source_parameter !== 'null')  \n{\n    setCookie('source', source_parameter, 28);\n\n    var sp_pieces = source_parameter.split('/');\n    var spp0_pieces = sp_pieces[0].split('_');\n    var phone_number_key = spp0_pieces[1];\n    console.log(phone_number_key)\n\n    var phone_number = false;\n\n    if(phone_number_key in _submodules_main__WEBPACK_IMPORTED_MODULE_1__.phone_numbers) {\n        var phone_number = _submodules_main__WEBPACK_IMPORTED_MODULE_1__.phone_numbers[phone_number_key][0];\n    }\n\n    if(phone_number) {\n        setCookie('phone_number', phone_number, 28);\n        console.log(phone_number)\n    }\n}\n\nvar c_phone_number = checkCookie('phone_number');\n\nif(c_phone_number) \n{\n    console.log('replace phone number', c_phone_number);\n    jQuery('.dynamic-phone-number').text(c_phone_number);\n    jQuery(\"span.dynamic-phone-number\").text(function(i, text) \n    {\n        var clickText = text.replace(/\\./g,'');\n        jQuery('.phone-number-link').attr(\"href\", \"tel:\" + clickText);\n        text = text.replace(/\\./g, \"\").replace(/(\\d{3})(\\d{3})(\\d{4})/, \"($1) $2-$3\");\n        return text;\n    });\n}\n\n//Global Site Tag (gtag.js) - GHA/ADWORDS\nlittle_loader__WEBPACK_IMPORTED_MODULE_0___default()('https://www.googletagmanager.com/gtag/js?id=AW-670105291', function(err){\n    if(!err)\n    {\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments)};\n        gtag('js', new Date());\n        gtag('config', 'AW-670105291');\n        gtag('config', 'HA-75', { 'conversion_cookie_prefix' : '_ha'});\n    }\n    else\n    {\n        console.log(`failed to load with error: ${err}`);\n    }\n});\n\n//Global Site Tag (Bing) - Bing Hotel Ads -->\n(function(w,d,t,r,u){\n    var f,n,i;w[u]=w[u]||[],\n    f=function(){\n        var o={ti:\"13006875\"};\n        o.q=w[u],w[u]=new UET(o),w[u].push(\"pageLoad\")\n    },\n    n=d.createElement(t),\n    n.src=r,n.async=1,\n    n.onload=n.onreadystatechange=function(){\n        var s=this.readyState;\n        s&&s!==\"loaded\"&&s!==\"complete\"||(f(),n.onload=n.onreadystatechange=null)\n    },\n    i=d.getElementsByTagName(t)[0],\n    i.parentNode.insertBefore(n,i)\n})(window,document,\"script\",\"//bat.bing.com/bat.js\",\"uetq\");\n\n\n//# sourceURL=webpack://cms/./src/clients/cove-haven/pages/all-pages.js?");

/***/ }),

/***/ "./src/clients/cove-haven/submodules/_phone-numbers-data.js":
/*!******************************************************************!*\
  !*** ./src/clients/cove-haven/submodules/_phone-numbers-data.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone_numbers\": () => (/* binding */ phone_numbers)\n/* harmony export */ });\n  var phone_numbers = new Object();\n  phone_numbers['02'] = ['888.738.4141', '02_notused'];\n  phone_numbers['05'] = ['800.698.4760', '05_PhillyDotCom'];\n  phone_numbers['09'] = ['800.551.9118', '09_IT_Testing_Line'];\n  phone_numbers['11'] = ['866.757.5683', 'Ad-11 Billboard'];\n  phone_numbers['14'] = ['800.643.4441', 'Ad-14 Referral Rewards'];\n  phone_numbers['16'] = ['800.245.8807', 'Ad-16 GAW_NJTeacher'];\n  phone_numbers['18'] = ['877.500.9164', 'Ad-18 Honeymoon E-Mail - Daily'];\n  phone_numbers['19'] = ['800.698.4694', '19_GAW_DCFOP'];\n  phone_numbers['21'] = ['866.500.0022', '21_PPCBanner_Generic2'];\n  phone_numbers['22'] = ['877.500.9591', 'Ad-22 Vacation E-Mail - Daily'];\n  phone_numbers['24'] = ['866.456.6430', '24_Focus_Newspaper'];\n  phone_numbers['25'] = ['800.245.9124', 'Ad-25_Wedding_SiteServices'];\n  phone_numbers['27'] = ['800.522.5071', '27_FLP_Silver_Phone'];\n  phone_numbers['28'] = ['800.573.6045', 'NEEDS A NEW DNIS'];\n  phone_numbers['29'] = ['888.773.9481', 'Ad-29 Ski & Stay'];\n  phone_numbers['37'] = ['800.698.4766', 'Ad-37 MWR Office'];\n  phone_numbers['40'] = ['800.435.9486', 'Ad-40 Travel Agent'];\n  phone_numbers['43'] = ['888.773.9480', 'Ad-43 GAW Splash Page'];\n  phone_numbers['45'] = ['877.500.2080', '45_40%_CPT_TV_Philly'];\n  phone_numbers['52'] = ['888.463.9700', 'Ad-52 Special Mailer'];\n  phone_numbers['53'] = ['866.728.5683', '53_GAW_IAFF'];\n  phone_numbers['54'] = ['800.245.8761', '54_PPC_Romance'];\n  phone_numbers['59'] = ['866.500.0391', '59_FLP_Flyer_FrontDesk'];\n  phone_numbers['60'] = ['877.501.1148', 'Ad-60 PA Travel Guide-New'];\n  phone_numbers['61'] = ['800.698.4763', '61_HotelRoomsDotCom'];\n  phone_numbers['62'] = ['800.238.2905', '62_BookingEngine_Confirm'];\n  phone_numbers['63'] = ['800.245.9127', '63_LivingSocial_Voucher'];\n  phone_numbers['64'] = ['800.698.4691', '64_ChineseOPENTBA'];\n  phone_numbers['66'] = ['800.354.7747', 'Ad-66 ResortsLodges'];\n  phone_numbers['67'] = ['866.500.0393', '67_PoconoTimes'];\n  phone_numbers['68'] = ['800.424.1217', '68_ChineseOnlineAds'];\n  phone_numbers['71'] = ['800.622.6039', '71_PPCBanner_Generic'];\n  phone_numbers['75'] = ['800.241.4980', '75_PikeDispatch'];\n  phone_numbers['77'] = ['866.747.5683', 'NEEDS A NEW DNIS'];\n  phone_numbers['79'] = ['877.500.4879', '79_Email Promos3'];\n  phone_numbers['80'] = ['800.922.6032', 'NEEDS A NEW DNIS'];\n  phone_numbers['83'] = ['800.822.3022', '83_LivingSocial_OnSite'];\n  phone_numbers['84'] = ['800.972.3891', '84_TravelZoo_CCC'];\n  phone_numbers['85'] = ['800.828.9492', 'Ad-85 Email Entertainment'];\n  phone_numbers['86'] = ['800.722.0112', '86_LocalWeddingPlanning'];\n  phone_numbers['88'] = ['800.441.2969', 'Ad-88 Honeymoon Guide'];\n  phone_numbers['90'] = ['800.245.9130', '90_Groupon_Booking'];\n  phone_numbers['92'] = ['888.654.9818', 'Ad-92 Pocono Vacations'];\n  phone_numbers['94'] = ['800.698.4690', 'Ad-94 Mailer Email V5'];\n  phone_numbers['95'] = ['877.500.4709', '95_Nor1'];\n  phone_numbers['1A'] = ['888.789.8198', '1A_Email_Promo_7'];\n  phone_numbers['1B'] = ['888.789.8243', '1B_Gift_Voucher'];\n  phone_numbers['1C'] = ['888.789.8278', '1C-GAW_RARES_Card'];\n  phone_numbers['1D'] = ['888.789.8373', '1D - Email Promo 6'];\n  phone_numbers['1E'] = ['888.789.8375', '1E-Email Promos'];\n  phone_numbers['1F'] = ['888.789.8377', '1F-Unusual Hotels'];\n  phone_numbers['1H'] = ['800.221.9037', 'Ad-1H FLP Email'];\n  phone_numbers['1K'] = ['800.245.9125', 'Ad-1K Mailer Email V3'];\n  phone_numbers['1M'] = ['866.730.5683', '1M_PoconoWeddings_DotCom'];\n  phone_numbers['1P'] = ['866.750.5683', '1P_Mobile Website'];\n  phone_numbers['1R'] = ['877.822.4444', 'Ad-1R Honeymoon Brochure'];\n  phone_numbers['1T'] = ['866.500.5689', 'Ad-1T Telemarketing'];\n  phone_numbers['1X'] = ['888.789.8379', '1X-Vacation Brochure'];\n  phone_numbers['1Z'] = ['800.553.7453', '1Z-Vacation Take-One'];\n  phone_numbers['2A'] = ['800.575.0746', '2A_PPC_NonGeo_BrandTerms'];\n  phone_numbers['2B'] = ['800.576.5494', '2B_FLP_Letter'];\n  phone_numbers['2C'] = ['800.576.9030', '2C-Booking Engine Down'];\n  phone_numbers['2D'] = ['800.586.0801', '2D_40%CPT_TV_WNEP'];\n  phone_numbers['2E'] = ['800.972.2894', '2E-Email Promos 2'];\n  phone_numbers['2F'] = ['800.972.2943', '2F_Fox'];\n  phone_numbers['2X'] = ['800.972.2945', '2X_GAW_NJFOP'];\n  phone_numbers['2Z'] = ['800.972.2951', '2Z_Special_Event_Flyer'];\n  phone_numbers['36-76'] = ['800.432.9932', 'Ad-36 CPR Website'];\n  phone_numbers['3A'] = ['800.972.2969', '3A-Email Promos4'];\n  phone_numbers['3B'] = ['800.972.9107', '3B-Honeymoon TO'];\n  phone_numbers['3C'] = ['800.972.9154', '3C_SkierNews'];\n  phone_numbers['3D'] = ['800.972.9158', '3D-Mailer Email V4'];\n  phone_numbers['3E'] = ['800.972.9166', '3E - Email Promo 5'];\n  phone_numbers['3F'] = ['800.972.9178', '3F-PPC_TestOffer2'];\n  phone_numbers['3H'] = ['800.972.9181', '3H-PPC_HM_CPT_525'];\n  phone_numbers['3K'] = ['800.972.9215', '3K_VisitPoconos.com'];\n  phone_numbers['3M'] = ['800.972.9216', '3M_CoveClub_Flyer'];\n  phone_numbers['3N'] = ['800.972.9217', '3N_PhillyInquirer'];\n  phone_numbers['3P'] = ['800.231.7771', 'NEEDS A NEW DNIS'];\n  phone_numbers['3R'] = ['800.554.4202', '3R_PPC_BrandTerms'];\n  phone_numbers['3T'] = ['866.500.5507', '3T_iHeart_Radio'];\n  phone_numbers['3X'] = ['866.500.5696', 'Ad-3X Pre-stay Email'];\n  phone_numbers['4A'] = ['888.654.9825', '4A-Focus_Newspaper'];\n  phone_numbers['4C'] = ['800.698.4761', '4C-Nightlife_Billboard'];\n  phone_numbers['4E'] = ['866.500.5516', 'FLP_Brochure'];\n  phone_numbers['4F'] = ['866.500.5697', '4F_KoreanGPSmag'];\n  phone_numbers['4H'] = ['888.963.3043', '4H_ChineseNTDTV'];\n  phone_numbers['4K'] = ['888.386.4691', '4K_PPC_Banner_SiteRetarget'];\n  phone_numbers['4M'] = ['888.963.3047', '4M_Agt_Eml_Sig'];\n  phone_numbers['4P'] = ['866.500.5503', '4P_AnnivPackage_Ltr'];\n  phone_numbers['4T'] = ['800.972.9251', '4T_GAW_LGBT'];\n  phone_numbers['4X'] = ['866.500.0394', 'Ad-4X Reconfirms - Res'];\n  phone_numbers['5A'] = ['866.500.5012', '5A_LivingSocial_CH'];\n  phone_numbers['5E'] = ['888.386.4714', '5E_BridalShow_Leads_Email'];\n  phone_numbers['5F'] = ['866.500.0483', '5F_FLP_FreeStay_Letter'];\n  phone_numbers['5H'] = ['800.972.7162', '5H_FlipTo_Truffles'];\n  phone_numbers['5K'] = ['800.972.7164', '5K_TimesLeaderWedding'];\n  phone_numbers['5M'] = ['800.972.7165', '5M_KoreanTKCtv'];\n  phone_numbers['5N'] = ['800.972.7168', '5N-Press Releases'];\n  phone_numbers['5T'] = ['800.972.7169', '5T_PPCclicktoCall'];\n  phone_numbers['6A'] = ['800.972.7180', '6A_KoreaDailyAd'];\n  phone_numbers['6B'] = ['800.972.7316', '6B_SalesDeptEmail'];\n  phone_numbers['6C'] = ['800.972.7318', '6C_Email_Promo_AYR'];\n  phone_numbers['6E'] = ['800.972.7351', '6E_Philly_Gay_News'];\n  phone_numbers['6F'] = ['800.972.7352', '6F_GAW_RecNews'];\n  phone_numbers['6H'] = ['800.972.2451', '6H_Happenings_Mag'];\n  phone_numbers['6K'] = ['800.972.2457', '6K_GAW_Flyer'];\n  phone_numbers['6M'] = ['800.972.2461', '6M_TravelZoo_CPC'];\n  phone_numbers['6N'] = ['800.972.2516', '6N_PoconoRaceway'];\n  phone_numbers['6T'] = ['800.972.2517', '6T_PPC-Valentine'];\n  phone_numbers['7A'] = ['800.972.3813', '7A_HotelRooms_DotCom'];\n  phone_numbers['7E'] = ['800.972.3820', '7E_GayCityNews'];\n  phone_numbers['7F'] = ['800.972.3823', '7F_Wedding_Wire']\n  phone_numbers['8A'] = ['800.987.2075', 'NEEDS A NEW DNIS']\n  phone_numbers['A1'] = ['866.500.0437', 'A1_KoreanRadio'];\n  phone_numbers['A2'] = ['866.500.0456', 'Ad-A2 PA Visitors'];\n  phone_numbers['A3'] = ['866.500.0458', 'A3_GTA_Travel'];\n  phone_numbers['A4'] = ['866.500.0459', 'A4_Getaway_LTO_Flyer'];\n  phone_numbers['A5'] = ['866.500.0468', 'Ad-A5 Rock 107 SRF'];\n  phone_numbers['A6'] = ['866.500.0476', 'A6-WNEP_Web_30off'];\n  phone_numbers['A7'] = ['866.500.0480', 'A7_TAG_Website_LGBT'];\n  phone_numbers['A8'] = ['866.500.0482', 'A8_WNEP'];\n  phone_numbers['A9'] = ['866.500.0484', 'A9_GAW_Bethesda'];\n  phone_numbers['B1'] = ['866.500.0486', 'B1_PPC_Banner_KidsHome'];\n  phone_numbers['B2'] = ['866.500.0487', 'B2_SuiteRewards'];\n  phone_numbers['B4'] = ['866.500.5025', 'B4_NewspaperLocalADs'];\n  phone_numbers['B5'] = ['866.500.5502', 'B5_TripAdvisor'];\n  phone_numbers['B7'] = ['866.500.0485', 'B7_WhenWhereMag_Events'];\n  phone_numbers['B8'] = ['866.500.5506', 'B8_GAWNJfire'];\n  phone_numbers['B9'] = ['866.500.5508', 'B9_Booking_Engine'];\n  phone_numbers['C3'] = ['866.500.5515', 'Ad-C3 Book Engine Tst'];\n  phone_numbers['C5'] = ['866.500.5673', 'C5_Penn_Peak'];\n  phone_numbers['C6'] = ['866.500.5690', 'Em - Honeymoon 28 Day'];\n  phone_numbers['C7'] = ['866.500.5691', 'C7_PPC_SkiStay'];\n  phone_numbers['C8'] = ['866.500.5695', 'Ad-C8 PPC Honeymoon'];\n  phone_numbers['D2'] = ['800.357.2299', 'D2_ChineseEpochGuide'];\n  phone_numbers['D3'] = ['800.245.9123', 'D3_PPC_NonGeo_Poconos'];\n  phone_numbers['D4'] = ['800.698.4692', 'D4_Froggy101'];\n  phone_numbers['D6'] = ['877.501.1112', 'Ad-D6 Special Events Eml'];\n  phone_numbers['D7'] = ['866.500.0392', 'D7_BoldGold_Radio_Ad'];\n  phone_numbers['D8'] = ['800.860.0854', 'Ad-D8 Super FLP Letter'];\n  phone_numbers['E2'] = ['866.500.0488', 'E2_PPC_Google_PoconosOnly'];\n  phone_numbers['E4'] = ['866.500.0454', 'E4_OurWeddingDay_Dot_Com'];\n  phone_numbers['E7'] = ['877.500.7062', 'E7-DenimDiamonds_WeddingExpo'];\n  phone_numbers['E8'] = ['866.500.5692', 'E8_WBEB'];\n  phone_numbers['E9'] = ['866.500.0481', 'E9_PMVB_co-op'];\n  phone_numbers['F2'] = ['866.500.0469', 'F2_PPC_RoomOnly'];\n  phone_numbers['F3'] = ['866.500.0457', 'F3_PPC_Caesars_U'];\n  phone_numbers['F4'] = ['800.245.9129', 'F4_PPC_AllInclusive'];\n  phone_numbers['F5'] = ['888.386.4680', 'F5_Wddg_Hnymn_Bckslp_WddgSide'];\n  phone_numbers['F6'] = ['888.386.4682', 'F6_Twitter'];\n  phone_numbers['F7'] = ['888.386.4689', 'F7_VisitPA'];\n  phone_numbers['G2'] = ['888.386.4694', 'G2_GAW_AAA '];\n  phone_numbers['H2'] = ['888.386.4712', 'H2-Njcops'];\n  phone_numbers['H3'] = ['888.386.4713', 'H3_FLP_Gold_Phone'];\n  phone_numbers['H4'] = ['888.386.4715', 'H4_PPC_NonGeo_Romance'];\n  phone_numbers['H6'] = ['888.654.9823', 'H6_ListBUYemail'];\n  phone_numbers['H7'] = ['866.500.0395', 'H7-VisitPA'];\n  phone_numbers['H8'] = ['866.456.6467', 'H8_PPC_Banner_SkiStay'];\n  phone_numbers['J2'] = ['888.654.9834', 'J2_MilesMedia_Leads'];\n  phone_numbers['J3'] = ['888.654.9841', 'J3_Facebook'];\n  phone_numbers['J4'] = ['888.654.9848', 'J4_SecretEscapes'];\n  phone_numbers['J5'] = ['888.654.9857', 'J5_Sales_Group_Flyer'];\n  phone_numbers['J6'] = ['800.698.4693', 'J6_EmailEnrollment'];\n  phone_numbers['J7'] = ['888.852.7393', 'J7_NYCBus30off'];\n  phone_numbers['J8'] = ['888.852.7395', 'J8_LincolnTunnel_Billboard'];\n  phone_numbers['J9'] = ['888.852.7422', 'J9_TravelZoo'];\n  phone_numbers['K4'] = ['866.500.5517', 'K4_Njcom'];\n  phone_numbers['K5'] = ['866.500.5518', 'K5_RSLAAdsUndecided'];\n  phone_numbers['K6'] = ['888.852.7434', 'K6_KoreanOnlineAds'];\n  phone_numbers['K8'] = ['888.852.7435', 'Ad-K8 Wedding Brochure'];\n  phone_numbers['K9'] = ['888.852.7436', 'Ad-K9 Confirmation Email'];\n  phone_numbers['M2'] = ['888.852.7437', 'M2_PPC_Romance'];\n  phone_numbers['M3'] = ['800.862.9323', 'Ad-M3 Getaway Card'];\n  phone_numbers['M4'] = ['888.852.7438', 'M4_BaltimoreSun'];\n  phone_numbers['M7'] = ['888.852.7439', 'M7_YouTube'];\n  phone_numbers['M8'] = ['888.852.7440', 'Ad-M8 GAW 50% Email'];\n  phone_numbers['M9'] = ['888.963.3036', 'M9_IGLTA_webbanner'];\n  phone_numbers['N3'] = ['888.963.3046', 'Ad-N3 Agent Triggered Email'];\n  phone_numbers['N4'] = ['888.386.4693', 'Ad-N4 Honeymoon Location.com'];\n  phone_numbers['N5'] = ['888.963.3048', 'N5_Event_Only_Tickets'];\n  phone_numbers['N6'] = ['888.963.3049', 'N6_PoconoRecord'];\n  phone_numbers['N7'] = ['888.963.3050', 'N7_Wedding_VGI_Flyer'];\n  phone_numbers['N8'] = ['888.963.3051', 'N8_PPC_Bing_Branded_Ski'];\n  phone_numbers['N9'] = ['888.963.3052', 'Ad-N9 PMVB Packages'];\n  phone_numbers['P2'] = ['888.963.3053', 'Ad-P2 Ski Town.com'];\n  phone_numbers['P3'] = ['888.654.9821', 'P3_CustomerMatchEvent'];\n  phone_numbers['P4'] = ['866.500.0479', 'P4_KoreaTimesAD'];\n  phone_numbers['P5'] = ['888.654.9815', 'Ad-P5 Click to Call'];\n  phone_numbers['P6'] = ['866.500.5512', 'P6_CustomerMatchPostStay'];\n  phone_numbers['P7'] = ['800.585.6190', 'P7 HoneymoonWebsite'];\n  phone_numbers['P8'] = ['800.585.6196', 'P8_Travel_Agent_Letter'];\n  phone_numbers['P9'] = ['800.585.6210', 'P9_AmpRadio_Philly '];\n  phone_numbers['R2'] = ['800.987.2048', 'R2_FLP_FreeNight_Cert'];\n  phone_numbers['R3'] = ['800.987.2050', 'R3_ChineseEliteMag'];\n  phone_numbers['R4'] = ['800.987.2058', 'R4_Tripadvisor_FlashBanner'];\n  phone_numbers['R5'] = ['800.987.2052', 'Em - Honeymoon 14 Day'];\n  phone_numbers['R6'] = ['800.987.2059', 'R6_GAW_BenefitCard'];\n  phone_numbers['R7'] = ['800.987.2060', 'R7_Weddings_Website'];\n  phone_numbers['R8'] = ['800.987.2065', 'R8_HoneymoonLetter_V2'];\n  phone_numbers['R9'] = ['800.972.3890', 'R9_HolidayParty'];\n  phone_numbers['U2'] = ['866.456.6343', 'U2_Mailer_BridalLeads'];\n  phone_numbers['U6'] = ['866.456.6438', 'U6_RiverReporter_Newspaper'];\n  phone_numbers['U8'] = ['866.456.6460', 'U8_WebRes_VGIadded'];\n  phone_numbers['U9'] = ['866.456.6461', 'U9_Email_Promo_8'];\n  phone_numbers['X3'] = ['866.456.6468', 'X3_CXL_Email'];\n  phone_numbers['X4'] = ['877.800.5322', 'X4-Froggy101'];\n  phone_numbers['X5'] = ['877.800.5365', 'X5_HnymnBro_2wk_ltr'];\n  phone_numbers['X6'] = ['877.800.5366', 'X6_40%_CPT_TV_NYC'];\n  phone_numbers['X7'] = ['877.800.5380', 'X7_PPC_TestOffer'];\n  phone_numbers['X8'] = ['877.800.5389', 'X8_TouricoHolidays'];\n  phone_numbers['X9'] = ['888.444.1439', 'X9_ChineseGPSMag'];\n  phone_numbers['Y1'] = ['800.944.0994', 'NEEDS A NEW DNIS'];\n  phone_numbers['Y2'] = ['888.444.2715', 'Y2_HoneymoonBro_Weddings'];\n  phone_numbers['Y3'] = ['888.444.8058', 'Y3-Dealoftheday'];\n  phone_numbers['Y4'] = ['888.658.2908', 'Y4_PPC_SpringBanners'];\n  phone_numbers['Y5'] = ['888.658.2919', 'Ad-Y5 Click to Call Book Engine'];\n  phone_numbers['Y6'] = ['888.658.2920', 'Ad-Y6 Pursuits Magazine'];\n  phone_numbers['Y8'] = ['888.658.2925', 'Y8_VGI Brochure'];\n  phone_numbers['Y9'] = ['888.658.2938', 'Y9_Wayne_Independent'];\n  phone_numbers['Z1'] = ['866.456.6443', 'Z1_EmailEnrollment--DO NOT USE'];\n  phone_numbers['Z2'] = ['800.257.3201', 'Z2_EnGAYged'];\n  phone_numbers['Z3'] = ['877.570.0115', 'Z3_ShermanTravel'];\n  phone_numbers['Z4'] = ['888.654.9858', 'Z4_BookDirect_Passion'];\n  phone_numbers['Z5'] = ['800.698.4705', 'Z5_ShawneeStayPlay'];\n  phone_numbers['Z6'] = ['888.444.2714', 'Z6_BookDirect_35'];\n  phone_numbers['Z7'] = ['800.233.4141', 'Z7_GeneralInquiries'];\n  phone_numbers['Z8'] = ['888.866.6591', 'Z8_notused'];\n  phone_numbers['Z9'] = ['800.327.3992', 'Z9_Getaway Department'];\n\n//# sourceURL=webpack://cms/./src/clients/cove-haven/submodules/_phone-numbers-data.js?");

/***/ }),

/***/ "./src/clients/cove-haven/submodules/main.js":
/*!***************************************************!*\
  !*** ./src/clients/cove-haven/submodules/main.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"phone_numbers\": () => (/* reexport safe */ _phone_numbers_data__WEBPACK_IMPORTED_MODULE_0__.phone_numbers)\n/* harmony export */ });\n/* harmony import */ var _phone_numbers_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_phone-numbers-data */ \"./src/clients/cove-haven/submodules/_phone-numbers-data.js\");\n\n\n//# sourceURL=webpack://cms/./src/clients/cove-haven/submodules/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/clients/cove-haven/pages/all-pages.js");
/******/ 	cms = __webpack_exports__;
/******/ 	
/******/ })()
;