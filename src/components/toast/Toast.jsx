import { ToastContainer, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(props) {
  const { ...rest } = props;

  // create the transition
  const transitionDisabled = cssTransition({
    enter: 'noop',
    exit: 'noop',
    collapse: false,
  });

  return (
    <ToastContainer
      theme="light"
      pauseOnHover
      hideProgressBar
      position="bottom-right"
      autoClose={5000}
      transition={transitionDisabled}
      {...rest}
    />
  );
}

export default Toast;
