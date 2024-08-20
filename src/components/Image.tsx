import React from "react"

const Image = ({
    imageUrl,
    height,
    width,
}:{
    imageUrl: string
    height: number | string;
    width: number | string;
}) =>  (
    <img
        src={imageUrl}
        height={height}
        width={width}
        className="rounded-full border border-teal-400"
    />
)

export default Image;
