const Junior = require('./junior');

const Grace = new Junior('Grace', 4234);

//Checks if Grace is an Instance of Junior
test('Checks if Grace is an Instance of Junior', () => {
    expect(Grace).toBeInstanceOf(Junior);
});
