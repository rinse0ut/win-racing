import React from 'react'

const Slide = (props) => {
    const { id, caption, media_type, media_url } = props.feed

    console.log('SLIDE:media_url', media_url)

    if (media_type === 'VIDEO') return null;

    return (
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${media_url})` }}>
                {/* <span>{caption}</span> */}
            </div>
        </div>
    );
}

export default Slide;