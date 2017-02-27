import reducer from '../app/reducer';

module('Lego Reducer: Other Actions', () => {
  test('it keeps the default state of empty array when the type does not match', (assert) => {
    const startingState = [];
    const action = { type: 'DONT_RESPOND_TO_THIS' };
    const expectedResult = [];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('it keeps the default state of a filled array when the type does not match', (assert) => {
    const startingState = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }];
    const action = { type: 'DONT_RESPOND_TO_THIS' };
    const expectedResult = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });
});

module('Lego Reducer: LEGO@ADD', () => {
  test('add red 1x1 to an empty state', (assert) => {
    const startingState = [];
    const action = { type: 'LEGO@ADD', color: 'red', shape: '1x1' };
    const expectedResult = [{ id: 1, color: 'red', shape: '1x1' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('add green 2x2 to an empty state', (assert) => {
    const startingState = [];
    const action = { type: 'LEGO@ADD', color: 'green', shape: '2x2' };
    const expectedResult = [{ id: 1, color: 'green', shape: '2x2' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('add red 1x1 to a state with one red brick', (assert) => {
    const startingState = [{ id: 1, color: 'red', shape: '1x1' }];
    const action = { type: 'LEGO@ADD', color: 'red', shape: '1x1' };
    const expectedResult = [{ id: 1, color: 'red', shape: '1x1' }, { id: 2, color: 'red', shape: '1x1' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('add green 2x2 to a state with one red brick', (assert) => {
    const startingState = [{ id: 1, color: 'red', shape: '1x1' }];
    const action = { type: 'LEGO@ADD', color: 'green', shape: '2x2' };
    const expectedResult = [{ id: 1, color: 'red', shape: '1x1' }, { id: 2, color: 'green', shape: '2x2' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('add red 1x1 to a state with two bricks', (assert) => {
    const startingState = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }];
    const action = { type: 'LEGO@ADD', color: 'red', shape: '1x1' };
    const expectedResult = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }, { id: 8, color: 'red', shape: '1x1' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('add green 2x2 to a state with two bricks', (assert) => {
    const startingState = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }];
    const action = { type: 'LEGO@ADD', color: 'green', shape: '2x2' };
    const expectedResult = [{ id: 2, color: 'red', shape: '1x1' }, { id: 7, color: 'white', shape: 'button' }, { id: 8, color: 'green', shape: '2x2' }];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });
});

module('Lego Reducer: LEGO@ADD', () => {
  test('remove a red 1x1 by itself', (assert) => {
    const startingState = [{ id: 1, color: 'red', shape: '1x1' }];
    const action = { type: 'LEGO@REMOVE', id: 1 };
    const expectedResult = [];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });

  test('remove a green 2x2 by itself', (assert) => {
    const startingState = [{ id: 8, color: 'green', shape: '2x2' }];
    const action = { type: 'LEGO@REMOVE', id: 8 };
    const expectedResult = [];

    assert.deepEqual(reducer(startingState, action), expectedResult);
  });
});
