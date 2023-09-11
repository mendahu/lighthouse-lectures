import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          // style="enable-background:new 0 0 512 512;"
          xmlSpace="preserve"
          className="spin"
        >
          <path
            style={{ fill: "#2D50A7" }}
            d="M267.636,0c-12.853,0-23.273,10.42-23.273,23.273v93.091c0,12.853,10.42,23.273,23.273,23.273
	c12.853,0,23.273-10.42,23.273-23.273V23.273C290.909,10.42,280.489,0,267.636,0z"
          />
          <path
            style={{ fill: "#73A1FB" }}
            d="M267.638,372.364c-12.853,0-23.273,10.42-23.273,23.273v93.091c0,12.853,10.42,23.273,23.273,23.273
	c12.853,0,23.273-10.42,23.273-23.273v-93.091C290.911,382.784,280.491,372.364,267.638,372.364z"
          />
          <path
            style={{ fill: "#355EC9" }}
            d="M185.355,140.808L119.529,74.98c-9.086-9.089-23.822-9.089-32.912,0
	c-9.089,9.089-9.089,23.824,0,32.912l65.826,65.828c4.544,4.544,10.501,6.817,16.455,6.817c5.955,0,11.913-2.273,16.455-6.817
	C194.444,164.631,194.444,149.897,185.355,140.808z"
          />
          <g>
            <path
              style={{ fill: "#C4D9FD" }}
              d="M477.091,232.727h-46.545c-12.853,0-23.273,10.42-23.273,23.273
		c0,12.853,10.42,23.273,23.273,23.273h46.545c12.853,0,23.273-10.42,23.273-23.273
		C500.364,243.147,489.944,232.727,477.091,232.727z"
            />
            <path
              style={{ fill: "#C4D9FD" }}
              d="M382.83,338.283c-9.087-9.089-23.823-9.087-32.912,0c-9.089,9.089-9.087,23.823,0,32.912
		l65.828,65.825c4.544,4.544,10.501,6.816,16.457,6.816c5.956,0,11.913-2.273,16.455-6.816c9.089-9.089,9.089-23.824,0-32.912
		L382.83,338.283z"
            />
          </g>
          <path
            style={{ fill: "#3D6DEB" }}
            d="M151.273,256c0-12.853-10.42-23.273-23.273-23.273H34.909c-12.853,0-23.273,10.42-23.273,23.273
	c0,12.853,10.42,23.273,23.273,23.273H128C140.853,279.273,151.273,268.853,151.273,256z"
          />
          <path
            style={{ fill: "#5286FA" }}
            d="M185.355,338.283c-9.087-9.089-23.824-9.089-32.912,0l-65.825,65.825
	c-9.089,9.087-9.089,23.824,0,32.912c4.544,4.544,10.501,6.816,16.457,6.816c5.956,0,11.913-2.271,16.455-6.816l65.825-65.825
	C194.444,362.108,194.444,347.372,185.355,338.283z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
