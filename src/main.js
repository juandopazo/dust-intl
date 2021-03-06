/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jshint esnext: true */

import {registerWith, __addLocaleData} from './helpers';
import defaultLocale from './en';

__addLocaleData(defaultLocale);

// Re-export as default for
export default {
    registerWith   : registerWith,
    __addLocaleData: __addLocaleData
};
