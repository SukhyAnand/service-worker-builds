/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PARSE_TO_PAIRS = /([0-9]+[^0-9]+)/g;
var PAIR_SPLIT = /^([0-9]+)([dhmsu]+)$/;
export function parseDurationToMs(duration) {
    var matches = [];
    var array;
    while ((array = PARSE_TO_PAIRS.exec(duration)) !== null) {
        matches.push(array[0]);
    }
    return matches
        .map(function (match) {
        var res = PAIR_SPLIT.exec(match);
        if (res === null) {
            throw new Error("Not a valid duration: " + match);
        }
        var factor = 0;
        switch (res[2]) {
            case 'd':
                factor = 86400000;
                break;
            case 'h':
                factor = 3600000;
                break;
            case 'm':
                factor = 60000;
                break;
            case 's':
                factor = 1000;
                break;
            case 'u':
                factor = 1;
                break;
            default:
                throw new Error("Not a valid duration unit: " + res[2]);
        }
        return parseInt(res[1]) * factor;
    })
        .reduce(function (total, value) { return total + value; }, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2R1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILElBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQzFDLElBQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDO0FBRTFDLE1BQU0sNEJBQTRCLFFBQWdCO0lBQ2hELElBQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUU3QixJQUFJLEtBQTJCLENBQUM7SUFDaEMsT0FBTyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFDRCxPQUFPLE9BQU87U0FDVCxHQUFHLENBQUMsVUFBQSxLQUFLO1FBQ1IsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBeUIsS0FBTyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLE1BQU0sR0FBVyxDQUFDLENBQUM7UUFDdkIsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxLQUFLLEdBQUc7Z0JBQ04sTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2YsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDWCxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBOEIsR0FBRyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQyxDQUFDO1NBQ0QsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUssR0FBRyxLQUFLLEVBQWIsQ0FBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmNvbnN0IFBBUlNFX1RPX1BBSVJTID0gLyhbMC05XStbXjAtOV0rKS9nO1xuY29uc3QgUEFJUl9TUExJVCA9IC9eKFswLTldKykoW2RobXN1XSspJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uVG9NcyhkdXJhdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgbWF0Y2hlczogc3RyaW5nW10gPSBbXTtcblxuICBsZXQgYXJyYXk6IFJlZ0V4cEV4ZWNBcnJheXxudWxsO1xuICB3aGlsZSAoKGFycmF5ID0gUEFSU0VfVE9fUEFJUlMuZXhlYyhkdXJhdGlvbikpICE9PSBudWxsKSB7XG4gICAgbWF0Y2hlcy5wdXNoKGFycmF5WzBdKTtcbiAgfVxuICByZXR1cm4gbWF0Y2hlc1xuICAgICAgLm1hcChtYXRjaCA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IFBBSVJfU1BMSVQuZXhlYyhtYXRjaCk7XG4gICAgICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIHZhbGlkIGR1cmF0aW9uOiAke21hdGNofWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmYWN0b3I6IG51bWJlciA9IDA7XG4gICAgICAgIHN3aXRjaCAocmVzWzJdKSB7XG4gICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICBmYWN0b3IgPSA4NjQwMDAwMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgZmFjdG9yID0gMzYwMDAwMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgZmFjdG9yID0gNjAwMDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIGZhY3RvciA9IDEwMDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgIGZhY3RvciA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgYSB2YWxpZCBkdXJhdGlvbiB1bml0OiAke3Jlc1syXX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQocmVzWzFdKSAqIGZhY3RvcjtcbiAgICAgIH0pXG4gICAgICAucmVkdWNlKCh0b3RhbCwgdmFsdWUpID0+IHRvdGFsICsgdmFsdWUsIDApO1xufVxuIl19