/**
 * @param  {} base
 * @param  {} extraPath
 * @param  {} {returnbase?extraPath?dropIfEndsWith(base
 * @param  {} '/'
 * @param  {} +ensureStartsWith(extraPath
 * @param  {} '/'
 * @returns extraPath
 */
import { dropIfEndsWith, ensureStartsWith } from './index';


export function join(base, extraPath) {
    return base
        ? extraPath
            ? dropIfEndsWith(base, '/') + ensureStartsWith(extraPath, '/')
            : base
        : extraPath;
}
