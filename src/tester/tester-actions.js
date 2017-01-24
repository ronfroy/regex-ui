export const REGEX_TESTER_ADD_TEST = 'REGEX_TESTER_ADD_TEST';
export const REGEX_TESTER_RESET = 'REGEX_TESTER_RESET';

export const addTestAction = () => {
    return {
        type: REGEX_TESTER_ADD_TEST
    }
};

export const resetAction = () => {
    return {
        type: REGEX_TESTER_RESET
    }
};