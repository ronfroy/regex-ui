export const changeTestAction = (identifier, subject, must_match) => {
    return {
        type: 'REGEX_TESTER_CHANGE_TEST',
        test_identifier: identifier,
        test_subject: subject,
        test_must_match: must_match
    }
};