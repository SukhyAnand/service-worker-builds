/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A top-level Angular Service Worker configuration object.
 *
 * \@experimental
 * @record
 */
export function Config() { }
function Config_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    Config.prototype.appData;
    /** @type {?} */
    Config.prototype.index;
    /** @type {?|undefined} */
    Config.prototype.assetGroups;
    /** @type {?|undefined} */
    Config.prototype.dataGroups;
    /** @type {?|undefined} */
    Config.prototype.navigationUrls;
}
/**
 * Configuration for a particular group of assets.
 *
 * \@experimental
 * @record
 */
export function AssetGroup() { }
function AssetGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    AssetGroup.prototype.name;
    /** @type {?|undefined} */
    AssetGroup.prototype.installMode;
    /** @type {?|undefined} */
    AssetGroup.prototype.updateMode;
    /** @type {?} */
    AssetGroup.prototype.resources;
}
/**
 * Configuration for a particular group of dynamic URLs.
 *
 * \@experimental
 * @record
 */
export function DataGroup() { }
function DataGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    DataGroup.prototype.name;
    /** @type {?} */
    DataGroup.prototype.urls;
    /** @type {?|undefined} */
    DataGroup.prototype.version;
    /** @type {?} */
    DataGroup.prototype.cacheConfig;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgdHlwZSBHbG9iID0gc3RyaW5nO1xuXG4vKipcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IHR5cGUgRHVyYXRpb24gPSBzdHJpbmc7XG5cbi8qKlxuICogQSB0b3AtbGV2ZWwgQW5ndWxhciBTZXJ2aWNlIFdvcmtlciBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgYXBwRGF0YT86IHt9O1xuICBpbmRleDogc3RyaW5nO1xuICBhc3NldEdyb3Vwcz86IEFzc2V0R3JvdXBbXTtcbiAgZGF0YUdyb3Vwcz86IERhdGFHcm91cFtdO1xuICBuYXZpZ2F0aW9uVXJscz86IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGEgcGFydGljdWxhciBncm91cCBvZiBhc3NldHMuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0R3JvdXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGluc3RhbGxNb2RlPzogJ3ByZWZldGNoJ3wnbGF6eSc7XG4gIHVwZGF0ZU1vZGU/OiAncHJlZmV0Y2gnfCdsYXp5JztcbiAgcmVzb3VyY2VzOiB7ZmlsZXM/OiBHbG9iW107IHZlcnNpb25lZEZpbGVzPzogR2xvYltdOyB1cmxzPzogR2xvYltdO307XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgYSBwYXJ0aWN1bGFyIGdyb3VwIG9mIGR5bmFtaWMgVVJMcy5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdyb3VwIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmxzOiBHbG9iW107XG4gIHZlcnNpb24/OiBudW1iZXI7XG4gIGNhY2hlQ29uZmlnOiB7XG4gICAgbWF4U2l6ZTogbnVtYmVyOyBtYXhBZ2U6IER1cmF0aW9uOyB0aW1lb3V0PzogRHVyYXRpb247IHN0cmF0ZWd5PzogJ2ZyZXNobmVzcycgfCAncGVyZm9ybWFuY2UnO1xuICB9O1xufVxuIl19