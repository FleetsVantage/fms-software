export default OptionShapePropType;
declare const OptionShapePropType: PropTypes.Requireable<PropTypes.InferProps<{
    label: PropTypes.Requireable<string>;
    value: PropTypes.Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
    disabled: PropTypes.Requireable<boolean>;
    icon: PropTypes.Requireable<string>;
}>>;
import PropTypes from "prop-types";
