/**
 * Join base url and the extra url path
 * @param  {String} base
 * @param  {String} extraPath
 */
import { dropIfEndsWith, ensureStartsWith } from './index';

export function join(base, extraPath) {
    return base
        ? extraPath
            ? dropIfEndsWith(base, '/') + ensureStartsWith(extraPath, '/')
            : base
        : extraPath;
}
