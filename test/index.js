/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Amdify = require(path.resolve(__dirname, '..')),
  amdify = Amdify({}),
  fs = require('fs');

test('construx-makara-amdify', function (t) {

    t.test('processes a good request for an amd languagepack file', function (t) {
        t.plan(1);
        //process good languagepack request
        var args = {
            context: {
                filePath: '/en-US/_languagepack.js'
            },
            i18n: {
                contentPath: path.resolve(__dirname)
            }
        };
        amdify(null, args, function (err, out) {
            t.ok(out.indexOf('World') > 0);
            t.end();
        });
    });


});