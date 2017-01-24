export const REGEX_TESTER_REMOVE_TEST = 'REGEX_TESTER_REMOVE_TEST';
export const REGEX_TESTER_CHANGE_TEST = 'REGEX_TESTER_CHANGE_TEST';

export const removeTestAction = (identifier) => {
    return {
        type: REGEX_TESTER_REMOVE_TEST,
        test_identifier: identifier
    }
};
export const changeTestAction = (identifier, subject, must_match) => {
    return {
        type: REGEX_TESTER_CHANGE_TEST,
        test_identifier: identifier,
        test_subject: subject,
        test_must_match: must_match
    }
};