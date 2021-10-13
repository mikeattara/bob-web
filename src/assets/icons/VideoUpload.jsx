const VideoUploadIcon = ({ size, color, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 24 24'
    {...rest}
  >
    <path
      d='M18 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.333L22 17V7l-4 3.333V7zm-4 6h-3v3H9v-3H6v-2h3V8h2v3h3v2z'
      fill={color}
    />
  </svg>
);
export default VideoUploadIcon;
