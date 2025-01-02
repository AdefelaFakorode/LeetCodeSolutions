/**
 * @return {Function}
 */

/*
time comp: O(1)
space comp: O(1)
*/

var createHelloWorld = function () {
    let x = () => {
        return "Hello World"
    }

    return x
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */