## v0.2.3
* use `@nuxtjs/eslint-config-typescript`
* update lint rules
* add `yarn format:config` script

## v0.2.2
* upgrade libs
* fix webpack bug by installing `loglevel` (temp fix)
* change target to es2018

## v0.2.1
* upgrade libs
* rename `test` dir to `test_unit`
* increase required nodejs version

## v0.2.0
* upgrade libs
* rename `ip_adress` store function
* use `ky` instead of `axios`
* add `intersection-observer` polyfill for `test`
* remove `test coverage`

## v0.1.5
* fix bug icon not display
* change lint `prettier/prettier` to warn

## v0.1.4
* use `data_services` layer

## v0.1.3
* add `@nuxtjs/axios/types`
* add `ip_address` store for better example
* change from `test` to `it`
* add `retryCondition`

## v0.1.2
* unlock `typescript` version because it break application
* correct `sassOptions` for `sass-loader@^8.0.0`
* lean html code
* fix `customVariables` not loaded

## v0.1.1
* lock `axios` to `0.18.1` until this [pull request](https://github.com/axios/axios/pull/2207) is merged.
* lock `typescript` to `3.5.3` until `typescript-eslint` support `3.6`
* `createLocalVue` is not need for this simple test

## v0.1.0
* init project
