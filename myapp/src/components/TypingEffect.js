import React, {useEffect, useRef} from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['React Developer', 'Website Developer', 'Website Designer', 'Wordpress Developer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed(typingRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return <span className="typing" ref={typingRef} />;
};

export default TypingEffect