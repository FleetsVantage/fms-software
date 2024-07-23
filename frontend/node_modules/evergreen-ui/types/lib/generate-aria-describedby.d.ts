/**
 * Generates a token value for `aria-describedby` when the author provides `description`, `hint`, or `validationMessage` strings.
 * @param {String} id
 * @param {Object} helperTextCandidates
 * @param {String | React.ReactNode} [helperTextCandidates.description]
 * @param {String | React.ReactNode} [helperTextCandidates.hint]
 * @param {String | React.ReactNode} [helperTextCandidates.validationMessage]
 * @returns {String | null}
 */
export function generateAriaDescribedBy(id: string, { description, hint, validationMessage }: {
    description?: string | React.ReactNode;
    hint?: string | React.ReactNode;
    validationMessage?: string | React.ReactNode;
}): string | null;
