function Button({
  children,
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  propSafeGuard: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one descriptive prop-type allowed per button. Please double-check your props."
      );
    }
  },
};

export default Button;
