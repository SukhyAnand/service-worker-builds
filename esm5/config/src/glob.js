/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WILD_SINGLE = '[^\\/]*';
var WILD_OPEN = '(?:.+\\/)?';
var TO_ESCAPE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\?/g, with: '\\?' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
export function globToRegex(glob) {
    var segments = glob.split('/').reverse();
    var regex = '';
    while (segments.length > 0) {
        var segment = (segments.pop());
        if (segment === '**') {
            if (segments.length > 0) {
                regex += WILD_OPEN;
            }
            else {
                regex += '.*';
            }
        }
        else {
            var processed = TO_ESCAPE.reduce(function (segment, escape) { return segment.replace(escape.replace, escape.with); }, segment);
            regex += processed;
            if (segments.length > 0) {
                regex += '\\/';
            }
        }
    }
    return regex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NlcnZpY2Utd29ya2VyL2NvbmZpZy9zcmMvZ2xvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDO0FBQzlCLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQztBQUUvQixJQUFNLFNBQVMsR0FBRztJQUNoQixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztJQUM3QixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztJQUM3QixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztJQUM3QixFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztDQUNwQyxDQUFDO0FBRUYsTUFBTSxzQkFBc0IsSUFBWTtJQUN0QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBTSxPQUFPLEdBQUcsQ0FBQSxRQUFRLENBQUMsR0FBRyxFQUFJLENBQUEsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxTQUFTLENBQUM7YUFDcEI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLElBQUksSUFBSSxDQUFDO2FBQ2Y7U0FDRjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDOUIsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBNUMsQ0FBNEMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoRixLQUFLLElBQUksU0FBUyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLEtBQUssQ0FBQzthQUNoQjtTQUNGO0tBQ0Y7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmNvbnN0IFdJTERfU0lOR0xFID0gJ1teXFxcXC9dKic7XG5jb25zdCBXSUxEX09QRU4gPSAnKD86LitcXFxcLyk/JztcblxuY29uc3QgVE9fRVNDQVBFID0gW1xuICB7cmVwbGFjZTogL1xcLi9nLCB3aXRoOiAnXFxcXC4nfSxcbiAge3JlcGxhY2U6IC9cXD8vZywgd2l0aDogJ1xcXFw/J30sXG4gIHtyZXBsYWNlOiAvXFwrL2csIHdpdGg6ICdcXFxcKyd9LFxuICB7cmVwbGFjZTogL1xcKi9nLCB3aXRoOiBXSUxEX1NJTkdMRX0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2xvYlRvUmVnZXgoZ2xvYjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc2VnbWVudHMgPSBnbG9iLnNwbGl0KCcvJykucmV2ZXJzZSgpO1xuICBsZXQgcmVnZXg6IHN0cmluZyA9ICcnO1xuICB3aGlsZSAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50cy5wb3AoKSAhO1xuICAgIGlmIChzZWdtZW50ID09PSAnKionKSB7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZWdleCArPSBXSUxEX09QRU47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWdleCArPSAnLionO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9jZXNzZWQgPSBUT19FU0NBUEUucmVkdWNlKFxuICAgICAgICAgIChzZWdtZW50LCBlc2NhcGUpID0+IHNlZ21lbnQucmVwbGFjZShlc2NhcGUucmVwbGFjZSwgZXNjYXBlLndpdGgpLCBzZWdtZW50KTtcbiAgICAgIHJlZ2V4ICs9IHByb2Nlc3NlZDtcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZ2V4ICs9ICdcXFxcLyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZWdleDtcbn1cbiJdfQ==