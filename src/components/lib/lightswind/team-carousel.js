"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils';

export const TeamCarousel = ({

     members = [
        {
            id: 1,
            name: "Soham Mehta",
            role: "Operations Director",
            email: "soham@indhanpay.com",
            image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
            bio: "Manages operations and optimizes processes to boost efficiency at InDhanPay. His leadership fosters seamless collaboration within the team.",
        },
        {
            id: 2,
            name: "Bharat Rawal",
            role: "Project Head",
            email: "bharat@indhanpay.com",
            image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
            bio: "Drives project management and strategic planning, ensuring timely delivery of quality projects. He coordinates with stakeholders to meet goals effectively.",
        },
        {
            id: 3,
            name: "Utkarsh Jyotishi",
            role: "CEO & MD",
            email: "utkarsh@indhanpay.com",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
            bio: "Guides InDhanPay's vision and strategy, focusing on innovation and market growth. His leadership cultivates creativity and collaboration among team members.",
        },
        {
            id: 4,
            name: "Punit Pawar",
            role: "Backend Developer",
            email: "punit@indhanpay.com",
            image: "https://images.unsplash.com/photo-1519340333755-c89213c1e339?auto=format&fit=crop&w=400&q=80",
            bio: "Develops robust server-side solutions that enhance system reliability and performance. His expertise underpins all backend operations at InDhanPay.",
        },
        {
            id: 5,
            name: "Dipesh Prajapat",
            role: "Backend Developer",
            email: "dipesh@indhanpay.com",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
            bio: "Designs scalable architectures that optimize digital infrastructure for better performance. He ensures efficient coding and technologies are implemented.",
        },
        {
            id: 6,
            name: "Nikhil Thakre",
            role: "Flutter Developer",
            email: "nikhil@indhanpay.com",
            image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80",
            bio: "Creates engaging mobile applications that prioritize user experience and functionality. His work integrates design with technology for intuitive apps.",
        },
        {
            id: 7,
            name: "Sumit Khandegar",
            role: "React Developer",
            email: "sumit@indhanpay.com",
            image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            bio: "Crafts responsive and user-friendly interfaces that enhance the digital experience. His designs balance aesthetics with usability for diverse audiences.",
        },
        {
            id: 8,
            name: "Pranjal Chabra",
            role: "React Developer",
            email: "pranjal@indhanpay.com",
            image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
            bio: "Develops dynamic and interactive user interfaces for applications. His designs boost user engagement and improve overall usability across platforms.",
        },
        {
            id: 9,
            name: "Vishal Rajawat",
            role: "3D Design & Analysis",
            email: "vishal@indhanpay.com",
            image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
            bio: "Innovates in visual design and technical modeling, providing creative solutions for complex challenges. His contributions elevate the brand's aesthetic appeal.",
        },
        {
            id: 10,
            name: "Yogant Satankar",
            role: "Graphics",
            email: "yogant@indhanpay.com",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
            bio: "Creates visually compelling graphics that effectively communicate the brand's message. His artistic vision enhances marketing materials and digital content.",
        },
    ],
    title = "OUR TEAM",
    titleSize = "2xl",
    titleColor = "rgb(237, 238, 239)",
    background = "",
    cardWidth =300,
    cardHeight = 450,
    cardRadius = 25,
    showArrows = true,
    showDots = true,
    keyboardNavigation = true,
    touchNavigation = true,
    animationDuration = 800,
    autoPlay = 2000,
    pauseOnHover = true,
    visibleCards = 2,
    sideCardScale = 0.9,
    sideCardOpacity = 0.8,
    grayscaleEffect = true,
    className,
    cardClassName,
    titleClassName,
    infoPosition = "bottom",
    infoTextColor = "rgb(247, 248, 249)",
    infoBackground = "transparent",
    onMemberChange,
    onCardClick,
    initialIndex = 0,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const updateCarousel = useCallback((newIndex) => {
        if (isAnimating || members.length === 0) return;
        setIsAnimating(true);
        const nextIndex = (newIndex + members.length) % members.length;
        setCurrentIndex(nextIndex);
        onMemberChange?.(members[nextIndex], nextIndex);
        setTimeout(() => setIsAnimating(false), animationDuration);
    }, [isAnimating, members, animationDuration, onMemberChange]);

    const getCardPosition = (index) => {
        const offset = (index - currentIndex + members.length) % members.length;
        if (offset === 0) return 'center';
        if (offset === 1) return 'right-1';
        if (offset === 2) return 'right-2';
        if (offset === 3) return 'right-3';
        if (offset === 4) return 'right-4';
        
        if (offset === members.length - 1) return 'left-1';
        if (offset === members.length - 2) return 'left-2';
        if (offset === members.length - 3) return 'left-3';
        if (offset === members.length - 4) return 'left-4';
        return 'hidden';
    };

    const getCardStyles = (position) => {
        const cardSpacing = cardWidth * 0.3; // Space between cards
        
        switch (position) {
            case 'center':
                return {
                    transform: `translateY(-50%) translateX(-50%) scale(1) translateZ(0) rotateY(0deg)`,
                    zIndex: 10,
                    opacity: 1,
                };
            case 'left-1':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(-${cardWidth + cardSpacing}px) scale(${sideCardScale}) translateZ(-50px) rotateY(15deg)`,
                    zIndex: 8,
                    opacity: sideCardOpacity,
                };
            case 'left-2':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(-${(cardWidth + cardSpacing) * 2}px) scale(${sideCardScale * 0.8}) translateZ(-100px) rotateY(25deg)`,
                    zIndex: 6,
                    opacity: sideCardOpacity * 0.6,
                };
            case 'left-3':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(-${(cardWidth + cardSpacing) * 3}px) scale(${sideCardScale * 0.6}) translateZ(-150px) rotateY(35deg)`,
                    zIndex: 4,
                    opacity: sideCardOpacity * 0.4,
                };
            case 'left-4':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(-${(cardWidth + cardSpacing) * 4}px) scale(${sideCardScale * 0.4}) translateZ(-200px) rotateY(45deg)`,
                    zIndex: 2,
                    opacity: sideCardOpacity * 0.2,
                };
            case 'right-1':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(${cardWidth + cardSpacing}px) scale(${sideCardScale}) translateZ(-50px) rotateY(-15deg)`,
                    zIndex: 8,
                    opacity: sideCardOpacity,
                };
            case 'right-2':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(${(cardWidth + cardSpacing) * 2}px) scale(${sideCardScale * 0.8}) translateZ(-100px) rotateY(-25deg)`,
                    zIndex: 6,
                    opacity: sideCardOpacity * 0.6,
                };
            case 'right-3':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(${(cardWidth + cardSpacing) * 3}px) scale(${sideCardScale * 0.6}) translateZ(-150px) rotateY(-35deg)`,
                    zIndex: 4,
                    opacity: sideCardOpacity * 0.4,
                };
            case 'right-4':
                return {
                    transform: `translateY(-50%) translateX(-50%) translateX(${(cardWidth + cardSpacing) * 4}px) scale(${sideCardScale * 0.4}) translateZ(-200px) rotateY(-45deg)`,
                    zIndex: 2,
                    opacity: sideCardOpacity * 0.2,
                };
            default:
                return {
                    transform: `translateY(-50%) translateX(-50%) scale(0.8)`,
                    opacity: 0,
                    pointerEvents: 'none',
                };
        }
    };

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay > 0) {
            const interval = setInterval(() => {
                updateCarousel(currentIndex + 1);
            }, autoPlay);
            return () => clearInterval(interval);
        }
    }, [autoPlay, currentIndex, updateCarousel]);

    // Keyboard navigation
    useEffect(() => {
        if (!keyboardNavigation) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
            else if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [keyboardNavigation, currentIndex, updateCarousel]);

    // Touch navigation
    const handleTouchStart = (e) => {
        if (!touchNavigation) return;
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => {
        if (!touchNavigation) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = () => {
        if (!touchNavigation) return;
        const swipeThreshold = 10;
        const diff = touchStart - touchEnd;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) updateCarousel(currentIndex + 1);
            else updateCarousel(currentIndex - 1);
        }
    };

    const titleSizeClasses = {
        sm: 'text-4xl',
        md: 'text-5xl',
        lg: 'text-6xl',
        xl: 'text-7xl',
        '2xl': 'text-8xl',
    };

    return (
        <div
            className={cn("min-h-screen flex flex-col items-center justify-center ", className)}
            style={{ background }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Title */}
            {title && (
                <>
                <h1
                    className={cn(
                        " uppercase tracking-tight absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap",
                        titleSizeClasses[titleSize],
                        titleClassName
                    )}
                    style={{
                        color: 'white',
                        background: `linear-gradient(to bottom, ${titleColor} 30%, )`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                    }}
                >
                    {title}
                </h1>
                </>
                
            )}
            

            {/* Carousel Container */}
            <div
                className="w-full max-w-6xl relative mt-10"
                style={{
                    height: cardHeight + 200,
                    perspective: '1000px',
                }}
            >
                {/* Navigation Arrows */}
                {showArrows && (
                    <>
                        <button
                            onClick={() => updateCarousel(currentIndex - 1)}
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 hover:bg-white bg-white/50 hover:text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => updateCarousel(currentIndex + 1)}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:bg-white bg-white/50  hover:text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Cards Track */}
                <div
                    className="w-full h-full flex justify-center items-center relative"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {members.map((member, index) => {
                        const position = getCardPosition(index);
                        const styles = getCardStyles(position);

                        return (
                            <div
                                key={member.id}
                                className={cn(
                                    "absolute bg-red-200 overflow-hidden h-full w-full cursor-pointer transition-all",
                                    cardClassName
                                )}
                                style={{
                                    width: cardWidth,
                                    height: cardHeight,
                                    borderRadius: cardRadius,
                                    top: '50%',
                                    left: '50%',
                                    // marginLeft: -cardWidth / 2,
                                    // marginTop: -cardHeight / 2,
                                    transitionDuration: `${animationDuration}ms`,
                                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    transformStyle: 'preserve-3d',
                                    backfaceVisibility: 'hidden',
                                    ...styles,
                                }}
                                onClick={() => {
                                    updateCarousel(index);
                                    onCardClick?.(member, index);
                                }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full !object-cover transition-all duration-800"
                                    style={{
                                        filter: position !== 'center' && grayscaleEffect ? 'grayscale(100%)' : 'none',
                                    }}
                                />

                                                             
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Member Info */}
            {infoPosition === 'bottom' && members[currentIndex] && (
                <div className="text-center !mt-0 transition-all duration-500">
                    <h2
                        className="text-4xl font-bold mb-3 relative inline-block"
                        style={{ color: infoTextColor }}
                    >
                        {members[currentIndex].name}
                        <span
                            className="absolute top-full left-0 w-full h-0.5 mt-2"
                            style={{ background: infoTextColor }}
                        />
                    </h2>
                    <p
                        className="text-xl font-medium opacity-80 uppercase tracking-wider"
                        style={{ color: infoTextColor }}
                    >
                        {members[currentIndex].role}
                    </p>
                                        <p
                        className="text-md font-medium opacity-80 uppercase tracking-wider"
                        style={{ color: "#FFC400" }}
                    >
                        {members[currentIndex].email}
                    </p>
                
                    {members[currentIndex].bio && (
                        <p className="!text-white mt-4 max-w-lg mx-auto opacity-70">
                            {members[currentIndex].bio}
                        </p>
                    )}
                </div>
            )}

            {/* Dots Indicator */}
            {showDots && (
                <div className="flex justify-center gap-3 !mt-10 ">
                    {members.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => updateCarousel(index)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                index === currentIndex
                                    ? "scale-125"
                                    : "hover:scale-110"
                            )}
                            style={{
                                background: index === currentIndex
                                    ? infoTextColor
                                    : `${infoTextColor}40`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamCarousel;