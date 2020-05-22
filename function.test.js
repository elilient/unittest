const functions = require('./functions');

test('Users firstname should be test and lastname should be test2', () => {
    //expect.assertions(1);
    return functions.fetchUserInfo()
        .then(data => {
            expect(data.firstName).toBe('test');
            expect(data.lastName).toBe('test2');
        })
});

test('Email should be in the correct format', () => {
    return functions.fetchUserInfo()
        .then(data => {
            expect(data.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        })
});

