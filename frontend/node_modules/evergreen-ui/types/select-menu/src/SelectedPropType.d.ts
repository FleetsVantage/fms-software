export default SelectedPropType;
/**
 * Selected can either be a string (single values)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */
declare const SelectedPropType: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
import PropTypes from "prop-types";
