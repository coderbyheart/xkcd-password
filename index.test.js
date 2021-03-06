/* global test expect describe */

const childProcess = require('child_process')
const path = require('path')

describe('index.js', () => {
    test('should exit the process with 0', () => {
        childProcess.execSync(path.join(process.cwd(), 'index.js'))
    })
    test('should return a four word password', () => {
        const out = childProcess.execSync(path.join(process.cwd(), 'index.js'))
        expect(out.toString()).toEqual(expect.stringMatching(/^([a-z]{5,} ?){4}\n$/))
    })
    test('should not return the same password on consecutive calls', () => {
        const out1 = childProcess.execSync(path.join(process.cwd(), 'index.js'))
        const out2 = childProcess.execSync(path.join(process.cwd(), 'index.js'))
        expect(out1).not.toBe(out2)
    })
})
