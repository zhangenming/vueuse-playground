/* eslint-disable no-template-curly-in-string */

const utilities: { [key: string]: string[]} = {
  animation: [
    'animate-{static}',
  ],
  backdropBlur: [
    'backdrop-blur-{static}',
    'backdrop-blur-[11px]',
  ],
  backdropBrightness: [
    'backdrop-brightness-{static}',
    'backdrop-brightness-[1.23]',
  ],
  backdropContrast: [
    'backdrop-contrast-{static}',
    'backdrop-contrast-[0.87]',
  ],
  backdropGrayscale: [
    'backdrop-grayscale-{static}',
    'backdrop-grayscale-[0.42]',
  ],
  backdropHueRotate: [
    'backdrop-hue-rotate-{static}',
    'backdrop-hue-rotate-[1.57rad]',
  ],
  backdropInvert: [
    'backdrop-invert-{static}',
    'backdrop-invert-[0.66]',
  ],
  backdropOpacity: [
    'backdrop-opacity-{static}',
    'backdrop-opacity-[22%]',
  ],
  backdropSaturate: [
    'backdrop-saturate-{static}',
    'backdrop-saturate-[144%]',
  ],
  backdropSepia: [
    'backdrop-sepia-{static}',
    'backdrop-sepia-[0.38]',
  ],
  backgroundColor: [
    'bg-{color}',
    'bg-${var}',
    'bg-[#0f0]',
    'bg-[#ff0000]',
    'bg-[#0000ffcc]',
    'bg-[rgb(123,123,123)]',
    'bg-[rgba(123,123,123,0.5)]',
    'bg-[hsl(0,100%,50%)]',
    'bg-[hsla(0,100%,50%,0.3)]',
  ],
  backgroundImage: [
    'bg-{static}',
  ],
  backgroundOpacity: [
    'bg-opacity-{static}',
    'bg-opacity-{int}',
    'bg-opacity-${var}',
    'bg-opacity-[0.11]',
    'bg-opacity-[var(--value)]',
  ],
  backgroundPosition: [
    'bg-{static}',
  ],
  backgroundSize: [
    'bg-{static}',
  ],
  blur: [
    'blur-{static}',
    'blur-{int}',
    'blur-{size}',
    'blur-[15px]',
  ],
  borderColor: [
    'border-{color}',
    'border-${var}',
    'border-[#f00]',
  ],
  borderOpacity: [
    'border-opacity-{static}',
    'border-opacity-{int}',
    'border-opacity-${var}',
  ],
  borderRadius: [
    'rounded-{static}',
    'rounded-t-{static}',
    'rounded-l-{static}',
    'rounded-r-{static}',
    'rounded-b-{static}',

    'rounded-${var}',
    'rounded-t-${var}',
    'rounded-l-${var}',
    'rounded-r-${var}',
    'rounded-b-${var}',

    'rounded-[11px]',
    'rounded-t-[var(--radius)]',
    'rounded-r-[var(--radius)]',
    'rounded-b-[var(--radius)]',
    'rounded-l-[var(--radius)]',
    'rounded-tr-[var(--radius)]',
    'rounded-br-[var(--radius)]',
    'rounded-bl-[var(--radius)]',
    'rounded-tl-[var(--radius)]',

    'rounded-tl-{static}',
    'rounded-tr-{static}',
    'rounded-br-{static}',
    'rounded-bl-{static}',

    'rounded-{nxl}',
    'rounded-{size}',
    'rounded-t-{nxl}',
    'rounded-t-{size}',
    'rounded-l-{nxl}',
    'rounded-l-{size}',
    'rounded-r-{nxl}',
    'rounded-r-{size}',
    'rounded-b-{nxl}',
    'rounded-b-{size}',
    'rounded-tl-{nxl}',
    'rounded-tl-{size}',
    'rounded-tr-{nxl}',
    'rounded-tr-{size}',
    'rounded-br-{nxl}',
    'rounded-br-{size}',
    'rounded-bl-{nxl}',
    'rounded-bl-{size}',
  ],
  borderWidth: [
    'border-{static}',
    'border-{int}',
    'border-{size}',
    'border-[2.5px]',
    'border-t-{static}',
    'border-t-{int}',
    'border-t-{size}',
    'border-r-{static}',
    'border-r-{int}',
    'border-r-{size}',
    'border-b-{static}',
    'border-b-{int}',
    'border-b-{size}',
    'border-l-{static}',
    'border-l-{int}',
    'border-l-{size}',
    'border-width-${var}',
    'border-t-width-${var}',
    'border-l-width-${var}',
    'border-r-width-${var}',
    'border-b-width-${var}',
  ],
  boxShadow: [
    'shadow-{static}',
  ],
  boxShadowColor: [
    'shadow-{color}',
    'shadow-${var}',
  ],
  brightness: [
    'brightness-{static}',
    'brightness-[300%]',
  ],
  caretColor: [
    'caret-{color}',
    'caret-${var}',
  ],
  caretOpacity: [
    'caret-opacity-{static}',
    'caret-opacity-${var}',
  ],
  content: [
    'content-{static}',
    'content-{string}',
    'content-${var}',
    'content-["👍"]',
    'content-[attr(data-content)]',
  ],
  container: [
    'container',
  ],
  contrast: [
    'contrast-{static}',
    'contrast-[2.4]',
  ],
  cursor: [
    'cursor-{static}',
  ],
  divideColor: [
    'divide-{color}',
    'divide-${var}',
  ],
  divideOpacity: [
    'divide-opacity-{static}',
    'divide-opacity-{int}',
    'divide-opacity-${var}',
  ],
  divideWidth: [
    'divide-y-{static}',
    'divide-x-{static}',
    'divide-y-reverse',
    'divide-x-reverse',
    'divide-y-{int}',
    'divide-x-{int}',
    'divide-y-${var}',
    'divide-x-${var}',
  ],
  dropShadow: [
    'drop-shadow-{static}',
  ],
  fill: [
    'fill-{color}',
    'fill-${var}',
    'fill-[#1c1c1e]',
    'fill-[var(--color)]',
  ],
  flex: [
    'flex-{static}',
    'flex-[var(--flex)]',
  ],
  flexGrow: [
    'flex-grow-{static}',
    'flex-grow-[var(--grow)]',
  ],
  flexShrink: [
    'flex-shrink-{static}',
    'flex-shrink-[var(--shrink)]',
  ],
  fontFamily: [
    'font-{static}',
    'font-${var}',
  ],
  fontSize: [
    'text-{static}',
    'text-{nxl}',
    'text-size-${var}',
    'text-[2.23rem]',
  ],
  fontWeight: [
    'font-{static}',
    'font-{int}',
  ],
  gap: [
    'gap-{static}',
    'gap-x-{static}',
    'gap-y-{static}',

    'gap-{float}',
    'gap-x-{float}',
    'gap-y-{float}',

    'gap-{size}',
    'gap-x-{size}',
    'gap-y-{size}',

    'gap-${var}',
    'gap-x-${var}',
    'gap-y-${var}',
  ],
  gradientColorStops: [
    'from-{color}',
    'from-${var}',
    'from-[#da5b66]',
    'from-[var(--color)]',
    'via-{color}',
    'via-${var}',
    'via-[#da5b66]',
    'via-[var(--color)]',
    'to-{color}',
    'to-${var}',
    'to-[#da5b66]',
    'to-[var(--color)]',
  ],
  grayscale: [
    'grayscale-{static}',
    'grayscale-[0.55]',
  ],
  gridAutoColumns: [
    'auto-cols-{static}',
  ],
  gridAutoRows: [
    'auto-rows-{static}',
  ],
  gridColumn: [
    'col-{static}',
    'col-span-{int}',
    'col-${var}',
    'col-[7]',
  ],
  gridColumnEnd: [
    'col-end-{static}',
    'col-end-{int}',
    'col-end-${var}',
    'col-end-[7]',
  ],
  gridColumnStart: [
    'col-start-{static}',
    'col-start-{int}',
    'col-start-${var}',
    'col-start-[7]',
  ],
  gridRow: [
    'row-{static}',
    'row-span-{int}',
    'row-${var}',
    'row-[7]',
  ],
  gridRowEnd: [
    'row-end-{static}',
    'row-end-{int}',
    'row-end-${var}',
    'row-end-[7]',
  ],
  gridRowStart: [
    'row-start-{static}',
    'row-start-{int}',
    'row-start-${var}',
    'row-start-[7]',
  ],
  gridTemplateColumns: [
    'grid-cols-{static}',
    'grid-cols-{int}',
    'grid-cols-${var}',
    'grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]',
  ],
  gridTemplateRows: [
    'grid-rows-{static}',
    'grid-rows-{int}',
    'grid-rows-${var}',
    'grid-rows-[200px,repeat(auto-fill,minmax(15%,100px)),300px]',
  ],
  height: [
    'h-{static}',
    'h-{float}',
    'h-{fraction}',
    'h-{nxl}',
    'h-{size}',
    'h-${var}',
    'h-[3.23rem]',
    'h-[calc(100%+1rem)]',
    'h-[var(--width)]',
  ],
  hueRotate: [
    'hue-rotate-{static}',
    'hue-rotate-[0.8turn]',
  ],
  inset: [
    'inset-{static}',
    'inset-{float}',
    'inset-{fraction}',
    'inset-{size}',
    'inset-${var}',
    'inset-[11px]',

    'inset-y-{static}',
    'inset-y-{float}',
    'inset-y-{fraction}',
    'inset-y-{size}',
    'inset-y-${var}',

    'inset-x-{static}',
    'inset-x-{float}',
    'inset-x-{fraction}',
    'inset-x-{size}',
    'inset-x-${var}',

    'top-{static}',
    'top-{float}',
    'top-{fraction}',
    'top-{size}',
    'top-${var}',

    'right-{static}',
    'right-{float}',
    'right-{fraction}',
    'right-{size}',
    'right-${var}',

    'bottom-{static}',
    'bottom-{float}',
    'bottom-{fraction}',
    'bottom-{size}',
    'bottom-${var}',

    'left-{static}',
    'left-{float}',
    'left-{fraction}',
    'left-{size}',
    'left-${var}',
  ],
  invert: [
    'invert-{static}',
    'invert-[0.75]',
  ],
  letterSpacing: [
    'tracking-{static}',
    'tracking-{size}',
    'tracking-${var}',
    'tracking-[var(--tracking)]',
  ],
  lineHeight: [
    'leading-{static}',
    'leading-{int}',
    'leading-{size}',
    'leading-${var}',
    'leading-[var(--leading)]',
  ],
  listStyleType: [
    'list-{static}',
  ],
  margin: [
    'm-{static}',
    'my-{static}',
    'mx-{static}',
    'mt-{static}',
    'mr-{static}',
    'mb-{static}',
    'ml-{static}',

    'm-{float}',
    'my-{float}',
    'mx-{float}',
    'mt-{float}',
    'mr-{float}',
    'mb-{float}',
    'ml-{float}',

    'm-{size}',
    'my-{size}',
    'mx-{size}',
    'mt-{size}',
    'mr-{size}',
    'mb-{size}',
    'ml-{size}',

    'm-${var}',
    'my-${var}',
    'mx-${var}',
    'mt-${var}',
    'mr-${var}',
    'mb-${var}',
    'ml-${var}',

    'm-[7px]',
    'my-[7px]',
    'mx-[7px]',
    'mt-[7px]',
    'mr-[7px]',
    'mb-[7px]',
    'ml-[7px]',
    'mt-[clamp(30px,100px)]',
  ],
  maxHeight: [
    'max-h-{static}',
    'max-h-{float}',
    'max-h-{fraction}',
    'max-h-{nxl}',
    'max-h-{size}',
    'max-h-${var}',
    'max-h-[3.23rem]',
    'max-h-[calc(100%+1rem)]',
    'max-h-[var(--width)]',
  ],
  maxWidth: [
    'max-w-{static}',
    'max-w-{float}',
    'max-w-{fraction}',
    'max-w-{nxl}',
    'max-w-{size}',
    'max-w-${var}',
    'max-w-[3.23rem]',
    'max-w-[calc(100%+1rem)]',
    'max-w-[var(--width)]',
  ],
  minHeight: [
    'min-h-{static}',
    'min-h-{float}',
    'min-h-{fraction}',
    'min-h-{nxl}',
    'min-h-{size}',
    'min-h-${var}',
    'min-h-[3.23rem]',
    'min-h-[calc(100%+1rem)]',
    'min-h-[var(--width)]',
  ],
  minWidth: [
    'min-w-{static}',
    'min-w-{float}',
    'min-w-{fraction}',
    'min-w-{nxl}',
    'min-w-{size}',
    'min-w-${var}',
    'min-w-[3.23rem]',
    'min-w-[calc(100%+1rem)]',
    'min-w-[var(--width)]',
  ],
  objectPosition: [
    'object-{static}',
  ],
  opacity: [
    'opacity-{static}',
    'opacity-{int}',
    'opacity-${var}',
    'opacity-[var(--opacity)]',
  ],
  order: [
    'order-{static}',
    'order-{int}',
    'order-${var}',
  ],
  outline: [
    'outline-{static}',
    'outline-[var(--outline)]',
  ],
  outlineColor: [
    'outline-{color}',
    'outline-${var}',
    'outline-solid-{color}',
    'outline-dotted-{color}',
  ],
  padding: [
    'p-{static}',
    'p-[var(--app-padding)]',

    'py-{static}',
    'px-{static}',
    'pt-{static}',
    'pr-{static}',
    'pb-{static}',
    'pl-{static}',

    'p-{float}',
    'py-{float}',
    'px-{float}',
    'pt-{float}',
    'pr-{float}',
    'pb-{float}',
    'pl-{float}',

    'p-{size}',
    'py-{size}',
    'px-{size}',
    'pt-{size}',
    'pr-{size}',
    'pb-{size}',
    'pl-{size}',

    'p-${var}',
    'py-${var}',
    'px-${var}',
    'pt-${var}',
    'pr-${var}',
    'pb-${var}',
    'pl-${var}',
  ],
  perspective: [
    'perspect-{static}',
  ],
  perspectiveOrigin: [
    'perspect-origin-{static}',
  ],
  placeholderColor: [
    'placeholder-{color}',
    'placeholder-${var}',
    'placeholder-[var(--placeholder)]',
  ],
  placeholderOpacity: [
    'placeholder-opacity-{static}',
    'placeholder-opacity-{int}',
    'placeholder-opacity-${var}',
    'placeholder-opacity-[var(--placeholder)]',
  ],
  ringColor: [
    'ring-{color}',
    'ring-${var}',
    'ring-[#76ad65]',
  ],
  ringOffsetColor: [
    'ring-offset-{color}',
    'ring-offset-${var}',
    'ring-offset-[#76ad65]',
  ],
  ringOffsetWidth: [
    'ring-offset-{static}',
    'ring-offset-{int}',
    'ring-offset-${var}',
    'ring-offset-[10px]',
  ],
  ringOpacity: [
    'ring-opacity-{static}',
    'ring-opacity-{int}',
    'ring-opacity-${var}',
    'ring-opacity-[var(--ring-opacity)]',
  ],
  ringWidth: [
    'ring-inset',
    'ring-{static}',
    'ring-{int}',
    'ring-width-${var}',
    'ring-[10px]',
  ],
  rotate: [
    'rotate-{static}',
    'rotate-{float}',
    'rotate-${var}',
    'rotate-x-{static}',
    'rotate-x-{float}',
    'rotate-x-${var}',
    'rotate-y-{static}',
    'rotate-y-{float}',
    'rotate-y-${var}',
    'rotate-z-{static}',
    'rotate-z-{float}',
    'rotate-z-${var}',
    'rotate-[23deg]',
    'rotate-[2.3rad]',
    'rotate-[401grad]',
    'rotate-[1.5turn]',
  ],
  saturate: [
    'saturate-{static}',
    'saturate-[180%]',
  ],
  scale: [
    'scale-{static}',
    'scale-{int}',
    'scale-${var}',
    'scale-x-{static}',
    'scale-x-{int}',
    'scale-x-${var}',
    'scale-y-{static}',
    'scale-y-{int}',
    'scale-y-${var}',
    'scale-z-{static}',
    'scale-z-{int}',
    'scale-z-${var}',
  ],
  sepia: [
    'sepia-{static}',
    'sepia-[0.2]',
  ],
  skew: [
    'skew-x-{static}',
    'skew-x-{float}',
    'skew-x-${var}',
    'skew-x-[3px]',

    'skew-y-{static}',
    'skew-y-{float}',
    'skew-y-${var}',
    'skew-y-[3px]',
  ],
  space: [
    'space-y-{static}',
    'space-y-reverse',
    'space-x-{static}',
    'space-x-reverse',
    'space-y-{float}',
    'space-x-{float}',
    'space-y-${var}',
    'space-x-${var}',
    'space-x-[20cm]',
    'space-x-[calc(20%-1cm)]',
  ],
  stroke: [
    'stroke-{color}',
    'stroke-${var}',
    'stroke-[#da5b66]',
  ],
  strokeWidth: [
    'stroke-{static}',
    'stroke-{int}',
    'stroke-width-${var}',
  ],
  strokeDashArray: [
    'stroke-dash-{static}',
    'stroke-dash-{int}',
  ],
  strokeDashOffset: [
    'stroke-offset-{static}',
    'stroke-offset-{int}',
  ],
  tabSize: [
    'tab-{static}',
  ],
  textColor: [
    'text-{color}',
    'text-${var}',
  ],
  textOpacity: [
    'text-opacity-{static}',
    'text-opacity-{int}',
    'text-opacity-${var}',
  ],
  textShadow: [
    'text-shadow-{static}',
  ],
  textDecorationColor: [
    'underline-{color}',
    'underline-${var}',
  ],
  textDecorationOpacity: [
    'underline-opacity-{static}',
    'underline-opacity-{int}',
    'underline-opacity-${var}',
  ],
  textDecorationLength: [
    'underline-{static}',
    'underline-{int}',
    'underline-{size}',
  ],
  textDecorationOffset: [
    'underline-offset-{static}',
    'underline-offset-{int}',
    'underline-offset-{size}',
  ],
  textIndent: [
    'indent-{static}',
    'indent-{size}',
  ],
  textStrokeColor: [
    'text-stroke-{color}',
    'text-stroke-${var}',
  ],
  textStrokeWidth: [
    'text-stroke-{static}',
    'text-stroke-{size}',
  ],
  transformOrigin: [
    'origin-{static}',
  ],
  transitionDuration: [
    'duration-{static}',
    'duration-{int}',
    'duration-${var}',
    'duration-[2s]',
    'duration-[var(--app-duration)]',
  ],
  transitionDelay: [
    'delay-{static}',
    'delay-{int}',
    'delay-${var}',
    'delay-[var(--delay)]',
  ],
  transitionProperty: [
    'transition-{static}',
  ],
  transitionTimingFunction: [
    'ease-{static}',
  ],
  translate: [
    'translate-{static}',
    'translate-{float}',
    'translate-{fraction}',
    'translate-{size}',
    'translate-${var}',

    'translate-x-{static}',
    'translate-x-{float}',
    'translate-x-{fraction}',
    'translate-x-{size}',
    'translate-x-${var}',

    'translate-y-{static}',
    'translate-y-{float}',
    'translate-y-{fraction}',
    'translate-y-{size}',
    'translate-y-${var}',

    'translate-z-{static}',
    'translate-z-{float}',
    'translate-z-{fraction}',
    'translate-z-{size}',
    'translate-z-${var}',
  ],
  width: [
    'w-{static}',
    'w-{float}',
    'w-{fraction}',
    'w-{nxl}',
    'w-{size}',
    'w-${var}',
    'w-[3.23rem]',
    'w-[calc(100%+1rem)]',
    'w-[calc(var(--10-10px,calc(-20px-(-30px--40px)))-50px)]',
    'w-[var(--width)]',
    'w-[var(--width,calc(100%+1rem))]',
    'w-[calc(100%/3-1rem*2)]',
  ],
  zIndex: [
    'z-{static}',
    'z-{int}',
    'z-${var}',
  ],
}

const negative: { [key: string]: true} = {
  inset: true,
  zIndex: true,
  order: true,
  margin: true,
  space: true,
  letterSpacing: true,
  rotate: true,
  translate: true,
  skew: true,
}

export { utilities, negative }
