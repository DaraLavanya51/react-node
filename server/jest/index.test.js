const {add,err,promiseTest,arr,app} = require('./index');
const supertest = require('supertest')

test('toBe',()=>{
    expect(add(1,2)).toBe(3)
})

//toBe and toEqual both are same 

test('toEqual',()=>{
    expect(add(1,2)).toEqual(3) 
})

test('toBeDefined',()=>{
    expect(add(1,2)).toBeDefined()
})

test('toBeNull',()=>{
    expect(add(1,2)).not.toBeNull()
})

test('toBeGreatherThan',()=>{
    expect(add(1,2)).toBeGreaterThan(1)
})

test('toBeLessThan',()=>{
    expect(add(1,2)).toBeLessThan(4)
})

test('toMatch',()=>{
    expect(add('hello','world')).toMatch(/hello/)
})

test('toThrow',()=>{
    expect(()=>err()).toThrow('I am new error')
})

//IF WE HAVE A N NUMBER OF TEST CASES

// describe('I am block',()=>{
//     test('I am executing in a block',()=>{
//         expect(()=>err()).toThrow('I am new error')
//     })
//     test('toThrow',()=>{
//         expect(()=>err()).toThrow('I am new error')
//     })
// })

test('promiseTest old way',()=>{
    promiseTest(1,2)
    .then(data=>{
        expect(data).toBe('+ve')
    }).catch(e=>{
        expect(e).toBe('-ve')
    })
})

test('promiseTest easy way',()=>{
    expect(promiseTest(2,1)).resolves.toBe("+ve")
})

test('promiseTest easy way',()=>{
    expect(promiseTest(1,2)).rejects.toBe("-ve")
})

test('toContain',()=>{
    expect(arr()).toContain('Bat')
})

test('TEST GET USERS API',async()=>{
    await supertest(app)
    .get('/users')
    .expect(200)
    .then(result=>{
        expect(result && result.body && typeof result.body === 'object')
    })
})

