import dbgGetCallerFile from '../lang/dbgGetCallerFile';

function mockFn() {
    const file = dbgGetCallerFile();

    return file;
}

export default mockFn;