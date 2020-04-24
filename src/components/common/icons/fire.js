import * as React from "react";

const Fire = (props) => {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <g clipPath="url(#fire_1_(1)_svg__clip0)">
        <path
          d="M6.322 19.964c.206.126.447-.1.328-.311a3.82 3.82 0 01-.491-1.882c0-1.45.802-2.61 1.982-3.38 1.045-.683.76-1.565.933-2.614.103-.622.491-1.188.816-1.564a.235.235 0 01.41.116c.19 1.179 1.72 3.185 2.601 4.494 1.015 1.51.95 2.84.942 2.94v.015a3.825 3.825 0 01-.49 1.87c-.12.21.12.44.327.311a7.06 7.06 0 003.181-4.526c.311-1.487.136-3.023-.367-4.444a10.56 10.56 0 00-1.204-2.376c-1.61-2.396-4.413-6.069-4.75-8.217a.472.472 0 00-.823-.231c-.005.004-.482.53-.78 1.112a6.5 6.5 0 00-.583 1.564 6.926 6.926 0 00.073 3.142c.084.332.191.657.322.973.126.304.262.61.285.942.038.62-.523 1.155-1.131 1.155-.545 0-.996-.327-1.113-.945a.235.235 0 00-.348-.16 7.006 7.006 0 00-3.458 6.043 7.022 7.022 0 003.338 5.973z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="fire_1_(1)_svg__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Fire