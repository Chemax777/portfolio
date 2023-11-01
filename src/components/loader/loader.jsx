import { ThreeCircles } from "react-loader-spinner"

import './loader.css'

function Loader() {
    return (
        <div className="loader">
            <ThreeCircles
                height="100"
                width="100"
                color="#FFB742"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
}

export default Loader